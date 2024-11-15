import os
def list_directory_structure(directory, exclude=None, level=0, output_file=None):
    if exclude is None:
        exclude = []

    try:
        entries = os.listdir(directory)
    except PermissionError:
        output_file.write(" " * level * 4 + f"[Permission Denied] {directory}\n")
        return
    
    for entry in entries:
        entry_path = os.path.join(directory, entry)
        output_file.write(" " * level * 4 + "|-- " + entry + "\n")

        if os.path.isdir(entry_path) and entry not in exclude:
            list_directory_structure(entry_path, exclude=exclude, level=level+1, output_file=output_file)


root_directory = r"D:\Travail_ubuntu\Entreprise\Mes_travaux\portfolio"
exclude_folders = ["node_modules", "utilisation_python", ".git"]
output_path = "structure_projet2.txt"
with open(output_path, "w", encoding="utf-8") as file:
    list_directory_structure(root_directory, exclude=exclude_folders, level=0, output_file=file)

    








