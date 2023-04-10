import os
import glob

# List of folder names
folders = [
    "anxy",
    "appeal",
    "bamboozle",
    "bear",
    "cake",
    "emoji",
    "gather",
    "illustration",
    "kittea",
    "kodomochi",
    "mag",
    "mm",
    "nandeyanen",
    "nonbiri",
    "play",
    "prinet",
    "profile",
    "shojo",
    "TLJ"
]

# Parent folder path
project_path = ".\src\\components\\res\\photos"

for folder in folders:
    folder_path = os.path.join(project_path, folder)

    if not os.path.exists(folder_path):
        print(f"Folder {folder} does not exist. Skipping...")
        continue

    image_files = [
        file for file in os.listdir(folder_path) if file.endswith((".jpg", ".jpeg", ".png", ".svg"))
    ]

    import_statements = []
    export_statements = []

    for image_file in image_files:
        file_name, _ = os.path.splitext(image_file)
        import_statements.append(f"import {file_name} from './{image_file}';")
        export_statements.append(file_name)

    index_file_content = "\n".join(import_statements) + "\n\nexport {\n  " + ",\n  ".join(export_statements) + ",\n};\n"

    index_file_path = os.path.join(folder_path, "index.js")
    with open(index_file_path, "w") as index_file:
        index_file.write(index_file_content)

    print(f"Generated index.js for folder {folder}")