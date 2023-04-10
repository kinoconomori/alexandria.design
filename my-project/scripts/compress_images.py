import os
from PIL import Image

# run this script from project root
src_folder = "./src//components//res//daigo"

def resize_and_compress_image(image_path, output_path, max_width):
    with Image.open(image_path) as img:
        width, height = img.size
        aspect_ratio = float(height) / float(width)

        if width > max_width:
            new_width = max_width
            new_height = int(new_width * aspect_ratio)
            img_resized = img.resize((new_width, new_height), Image.ANTIALIAS)
        else:
            img_resized = img

        img_alpha = Image.new("RGBA", img_resized.size, (255, 255, 255, 255))
        img_alpha.paste(img_resized, mask=img_resized.split()[3])

        img_rgb = img_alpha.convert("RGB")  # Convert the image to RGB mode
        img_rgb.save(output_path, format="JPEG", quality=85, optimize=True, progressive=True)

def process_images_in_folder(folder_path):
    compressed_folder = os.path.join(folder_path, "compressed")
    os.makedirs(compressed_folder, exist_ok=True)

    for filename in os.listdir(folder_path):
        if filename.lower().endswith((".jpg", ".jpeg", ".png")):
            image_path = os.path.join(folder_path, filename)
            output_path = os.path.join(compressed_folder, filename)
            resize_and_compress_image(image_path, output_path, max_width=1920)

def main():
    for folder in os.listdir(src_folder):
        folder_path = os.path.join(src_folder, folder)
        if os.path.isdir(folder_path):
            process_images_in_folder(folder_path)

if __name__ == "__main__":
    main()
