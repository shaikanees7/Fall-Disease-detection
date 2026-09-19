# Human Fall Detection System

A Computer Vision system designed to detect human falls in real-time from webcam streams or prerecorded video files using YOLO object detection, multi-object tracking, and temporal body state analysis.

## 📌 Problem Statement
Falls are a major safety concern, especially for elderly individuals, patients, and people who live alone. An automated monitoring system helps detect falls in real-time and alerts caregivers/systems immediately to ensure rapid response.

## 🎯 Main Objectives
1. **Human Detection**: Identify humans in video frames using YOLO.
2. **Bounding Box Visualization**: Draw bounding boxes around detected individuals with confidence scores.
3. **Multi-Person Tracking**: Maintain person identities across consecutive frames.
4. **Pose & Movement Analysis**: Analyze body aspect ratio, bounding box velocity, and orientation over time.
5. **State Classification**: Classify person states into:
   - `NORMAL`
   - `FALLING`
   - `FALLEN`
   - `RECOVERING`
6. **Input/Output**: Support live webcam feed & prerecorded video processing with output video saving capabilities.

## 📁 Project Structure

```
fall_detection/
│
├── src/
│   ├── __init__.py
│   ├── detector.py          # YOLO human detection module
│   ├── tracker.py           # Multi-person tracking module
│   ├── fall_analyzer.py     # State & movement analysis module
│   ├── video_processor.py   # Video I/O and frame processing engine
│   ├── config.py            # System parameters and threshold configurations
│   └── utils.py             # Helper utilities and visualization functions
│
├── tests/
│   ├── __init__.py
│   ├── test_detector.py      # Unit tests for detector module
│   ├── test_tracker.py       # Unit tests for tracker module
│   └── test_fall_analyzer.py # Unit tests for fall analyzer module
│
├── videos/
│   ├── input/               # Directory for input videos
│   └── output/              # Directory for processed output videos
│
├── models/                  # Directory for pre-trained/fine-tuned model weights
├── logs/                    # Directory for runtime logs & event logs
│
├── requirements.txt         # Dependencies list
├── README.md                # Project documentation
├── .gitignore               # Git ignore file
└── main.py                  # Entry point script
```

## 🚀 Getting Started

*(Functionality will be implemented in subsequent phases.)*
