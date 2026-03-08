---
name: ocr_processor
description: Logic for preprocessing check images and extracting data using Tesseract and Regex.
---

# OCR Processor Skill

This skill handles the transformation of raw check images into structured data.

## Instructions

1. **Preprocessing**: 
   - Convert image to grayscale.
   - Apply thresholding (Otsu's or binary) to highlight text.
   - Apply denoising if necessary.
2. **OCR Execution**:
   - Use `pytesseract.image_to_string` with appropriate configuration (e.g., `--psm 6` for sparse text or `--psm 3` for fully automatic layout).
3. **Data Extraction**:
   - Use regular expressions to extract:
     - `numero`
     - `fecha_emision`
     - `fecha_pago`
     - `banco`
     - `monto`
     - `cuit_emisor`

## Resources
- `ocr_logic.py`: Contains the actual implementation.
