import fs from "fs";

let content = fs.readFileSync("scripts/download-assets.mjs", "utf-8");

// 1. Remove all query parameters related to scale/width/height from framerusercontent URLs
// The URLs look like: "https://framerusercontent.com/images/...png?width=476&height=128"
// or "?scale-down-to=1024" etc.
// We can just strip everything from the '?' onwards for framerusercontent URLs.
content = content.replace(/(\.png|\.jpg|\.jpeg)\?[^"]+"/g, "$1\"");

// 2. Update the keys for gratitude avatars
const replacements = {
  '"home/gratitude-avatar-01"': '"home/gratitude/01-alexander"',
  '"home/gratitude-avatar-02"': '"home/gratitude/02-faridoon-shahryar"',
  '"home/gratitude-avatar-03"': '"home/gratitude/03-nadeem-ahmad"',
  '"home/gratitude-avatar-04"': '"home/gratitude/04-snigdha-bose"',
  '"home/gratitude-avatar-05"': '"home/gratitude/05-raunak-narain"',
  '"home/gratitude-avatar-06"': '"home/gratitude/06-anupam-pathak"',
  '"home/gratitude-avatar-07"': '"home/gratitude/07-ajay-kumar"',
  '"home/gratitude-avatar-08"': '"home/gratitude/08-atri-gangopadhyay"',
  '"home/gratitude-avatar-09"': '"home/gratitude/09-achal-sinha"',
  '"home/gratitude-avatar-10"': '"home/gratitude/10-sumrai-tete"',
  '"home/gratitude-avatar-11"': '"home/gratitude/11-maria"',
  '"home/gratitude-avatar-12"': '"home/gratitude/12-betsabe"',
  '"home/gratitude-avatar-13"': '"home/gratitude/13-laura"',
  '"home/gratitude-avatar-14"': '"home/gratitude/14-pallavi-gulati"',
  '"home/gratitude-avatar-15"': '"home/gratitude/15-smriti-and-rahul"',
  '"home/gratitude-avatar-16"': '"home/gratitude/16-vikash-pandey"'
};

for (const [oldKey, newKey] of Object.entries(replacements)) {
  content = content.replace(oldKey, newKey);
}

fs.writeFileSync("scripts/download-assets.mjs", content);
console.log("Done");
