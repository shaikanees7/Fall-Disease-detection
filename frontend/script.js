/**
 * Human Fall Detection System - Frontend Interactive Logic
 */

// Navigation state management
function navigateTo(pageId) {
    // Hide all page views
    const views = document.querySelectorAll('.page-view');
    views.forEach(view => {
        view.classList.remove('active-view');
    });

    // Deactivate all nav buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show target page view
    const targetView = document.getElementById(`view-${pageId}`);
    if (targetView) {
        targetView.classList.add('active-view');
    }

    // Activate nav button
    const targetNav = document.getElementById(`nav-${pageId}`);
    if (targetNav) {
        targetNav.classList.add('active');
    }

    // Scroll to top of view
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// File Selection & Video Preview Handling
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    processVideoFile(file);
}

function processVideoFile(file) {
    const allowedExtensions = ['mp4', 'avi', 'mov', 'mkv'];
    const fileExt = file.name.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExt)) {
        showToast(`Selected file format (.${fileExt}) is not supported. Please select MP4, AVI, MOV, or MKV.`, true);
        return;
    }

    // Display filename
    const filenameLabel = document.getElementById('selected-filename');
    if (filenameLabel) {
        filenameLabel.textContent = file.name;
    }

    // Load video into HTML5 video player element
    const videoPlayer = document.getElementById('video-player');
    if (videoPlayer) {
        const videoURL = URL.createObjectURL(file);
        videoPlayer.src = videoURL;
        videoPlayer.load();
    }

    // Show video preview container and hide upload dropzone box
    const dropZone = document.getElementById('drop-zone');
    const previewWrapper = document.getElementById('preview-wrapper');

    if (dropZone && previewWrapper) {
        dropZone.style.display = 'none';
        previewWrapper.style.display = 'block';
    }
}

// Trigger "Analyze Video" Button Action
function triggerAnalysis() {
    showToast('Video ready for analysis');
}

// Helper function to display toast notices
let toastTimeout = null;
function showToast(message, isError = false) {
    const toast = document.getElementById('toast-notice');
    const toastMsg = document.getElementById('toast-message');

    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.style.display = 'block';

    if (isError) {
        toast.style.background = 'rgba(239, 68, 68, 0.15)';
        toast.style.borderColor = 'rgba(239, 68, 68, 0.4)';
        toast.style.color = '#f87171';
    } else {
        toast.style.background = 'rgba(16, 185, 129, 0.15)';
        toast.style.borderColor = 'rgba(16, 185, 129, 0.4)';
        toast.style.color = '#10b981';
    }

    if (toastTimeout) clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {
        toast.style.display = 'none';
    }, 4000);
}

// Drag and Drop Handling for Upload Box
document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');

    if (dropZone) {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, preventDefaults, false);
        });

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        ['dragenter', 'dragover'].forEach(eventName => {
            dropZone.addEventListener(eventName, () => {
                dropZone.classList.add('highlight');
            }, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, () => {
                dropZone.classList.remove('highlight');
            }, false);
        });

        dropZone.addEventListener('drop', (e) => {
            const dt = e.dataTransfer;
            const files = dt.files;

            if (files && files.length > 0) {
                processVideoFile(files[0]);
            }
        }, false);
    }
});
