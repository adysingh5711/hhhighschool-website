import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = "public/images";

function extFromUrl(u) {
  const clean = u.split("?")[0];
  const ext = path.extname(clean).toLowerCase();
  return ext === ".jpeg" ? ".jpg" : (ext || ".jpg");
}

async function dl(url, destNoExt) {
  const ext = extFromUrl(url);
  const dest = `${destNoExt}${ext}`;
  const full = path.join(BASE, dest);
  await mkdir(path.dirname(full), { recursive: true });
  const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!res.ok) {
    console.error(`FAIL ${res.status} ${url}`);
    return null;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(full, buf);
  return "/images/" + dest;
}

// { destPathNoExt: sourceUrl }
const manifest = {
  "logo": "https://framerusercontent.com/images/KCoXDYnPhqzu9tIZUXavnxDys.png?width=476&height=128",

  "home/hero": "https://framerusercontent.com/images/AL63ssd0LTWOyiin0J9p1Xv47M.png?width=3456&height=1348",
  // NOTE: 255zLKIxXFljtZsZDMuwGfbuY is Dr. Shadab Hassan's portrait (verified
  // by inspection — it's reused on the our-story page as "Dr. Shahid Shadab
  // Hassan"), and VzhPcHClZKKB9aOSh9SFdPcalho is Mrs. Roshan Ara's portrait
  // (verified — her name appears on the certificate she's signing in frame).
  // The source site's DOM order suggested the opposite pairing; corrected here.
  "home/director-shadab": "https://framerusercontent.com/images/255zLKIxXFljtZsZDMuwGfbuY.png?width=1356&height=1328",
  "home/principal-roshan-ara": "https://framerusercontent.com/images/VzhPcHClZKKB9aOSh9SFdPcalho.png?width=2204&height=2352",
  "home/vision-mission-photo": "https://framerusercontent.com/images/2U64Xpq7NrbzTxIT58SKBfzAIOg.png?width=2104&height=3456",
  // This is a "Best Class Award" celebration photo, not a headshot — used as
  // supporting imagery in the Foundations section instead of as a portrait.
  "home/students-award-photo": "https://framerusercontent.com/images/guS2V1uZNUS9umn6n5AuxiVC7U.jpg?width=2560&height=1720",

  // These 8 images are the real headshots for the first 8 "Gratitude &
  // Impressions" testimonials (Alexander, Faridoon, Nadeem, Snigdha, Raunak,
  // Anupam, Ajay, Dr. Atri, in that order) — verified by inspecting each
  // image. They were initially mislabeled as "SDG logos" due to the source
  // site's non-visual DOM order; there are no real SDG icon images on the
  // site (that heading has no attributable graphic in the static HTML).
  // The remaining 7 gratitude testimonials + all 5 alumni testimonials have
  // no reliable photo (the DOM order mixed in unrelated group/decorative
  // photos with no alt text), so those render an initials avatar instead —
  // see src/components/home/initials-avatar.tsx.
  "home/gratitude-avatar-01": "https://framerusercontent.com/images/xweusGHmWF4EhVUnMzHaeCKVYI8.png?width=376&height=256",
  "home/gratitude-avatar-02": "https://framerusercontent.com/images/DVc2z3ZozseVhwVRC79caPQjY.png?width=376&height=256",
  "home/gratitude-avatar-03": "https://framerusercontent.com/images/vfXQrnVQqumbPN3fsE8w7EbiQUI.png?width=376&height=256",
  "home/gratitude-avatar-04": "https://framerusercontent.com/images/F48cADaG8zfqhFw8fenVmHkmY.png?width=376&height=256",
  "home/gratitude-avatar-05": "https://framerusercontent.com/images/rEYDhYlnbX7RdZurxMA22ElPUU.png?width=376&height=256",
  "home/gratitude-avatar-06": "https://framerusercontent.com/images/rmr2q1TcSp9FGtpZSfklE9cGFKw.png?width=376&height=256",
  "home/gratitude-avatar-07": "https://framerusercontent.com/images/WyHd85GydQulNOAtQaRDbgBySLA.png?width=376&height=256",
  "home/gratitude-avatar-08": "https://framerusercontent.com/images/zZEdhzrbdN99s2O99Ml7xVgl6Po.png?width=376&height=256",

  "home/scholarship-01": "https://framerusercontent.com/images/1ohYCst0dzLqJHx9RdOEtUUMkQI.png?width=3760&height=2560",
  "home/scholarship-02": "https://framerusercontent.com/images/ojsuxSQrE3s9Kp9rV1YOj6jJBxg.png?width=3760&height=2560",
  "home/scholarship-03": "https://framerusercontent.com/images/JqYuP3wf3iknWVlF2TeZO7x97w.png?width=3760&height=2560",
  "home/scholarship-04": "https://framerusercontent.com/images/kMJ2NyE0MPkD3dAwhXLPlXvH18.png?width=3760&height=2560",
  "home/scholarship-05": "https://framerusercontent.com/images/BAy3R6TBPvNPFao6BqnVncKZyUk.png?width=3760&height=2560",
  "home/scholarship-06": "https://framerusercontent.com/images/xUBuiIIwODTH2fFNnhQGipQtI.png?width=3760&height=2560",
  "home/scholarship-07": "https://framerusercontent.com/images/qbOGxMRljMhDUjqMSYh6tnOxU.png?width=3760&height=2560",
  "home/scholarship-08": "https://framerusercontent.com/images/MardBgZaxgeeIiaJWlX7KXdMKyk.png?width=3760&height=2560",

  "our-story/01-hamid-hassan": "https://framerusercontent.com/images/ZI1WL0EPinA2tJSzJQDiHTtU.png",
  "our-story/02-habiba-hassan": "https://framerusercontent.com/images/wonIKHiLbHLjlmHGoAlkbiuc4Q.jpg",
  "our-story/03-roshan-ara": "https://framerusercontent.com/images/KlgbIXV1N53fPg3untIKUHgk.jpg",
  "our-story/04-shadab-hassan": "https://framerusercontent.com/images/255zLKIxXFljtZsZDMuwGfbuY.png?scale-down-to=512",
  "our-story/05-sheeba-nikhar": "https://framerusercontent.com/images/l2G0kqgzMj58WgQrl69ryKIw8E.jpg",
  "our-story/06-asad-iqbal": "https://framerusercontent.com/images/x4IYS75hFo6Xb3hXjHTLxmLG9I.jpg",
  "our-story/07-shahid-hassan": "https://framerusercontent.com/images/ppHbaIdgGYJ40ScwJyqEziUP0.jpg",
  "our-story/08-neha-kaur": "https://framerusercontent.com/images/926HYpAeALtJHQ65j6n9S27gHM.jpg",

  "initiatives/01-reach2teach": "https://framerusercontent.com/images/BaRSB5helhUZFTfU1e56vBFYCIU.png?scale-down-to=1024&width=1696&height=1696",
  "initiatives/02-live-classroom": "https://framerusercontent.com/images/xKuDUCF0IEK6aAMoMddtmqcAPg.jpg?width=675&height=675",
  "initiatives/03-volunteer2teach": "https://framerusercontent.com/images/CLpEFYLouq7fPeDEwIaBvSMuQ.jpg?width=700&height=700",
  "initiatives/04-volunteer2teach-global": "https://framerusercontent.com/images/etFwdUv2R5wC4AWIFq8wuUswlQ.jpg?width=4096&height=4096",
  "initiatives/05-echoes-of-experience": "https://framerusercontent.com/images/M43cdypColtWJ8nMmj49eqxASLw.jpg?width=640&height=640",
  "initiatives/06-happy-periods": "https://framerusercontent.com/images/MF1CQiuyxBarPrXoQqH8nAdV8g.jpg?width=900&height=900",
  "initiatives/07-maatri": "https://framerusercontent.com/images/4gYwWPNy6HxfVFTXeGiXcu5uX1s.jpg?width=540&height=540",
  "initiatives/08-pehel": "https://framerusercontent.com/images/GyqdzrbCPkNECQrT9XYbGxGSK8.jpg?width=720&height=720",
  "initiatives/09-health-checkup": "https://framerusercontent.com/images/p2ggkr1A9MbNCNKV7QkY9IrE.jpg?width=864&height=864",
  "initiatives/10-share-your-laptop": "https://framerusercontent.com/images/yQBD6DBnWyQubAjuQi297RYOnN8.jpg?width=1200&height=1200",
  "initiatives/11-wow": "https://framerusercontent.com/images/bigN6Kl579Jrb98HBtjEhm1AYxs.jpg?width=425&height=425",
  "initiatives/12-bless-a-child": "https://framerusercontent.com/images/yDX5EwbxGWDA2JJXUB32h0afmQ.jpg?width=4096&height=4096",
  "initiatives/13-gift-a-teacher": "https://framerusercontent.com/images/jbO1QskUZ8XPOwOXMQzXvPFXlg.jpg?width=1200&height=1200",
  "initiatives/14-covid-relief": "https://framerusercontent.com/images/8WZykhZQuciD15zUJVtZrIL2gtY.jpg?width=1148&height=1148",

  "accolades/01-yuva-prabhodhan": "https://framerusercontent.com/images/kTYkPWElD1nswEXghvQbt2FUKEg.png?scale-down-to=1024",
  "accolades/02-rashtriya-swayam-siddh": "https://framerusercontent.com/images/cTAEXBYI6ra6uB5FTYgWBt48iRY.jpg",
  "accolades/03-national-digital-trailblazer": "https://framerusercontent.com/images/mhmXd0umjOONdtb0B1IrewfUkU.jpg",
  "accolades/04-digital-trailblazer-state": "https://framerusercontent.com/images/o0Ur58FmuxVCz8h08XvMKn6eM.jpg",
  "accolades/05-malaysian-mastery": "https://framerusercontent.com/images/TQfIgsKD6cwYXhQPuwUi62jFM.jpg",
  "accolades/06-rex-karmaveer-chakra": "https://framerusercontent.com/images/WeWDKNO2GQIaZwrYfs46M0sij20.jpg",
  "accolades/07-tedx-master-canteen": "https://framerusercontent.com/images/EHrgcyNOBjBFJoR5FeJJbhyYIAQ.jpg",
  "accolades/08-tedx-youth-hirapur": "https://framerusercontent.com/images/7BnmrCX7ilvbQatxi1xzw0p8io.jpg",
  "accolades/09-incredible-champions": "https://framerusercontent.com/images/mhEHW5G2AeGzg9ixwggqZjl3o.jpg",
  "accolades/10-underage-ceos": "https://framerusercontent.com/images/n4OESFIz9B2pMAnTWqjEVbHAAc.jpg",
  "accolades/11-chennai-day": "https://framerusercontent.com/images/wD294hbwZF8a1VErjqZl3Z68.jpg",
  "accolades/12-unesco-mgiep-workshop": "https://framerusercontent.com/images/7DTHjDSmeKhhThhDQGmgb8UvNE.jpg",
  "accolades/13-unesco-mgiep-policy-forum": "https://framerusercontent.com/images/dQH4lqUOB3YXHqwZnk3HLpbkv0.jpg",
  "accolades/14-jagriti-yatra": "https://framerusercontent.com/images/91vbKeMy9fbbJ6QwJUdtEzifMk.jpg",
  "accolades/15-met-talk": "https://framerusercontent.com/images/UNJfSjZdbzZfTAgQ8iSyrHZ6F8k.jpg",
  "accolades/16-rotary-ranchi-south": "https://framerusercontent.com/images/7KmhrDKuvanp7qRVeMHbSTc3nmg.jpg",

  "support/hero-banner": "https://framerusercontent.com/images/1Hi1GhZQDoCUOp5w2HaxtonGPpM.png?scale-down-to=2048&width=2160&height=752",
  "support/us-photo-01": "https://framerusercontent.com/images/tU8yjvVsIoGT5kJoSQSQHvpcw.jpg?width=4096&height=3072",
  "support/us-photo-02": "https://framerusercontent.com/images/abOQKzHNo5baGtl5sXVixJmrIGY.jpg?width=4000&height=2265",
  "support/card-bricks-and-beyond": "https://framerusercontent.com/images/n1OrVwxBJSwxNK4Byaygl60zto.jpg?width=960&height=723",
  "support/card-school-makeover": "https://framerusercontent.com/images/3qmVhktpFaVc9lyksvHyvWprH6s.jpg?width=960&height=636",

  "support/bricks-photo-01": "https://framerusercontent.com/images/la2GHw5desjPpz4Fgi8oqf5Pl4c.jpg?width=4096&height=3072",
  "support/bricks-photo-02": "https://framerusercontent.com/images/3ea8OvMJGjyHlrHqREOuzPP1h4E.jpg?width=3072&height=4096",
  "support/bricks-photo-03": "https://framerusercontent.com/images/uQrZEK2wpMBCsnZDKRR5UkZeMXc.jpg?width=4096&height=3072",
  "support/bricks-photo-04": "https://framerusercontent.com/images/zbNqHTMJoZpuEWsB02amSasNx0.jpg?width=4000&height=3000",

  "support/makeover-photo-01": "https://framerusercontent.com/images/baz4gOfDdnhUJcxjwZBQAZ750.jpg?width=4096&height=3072",
  "support/makeover-photo-02": "https://framerusercontent.com/images/cWqdFYMAjbOkSoXVXEbWqMVMRq8.jpg?width=4000&height=3000",
  "support/makeover-photo-03": "https://framerusercontent.com/images/BcwK3MG4PxnHzbYz640D6VfNr6I.jpg?width=4096&height=3072",
  "support/makeover-photo-04": "https://framerusercontent.com/images/hVW2u1XrQbkU9NB34kGDARmBzHc.jpg?width=4000&height=3000",

  "support/bless-a-child-photo": "https://framerusercontent.com/images/LoPI1PzKiXXqXSmi3Ipd7hIKXhE.jpg?width=960&height=804",
  "support/gift-a-teacher-hero": "https://framerusercontent.com/images/d6vuxDm9pl6QDAJA15KlnLsAaIk.png?width=6144&height=1683",
  "support/gift-a-teacher-photo": "https://framerusercontent.com/images/EaHSrFVLCFYXhyXA15Hm7tcEh8.jpg?width=960&height=539",

  "gallery/in-the-media/mosaic": "https://framerusercontent.com/images/m0cGCrMHzwLH1JoUWYDQSa66X0E.png",

  "gallery/health-wellbeing/01": "https://framerusercontent.com/images/JLrS70GUHFGCFDeGe5R8H2Nq27Q.jpg",
  "gallery/health-wellbeing/02": "https://framerusercontent.com/images/J7VektnouCe6gKIz3u2ET3nIbjQ.jpg",
  "gallery/health-wellbeing/03": "https://framerusercontent.com/images/iDLdN0voblNZQTMI6n5eePqeg.jpg",
  "gallery/health-wellbeing/04": "https://framerusercontent.com/images/Dsj6znf1g9ocp3edU78Yb5w0A.jpg",
  "gallery/health-wellbeing/05": "https://framerusercontent.com/images/XaUYm3WMTovDAZzdQ61QBtRyIVM.jpg",
  "gallery/health-wellbeing/06": "https://framerusercontent.com/images/I0gBQAJgylAqNBXWRFWmHSBHt0.jpg",
  "gallery/health-wellbeing/07": "https://framerusercontent.com/images/BUNDUbArADNuKFKqDH7pEm2Qg8I.jpg",
  "gallery/health-wellbeing/08": "https://framerusercontent.com/images/34rZQx8uTuNgFuGPttkYl2RDOas.jpg",
  "gallery/health-wellbeing/09": "https://framerusercontent.com/images/dB9brrliYrCX89V1zXoB1UQBA8k.jpg",
  "gallery/health-wellbeing/10": "https://framerusercontent.com/images/v1E0gYucHYosgHlLr1S1lJQ1E.jpg",
  "gallery/health-wellbeing/11": "https://framerusercontent.com/images/EFwXjoggFQSIKtmGKLnTsowNt8.jpg",
  "gallery/health-wellbeing/12": "https://framerusercontent.com/images/sMePhN905xz0Vg7k435I0PnJSGA.jpg",

  "gallery/visit-guest/01": "https://framerusercontent.com/images/zd5am2aUKORWJd0YHQ60tFzkdyM.jpg?scale-down-to=1024",
  "gallery/visit-guest/02": "https://framerusercontent.com/images/6HIQOPzOks8Gfi1QH72IUQN7I.jpg",

  "gallery/events-celebrations/01": "https://framerusercontent.com/images/XS39qXrlzNTLQ4bBTb9yUpFNlio.jpg",
  "gallery/events-celebrations/02": "https://framerusercontent.com/images/FTZDVE6Gd8A51S4keXauVnITk.jpg",
  "gallery/events-celebrations/03": "https://framerusercontent.com/images/kqgORvGYFBBnxj32WjHXCoOUcZw.jpg",
  "gallery/events-celebrations/04": "https://framerusercontent.com/images/vviS0mS99LPGD9JjBucDrfRbIig.jpg",
  "gallery/events-celebrations/05": "https://framerusercontent.com/images/V2g49xRgj5z0Or1Df1fYk6cTaAI.jpg",
  "gallery/events-celebrations/06": "https://framerusercontent.com/images/TDXS4dJuUj3I8mPobblfhLDsI.jpg",
  "gallery/events-celebrations/07": "https://framerusercontent.com/images/Hmg5lSsUQpE3KriSKEnrm7JmrRA.jpg",
  "gallery/events-celebrations/08": "https://framerusercontent.com/images/VB8O0MWLFFfKHMSojJrC72M68.jpg",
  "gallery/events-celebrations/09": "https://framerusercontent.com/images/aLJtn52EpzdUQv7nJJeV54nZwQ.jpg",
  "gallery/events-celebrations/10": "https://framerusercontent.com/images/pNzTf4QzAL9qI3nuokaNFn6lq0.jpg",

  "gallery/student-creativity/01": "https://framerusercontent.com/images/2mgCpx3x7qEaWFk8VseigFrrU.jpg",
  "gallery/student-creativity/02": "https://framerusercontent.com/images/E17nu2Ulyw14TzGE9W946DEscc.jpg",
  "gallery/student-creativity/03": "https://framerusercontent.com/images/OnttlxtDVZQWSm9eiEk234tgdI.jpg",
  "gallery/student-creativity/04": "https://framerusercontent.com/images/KCYMzsUd8edHrFpt57fsWXm22g.jpg",
  "gallery/student-creativity/05": "https://framerusercontent.com/images/ZlfGLOGmtF98NtgF88REzXAKHlQ.jpg",
  "gallery/student-creativity/06": "https://framerusercontent.com/images/mGQ5tGZiwWC3T1wakLa1tihRrQ.jpg",

  "gallery/community-engagement/01": "https://framerusercontent.com/images/vFDAtBmYBS5BTuknwdKUTJVco.jpg",
  "gallery/community-engagement/02": "https://framerusercontent.com/images/lNKxIg8mCjWW6VZGKgioK43OmcM.jpg",
  "gallery/community-engagement/03": "https://framerusercontent.com/images/t0DtSB8tObqEYju64LjJrsb1j8o.jpg",
  "gallery/community-engagement/04": "https://framerusercontent.com/images/68gUzkx8mgIIoWjpJxuIc5xEg.jpg",
  "gallery/community-engagement/05": "https://framerusercontent.com/images/L5pHE3SFldqCZXlIgy4ZCmaktns.jpg",
  "gallery/community-engagement/06": "https://framerusercontent.com/images/QOBmCqTDPIIDxnZqo1ltYLvxaVo.jpg",

  "gallery/powered-by-people/01": "https://framerusercontent.com/images/agXiTg78hAyVpPQU4WF27jsnU.jpg",
  "gallery/powered-by-people/02": "https://framerusercontent.com/images/r13EU358P0YdqxkOmtwUhOmans.jpg?scale-down-to=1024",
  "gallery/powered-by-people/03": "https://framerusercontent.com/images/TP40ZYT2wa7kPSy0mJE7LdCGp7k.jpg",
  "gallery/powered-by-people/04": "https://framerusercontent.com/images/IlL4dimnjPsOPazCzTVO06ioqA4.jpg",
  "gallery/powered-by-people/05": "https://framerusercontent.com/images/y2xWjS8iT2BVTnRc32tLeX8iV4.jpg",
  "gallery/powered-by-people/06": "https://framerusercontent.com/images/RhU1tEVds07g90MvRuuJQeGLyU.jpg",
};

let ok = 0, fail = 0;
const entries = Object.entries(manifest);
const CONCURRENCY = 6;
async function worker(queue) {
  while (queue.length) {
    const [dest, url] = queue.pop();
    const r = await dl(url, dest);
    if (r) { ok++; } else { fail++; }
  }
}
const queue = [...entries];
await Promise.all(Array.from({length: CONCURRENCY}, () => worker(queue)));
console.log(`Downloaded: ${ok}, Failed: ${fail}, Total: ${entries.length}`);
