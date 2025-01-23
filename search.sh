#!/bin/bash

# Define the replacements
declare -A replacements=(
  ["ᴍʀ ғʀᴀɴᴋ"]="ᴅᴜᴅᴀs"
  ["ＳＵＢＺＥＲＯ - ＭＤ - ＢＯＴ"]="ＥＮＣＲＹＰＴＯ - ＭＤ - ＢＯＴ"
  ["ＭＡＤＥ ＢＹ ＭＲ ＦＲＡＮＫ"]="ＭＡＤＥ ＢＹ ＤＵＤＡＳ"
  ["sᴜʙᴢᴇʀᴏ"]="eɴᴄʀʏᴘᴛᴏ"
  ["SUBZERO"]="ＥＮＣＲＹＰＴＯ"
)

# Loop through each file and search for occurrences
find . -type f -name "*.js" -o -name "*.json" -o -name "*.html" | while read -r file; do
  # Loop through all replacements
  for original in "${!replacements[@]}"; do
    # Highlight the occurrences in the terminal
    echo "Searching in $file for: $original"
    grep --color=always -n "$original" "$file"
  done
done

echo "Search complete!"
