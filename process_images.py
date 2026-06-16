#!/usr/bin/env python3
"""
Process images to match the website theme:
- Primary accent: #1f5a3a (dark green)
- Secondary accent: #2f7a52 (lighter green)
- Gold: #caa94b
- Background: #f7f6f2 (cream)
"""

from PIL import Image, ImageEnhance
import os

def process_image_for_theme(input_path, output_path, enhance_contrast=1.2, enhance_color=0.85):
    """
    Process an image to match the website theme.
    Adjusts color balance toward warm tones (green/gold).
    """
    try:
        # Open image
        img = Image.open(input_path)
        print(f"Processing: {input_path}")
        print(f"  Original size: {img.size}, Mode: {img.mode}")
        
        # Convert to RGB if necessary
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Enhance contrast slightly for clarity
        enhancer_contrast = ImageEnhance.Contrast(img)
        img = enhancer_contrast.enhance(enhance_contrast)
        
        # Enhance color saturation to make theme colors pop
        enhancer_color = ImageEnhance.Color(img)
        img = enhancer_color.enhance(enhance_color)
        
        # Warm up the image slightly (shift toward gold/green)
        enhancer_brightness = ImageEnhance.Brightness(img)
        img = enhancer_brightness.enhance(0.95)
        
        # Save with good quality
        img.save(output_path, 'PNG', quality=95)
        print(f"  ✓ Saved to: {output_path}")
        return True
        
    except Exception as e:
        print(f"  ✗ Error: {e}")
        return False

# Main execution
base_dir = os.path.dirname(os.path.abspath(__file__))

images_to_process = [
    ('Personal Information.png', 'Personal Information.png'),
    ('Skills & Hobbies.png', 'Skills & Hobbies.png'),
]

print("=" * 60)
print("Church Website Image Theme Processor")
print("=" * 60)
print()

success_count = 0
for input_file, output_file in images_to_process:
    input_path = os.path.join(base_dir, input_file)
    output_path = os.path.join(base_dir, output_file)
    
    if os.path.exists(input_path):
        if process_image_for_theme(input_path, output_path):
            success_count += 1
    else:
        print(f"✗ File not found: {input_path}")
    print()

print("=" * 60)
print(f"Processing complete: {success_count}/{len(images_to_process)} images processed")
print("=" * 60)
