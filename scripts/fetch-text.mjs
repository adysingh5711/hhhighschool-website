import { writeFile } from "node:fs/promises";

const pages = [
  ["home", "https://hhhighschool.org/"],
  ["our-story", "https://hhhighschool.org/our-story"],
  ["initiatives", "https://hhhighschool.org/initiatives"],
  ["accolades", "https://hhhighschool.org/accolades"],
  ["gallery", "https://hhhighschool.org/gallery"],
  ["support-us", "https://hhhighschool.org/support-us"],
  ["support-bricks-and-beyond", "https://hhhighschool.org/support/bricks-and-beyond"],
  ["support-school-makeover", "https://hhhighschool.org/support/school-makeover"],
  ["support-bless-a-child", "https://hhhighschool.org/support/bless-a-child"],
  ["support-gift-a-teacher", "https://hhhighschool.org/support/gift-a-teacher"],
];

function stripTags(html) {
  // Remove script/style/svg entirely
  let s = html.replace(/<script[\s\S]*?<\/script>/gi, "")
              .replace(/<style[\s\S]*?<\/style>/gi, "")
              .replace(/<svg[\s\S]*?<\/svg>/gi, "");
  // Insert newline markers at block-ish boundaries
  s = s.replace(/<\/(p|div|h[1-6]|li|section|header|footer|a)>/gi, "\n");
  // Strip remaining tags
  s = s.replace(/<[^>]+>/g, "");
  // Decode common entities
  s = s.replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/&#8217;/g, "’")
       .replace(/&#8216;/g, "‘").replace(/&#8220;/g, "“").replace(/&#8221;/g, "”")
       .replace(/&#8211;/g, "–").replace(/&#8212;/g, "—").replace(/&quot;/g, '"')
       .replace(/&#39;/g, "'");
  // Collapse whitespace within lines but keep line breaks
  s = s.split("\n").map(l => l.replace(/\s+/g, " ").trim()).filter(Boolean).join("\n");
  // Collapse duplicate consecutive lines
  const lines = s.split("\n");
  const out = [];
  for (const l of lines) if (out[out.length-1] !== l) out.push(l);
  return out.join("\n");
}

for (const [name, url] of pages) {
  const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });
  const html = await res.text();
  const text = stripTags(html);
  await writeFile(`content-raw/${name}.txt`, text, "utf8");
  console.log(`${name}: ${text.length} chars`);
}
