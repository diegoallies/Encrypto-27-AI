#!/bin/bash

# Define the replacements
declare -A replacements=(
  ["ᴍʀ ғʀᴀɴᴋ"]="ᴅᴜᴅᴀs"
  ["ＳＵＢＺＥＲＯ - ＭＤ - ＢＯＴ"]="ＥＮＣＲＹＰＴＯ - ＭＤ - ＢＯＴ"
  ["ＭＡＤＥ ＢＹ ＭＲ ＦＲＡＮＫ"]="ＭＡＤＥ ＢＹ ＤＵＤＡＳ"
  ["sᴜʙᴢᴇʀᴏ"]="eɴᴄʀʏᴘᴛᴏ"
  ["SUBZERO"]="ＥＮＣＲＹＰＴＯ"
)

# Get the name of this script (search.sh) to exclude it
script_name=$(basename "$0")

# Loop through each file and apply replacements, but skip specific files and directories
find . -type f -name "*.js" -o -name "*.json" -o -name "*.html" | while read -r file; do
  # Skip the specified files and directories
  if [[ "$file" == "./$script_name" || "$file" == "./index.js" || "$file" == "./README.md" || "$file" == *"/node_modules/" || "$file" == *"/.git/" ]]; then
    continue
  fi

  # Loop through all replacements
  for original in "${!replacements[@]}"; do
    replacement="${replacements[$original]}"
    # Replace text in each file
    sed -i "s/$original/$replacement/g" "$file"
  done
done

echo "Replacements complete!"
