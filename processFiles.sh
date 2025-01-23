#!/bin/bash

# Define the replacements
declare -A replacements=(
  ["ᴍʀ ғʀᴀɴᴋ"]="ᴅᴜᴅᴀs"
  ["ＳＵＢＺＥＲＯ - ＭＤ - ＢＯＴ"]="ＥＮＣＲＹＰＴＯ - ＭＤ - ＢＯＴ"
  ["ＭＡＤＥ ＢＹ ＭＲ ＦＲＡＮＫ"]="ＭＡＤＥ ＢＹ ＤＵＤＡＳ"
  ["sᴜʙᴢᴇʀᴏ"]="eɴᴄʀʏᴘᴛᴏ"
  ["SUBZERO"]="ＥＮＣＲＹＰＴＯ"
)

# Loop through each file and apply replacements
find . -type f -name "*.js" -o -name "*.json" -o -name "*.html" | while read -r file; do
  # Loop through all replacements
  for original in "${!replacements[@]}"; do
    replacement="${replacements[$original]}"
    # Replace text in each file
    sed -i "s/$original/$replacement/g" "$file"
  done
done

echo "Replacements complete!"
