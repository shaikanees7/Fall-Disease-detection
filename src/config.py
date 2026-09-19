"""
src/config.py

Contains project configuration values, model parameters, video resolution settings,
and threshold settings for fall detection analysis.
"""

# Detection & Tracking parameters
CONFIDENCE_THRESHOLD = 0.5
MODEL_PATH = "models/yolov8n.pt"

# Fall Analysis Parameters & Thresholds
CONSECUTIVE_FRAMES_THRESHOLD = 5
ASPECT_RATIO_THRESHOLD = 1.0  # width/height ratio threshold indicating potential fall
VELOCITY_THRESHOLD = 0.5
