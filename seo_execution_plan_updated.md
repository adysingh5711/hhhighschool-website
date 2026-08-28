# SEO + AI SEO + AEO Execution Plan

> A sequence-first, export-ready checklist for implementing strong SEO and AI-search / answer-engine visibility in 2026. This covers technical SEO, on-page SEO, content quality, entity authority, semantic search, AI-search readiness, answer-engine optimization (AEO), crawler friendliness, and monitoring. The order is intentional: foundations first, then information architecture, semantics, structured data, content depth, authority, AI-specific enhancements, and ongoing measurement.
>
> **Updated against Google's official AI Optimization Guide** (last updated 2026-05-15): https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

---

## Priority legend

- **P0**: Blocking issue. Fix immediately because it can prevent crawling, indexing, rendering, or correct canonicalization.
- **P1**: High impact. Strong ranking, snippet, citation, or trust gains once foundations are correct.
- **P2**: Important enhancer. Improves discoverability, extractability, CTR, or AI / answer-engine visibility.
- **P3**: Ongoing optimization. Measurement, refinement, semantic coverage, and authority compounding.

---

## Phase 0: Discovery, positioning, and benchmark

### 0.1 Inventory the current state

- [ ] **P0** Crawl the site and export all live URLs, indexability directives, canonicals, status codes, title tags, meta descriptions, headings, and structured data. Reason: you cannot manage SEO without a ground-truth inventory.
- [ ] **P0** Record the current primary domain, alternate hosts, HTTP/HTTPS behavior, `www` vs non-`www`, and any staging or preview domains. Reason: SEO starts by deciding what the canonical site actually is.
- [ ] **P1** Baseline current performance metrics: indexed pages, impressions, clicks, CTR, conversions, Core Web Vitals, top landing pages, and top queries. Reason: you need before-and-after evidence to measure impact.
- [ ] **P1** Catalogue all content types and templates, such as homepage, product pages, docs pages, blog posts, category pages, tools, FAQ, help center, and location pages. Reason: every template should later receive consistent metadata, schema, internal links, and AI/AEO rules.

### 0.2 Positioning, audience, and query map

- [ ] **P1** Define your narrow audience segments (for example, "HR software for healthcare companies" instead of generic "HR software"). Reason: AEO and AI systems work better when your niche is unambiguous.
- [ ] **P1** Document 1-2 concrete, provable differentiators for each core product or offering (for example, "fastest setup time", "deepest X integration"). Reason: AI systems and answer engines need specific claims worth repeating.
- [ ] **P1** Group target queries by intent: informational, commercial, transactional, navigational, support, comparison, and branded. Reason: SEO content works best when each page is built for one dominant intent.
- [ ] **P1** Map each audience segment to its top 5-10 high-intent pain points and corresponding queries. Reason: this connects positioning to the problems users actually search and ask AI about.
- [ ] **P1** Build a page-to-intent map so each important page has a primary topic and supporting subtopics. Reason: this prevents duplicate content and cannibalization.
- [ ] **P2** Identify which topics need freshness, which need authority, and which need structured answers for snippets or AI systems. Reason: not all pages need the same optimization style.
- [ ] **P1** Understand Google's query fan-out mechanism: when a user asks a broad question, Google's AI generates multiple concurrent sub-queries internally to retrieve more information. Reason: your content strategy should ensure cluster depth rather than creating separate pages for every query variation, which risks scaled content abuse policy violations.

### 0.3 Canonical question set and semantic gaps

- [ ] **P1** Mine question data from Google Search Console, People Also Ask, AnswerThePublic, internal search logs, support tickets, sales calls, and VOC research to build a canonical question set per topic cluster. Reason: AEO starts from the exact natural language questions users and buyers actually ask.
- [ ] **P2** Tag each question with buyer journey stage (early, mid, late) and preferred content format such as comparison table, how-to, checklist, or FAQ. Reason: AI and answer engines are heavily used in mid-funnel evaluation and prefer structured comparisons.
- [ ] **P2** Use topic modeling or clustering tools to identify gaps where users ask questions you do not yet cover. Reason: topic modeling reveals missing semantic coverage that limits both SEO and AI visibility.
- [ ] **P1** Do NOT create separate pages targeting every fan-out query variation or long-tail permutation primarily to manipulate AI rankings. Reason: Google explicitly classifies this as scaled content abuse spam. AI systems understand synonyms and general meaning and match content without exact keyword match.

---

## Phase 1: Canonical domain and index control

### 1.1 Decide the canonical site identity

- [ ] **P0** Choose one canonical domain and host, such as `https://example.com` or `https://www.example.com`, and redirect all variants with 301s. Reason: search engines need one preferred version of every page.
- [ ] **P0** Force HTTPS sitewide. Reason: secure delivery is baseline trust and avoids duplicate protocol variants.
- [ ] **P0** Ensure all internal links, canonicals, sitemap URLs, hreflang URLs, structured data URLs, and OG URLs point to the canonical host. Reason: mixed host signals cause canonical confusion.

### 1.2 Control what can and cannot be indexed

- [ ] **P0** Create a valid `robots.txt` at the root. Reason: this is the first crawler-facing control layer.
- [ ] **P0** Use `meta robots` or `X-Robots-Tag` for page-level noindex rules. Reason: `robots.txt` controls crawling, not actual index directives.
- [ ] **P0** Block staging, QA, branch previews, and duplicate deployment URLs from indexing. Reason: non-production duplicates pollute the index and split authority.
- [ ] **P0** Audit for accidental `noindex`, `nofollow`, disallowed routes, or blocked assets on important pages. Reason: these are common silent SEO failures.
- [ ] **P0** Verify that pages you want in AI Overviews are indexed AND snippet-eligible (not blocked by `nosnippet` or `max-snippet:0`). Reason: Google's AI Overviews use RAG grounding -- a page must be retrievable from the Search index and eligible to show a snippet to be considered as a generative AI source.

### 1.3 Build sitemap discipline

- [ ] **P0** Publish an XML sitemap that includes only canonical, indexable, final URLs. Reason: sitemaps should list the pages you actually want indexed.
- [ ] **P1** Use a sitemap index for large sites or multiple content families. Reason: scale requires clean segmentation and easier debugging.
- [ ] **P1** Keep `lastmod` honest and stable. Reason: fake freshness reduces crawl efficiency and trust in the sitemap signal.
- [ ] **P1** Submit the sitemap to Google Search Console and Bing Webmaster Tools. Reason: it speeds up discovery and provides feedback loops.
- [ ] ~~**P2** Maintain an AI-facing navigation file such as `/llms.txt`~~ **MYTH for Google Search** -- Google does not treat `llms.txt` or similar AI text files in any special way for AI Overviews or Google Search. Do not invest time creating these for Google visibility. Note: `llms.txt` may still have value for non-Google AI crawlers (Claude, Perplexity) that have announced support for the convention; treat it as a very-low-priority optional item for those ecosystems only, not a Google ranking signal.
- [ ] ~~**P2** For large documentation or API surfaces, consider a machine-readable "AI sitemap" (JSON or Markdown index)~~ Deprioritize as a Google-specific tactic. Invest that time in ensuring those pages are properly indexed and have clear semantic HTML instead.

---

## Phase 2: Rendering, crawlability, and technical correctness

### 2.1 Ensure important pages render for crawlers and AI bots

- [ ] **P0** Make critical content available in the initial HTML where possible. Reason: server-rendered content is more reliable for search crawlers and AI extractors than client-only hydration.
- [ ] **P0** Keep CSS, JS, images, and API resources needed for rendering accessible to crawlers. Reason: mobile-first rendering depends on access to assets.
- [ ] **P1** If using JavaScript frameworks, follow Google's JavaScript SEO best practices. Reason: Google can process JavaScript content if it is not blocked, but JS-dependent sites are more complex to debug for crawl and render issues.
- [ ] **P2** Add a minimal `<noscript>` fallback for critical landing pages when heavy JavaScript is unavoidable. Reason: it preserves a minimum information layer.

### 2.2 Correct status codes and redirects

- [ ] **P0** Fix 4xx and 5xx issues on important pages. Reason: broken pages cannot rank and waste crawl budget.
- [ ] **P0** Remove redirect chains and loops. Reason: they slow users and weaken crawl efficiency.
- [ ] **P1** Use 301 redirects for permanent URL migrations. Reason: this consolidates signals to the new location.
- [ ] **P1** Return 404 or 410 for genuinely removed pages, not soft-404 200 pages. Reason: clear status signals help indexing systems classify content correctly.

### 2.3 Mobile-first readiness and page experience

- [ ] **P0** Ensure mobile pages contain the same primary content, metadata, links, and structured data as desktop. Reason: Google indexes mobile-first.
- [ ] **P1** Fix viewport issues, tap target problems, unreadable text, and layout breakage on mobile. Reason: mobile usability affects both users and search evaluation.
- [ ] **P1** Ensure your site displays well across all devices, reduces latency, and makes it easy for users to distinguish main content from surrounding elements. Reason: Google's AI optimization guide explicitly lists good page experience as a technical requirement for generative AI search eligibility.

### 2.4 Reduce duplicate content

- [ ] **P1** Audit and consolidate duplicate or near-duplicate URLs using canonicals, redirects, or parameter handling. Reason: Google's AI optimization guide explicitly flags duplicate content as a crawl budget waste and a bad user experience -- AI systems encountering duplicates get weaker grounding signals.

### 2.5 AI crawler behavior and access

- [ ] **P2** Analyze server logs to see how AI crawlers such as GPTBot, ClaudeBot, PerplexityBot, and others access your site. Reason: logs show which URLs AI systems actually crawl so you can prioritize structure and schema there.
- [ ] **P2** Ensure `robots.txt`, WAF, and bot management rules do not unintentionally block reputable AI crawlers you want to allow, while still blocking abusive or low-quality bots. Reason: Google's guide confirms that publicly accessible, crawlable content is what generative AI models use; blocking crawlers removes you from AI training and grounding pools.

---

## Phase 3: Information architecture and internal linking

### 3.1 Build the site hierarchy

- [ ] **P1** Define topic clusters and pillar pages around your main subjects. Reason: clustered architecture improves topical authority and crawl clarity.
- [ ] **P1** Keep key pages within a shallow click depth. Reason: deeply buried pages are less discoverable and often less valued.
- [ ] **P1** Assign one primary intent per important page. Reason: one page should solve one main search problem well.

### 3.2 Internal linking system

- [ ] **P1** Add contextual internal links using descriptive anchor text. Reason: internal links distribute authority and clarify page relationships.
- [ ] **P1** Ensure every indexable page has at least one crawlable internal link. Reason: orphan pages are hard to discover and rank.
- [ ] **P2** Add breadcrumb navigation on hierarchical pages. Reason: breadcrumbs improve UX and support search understanding.
- [ ] **P2** Use a strong footer or hub page to connect core sections. Reason: repeated structural links reinforce important site areas.

---

## Phase 4: Metadata and on-page semantics

### 4.1 Page metadata

- [ ] **P0** Write a unique title tag for every important page, with the primary topic near the front. Reason: titles remain a core relevance and CTR signal.
- [ ] **P1** Write unique meta descriptions that summarize the page honestly and clearly. Reason: good descriptions improve click-through even when they do not directly rank.
- [ ] **P1** Add self-referencing canonical tags to all indexable pages. Reason: canonicals consolidate duplicate and near-duplicate URLs.
- [ ] **P1** For multilingual sites, implement hreflang correctly with reciprocal references and `x-default` where needed. Reason: hreflang prevents the wrong locale from ranking.

### 4.2 Semantic HTML and question-oriented structure

- [ ] **P0** Use one real H1 per page. Reason: the main page topic should be unambiguous.
- [ ] **P1** Use a logical H2 and H3 hierarchy, and ensure visually prominent section labels are also semantic headings. Reason: crawlers interpret tags, not styling.
- [ ] **P1** Use semantic HTML elements like `main`, `nav`, `article`, `section`, `table`, and `footer` appropriately where it improves human readability. Reason: Google's guide states perfect semantic HTML is not required, but it benefits screen readers, agentic browsers, and accessibility -- all of which increasingly matter for AI agent site interactions.
- [ ] **P2** Put the direct answer or page definition near the top of the content. Reason: snippets and AI systems favor answer-first structures.
- [ ] **P1** Phrase key H2 and H3 headings as explicit questions that mirror real user language (who, what, when, where, why, how, "best", "vs", "pricing"). Reason: answer engines and voice search prefer clear question-answer pairs aligned to conversational queries.

### 4.3 Social preview metadata

- [ ] **P1** Add Open Graph metadata with title, description, canonical URL, and image. Reason: social shares and some AI systems use this metadata as a content summary layer.
- [ ] **P1** Add Twitter card metadata, ideally `summary_large_image` for important pages. Reason: this improves preview quality on social platforms.
- [ ] **P2** Use page-specific OG images for high-value pages. Reason: generic previews reduce CTR and brand clarity.

---

## Phase 5: Structured data, entity layer, and provenance

> **Important calibration from Google's AI Optimization Guide**: Structured data is NOT required for generative AI search, and there is no special schema.org markup that guarantees AI Overview inclusion. Continue using structured data for rich result eligibility and overall SEO quality, but do not over-invest in schema as an AI-specific tactic.

### 5.1 Core entity schema and knowledge graph alignment

- [ ] **P1** Add `Organization` schema to the homepage or about page, including official name, URL, logo, and `sameAs` links. Reason: this anchors your brand entity and external identity graph.
- [ ] **P1** Add `Person` schema for authors, founders, or domain experts where relevant. Reason: explicit authorship supports expertise and trust signals.
- [ ] **P2** Add `BreadcrumbList` schema for hierarchical pages. Reason: it clarifies structure and can enhance search appearance.
- [ ] **P1** Extend `Organization` schema with properties such as `knowsAbout`, `foundingDate`, and key `memberOf` or `hasPart` relations that reflect how major knowledge graphs should understand you. Reason: explicit relationships improve entity resolution and reduce ambiguity in AI answers.
- [ ] **P2** Periodically verify that your brand, product, and people entities align with major public graphs such as Wikidata, Wikipedia (if applicable), Crunchbase, and industry directories, and update `sameAs` references accordingly. Reason: knowledge graph alignment helps AI systems connect your entity to trusted references.

### 5.2 Template-specific schema

- [ ] **P1** Add `Article` or `BlogPosting` schema to editorial pages. Reason: it helps search engines understand authorship, dates, and article identity.
- [ ] **P1** Add `FAQPage` schema to genuine FAQ sections. Reason: conversational Q&A is useful for both rich results and AI extraction.
- [ ] **P1** Add relevant schemas by template such as `Product`, `SoftwareApplication`, `HowTo`, `LocalBusiness`, `Event`, or `VideoObject`. Reason: schema should match the page type and its business goal.
- [ ] **P2** Attach FAQ schema to high intent blog posts to map common conversational questions to your direct answers. Reason: FAQ schema is a strong signal for AI search and generative engines extracting Q&A.

### 5.3 Provenance, citations, and fact presentation

- [ ] **P1** Validate structured data with Google Rich Results Test and Schema Markup Validator. Reason: invalid schema produces little or no benefit.
- [ ] **P1** Keep structured data consistent with visible page content. Reason: mismatches reduce trust and eligibility.
- [ ] **P2** Version-control your schema templates. Reason: schema tends to drift unless it is treated like product code.
- [ ] **P1** Implement a standard "Fact box" or "Key numbers" pattern on data-heavy pages with short, declarative, cite-friendly statements and associated sources. Reason: consistent fact presentation helps AI systems pick accurate, repeatable claims.
- [ ] **P2** Use explicit citation markup or clearly structured references (for example a dedicated "Sources" section) for important stats, with outbound links to primary research or official docs. Reason: citation provenance improves trust and encourages AI systems to select and attribute your content.

---

## Phase 6: Content quality, depth, E-E-A-T, and semantic search

### 6.1 Content design by search and question intent

- [ ] **P1** Ensure every important page is built around a primary user question or decision. Reason: intent alignment is more important than keyword stuffing.
- [ ] **P1** Cover adjacent questions, examples, comparisons, limitations, and next steps. Reason: completeness helps both ranking and user satisfaction.
- [ ] **P1** Remove thin, duplicate, or low-value pages that do not serve a distinct purpose. Reason: index quality matters as much as page count.
- [ ] **P1** Build a dedicated help center or docs section in a subdirectory that answers specific product and support questions in separate articles. Reason: clustered, question-based help content is a rich source of answers for AEO and AI search.
- [ ] **P2** Cross-link between related help articles and from core marketing pages into the help center. Reason: dense internal linking helps crawlers and AI systems understand topical relationships and product capabilities.

### 6.2 Originality, experience, and non-commodity content

- [ ] **P1** Create non-commodity content: provide unique expert or experienced perspectives that go beyond what common knowledge or a generative AI model could easily produce. Reason: Google's AI optimization guide makes this the single most impactful factor for AI Overview visibility -- commodity content ("7 Tips for X") is deprioritized in favor of original insights ("Why We Did X and What We Learned").
- [ ] **P1** Add first-hand evidence such as screenshots, case studies, examples, test results, or implementation lessons. Reason: experience differentiates useful content from generic summaries.
- [ ] **P1** Publish original frameworks, data, templates, or tools where possible. Reason: original value attracts links and citations.
- [ ] **P2** Show the real trade-offs and constraints of your recommendations. Reason: nuanced content is more trustworthy and more likely to be cited.
- [ ] **P1** Include verified, first-party data points and unique statistics in important articles, presented in standardized formats. Reason: AI systems favor sources that provide concrete numbers and unique evidence when choosing citations.

### 6.3 Trust, authorship, and expertise

- [ ] **P1** Create author or team pages with bios, credentials, and ownership. Reason: explicit authorship strengthens expertise and trust.
- [ ] **P1** Maintain About, Contact, Privacy, Terms, and where relevant Editorial Policy pages. Reason: transparent ownership and governance are trust signals.
- [ ] **P2** Add citations or source references on factual, medical, financial, legal, or technical claims where appropriate. Reason: trust is strengthened by evidence.
- [ ] **P2** Highlight external publications, speaking engagements, open-source contributions, and domain certifications on author and company pages. Reason: proof of real-world expertise helps AEO systems treat you as an authoritative source.

### 6.4 Freshness and maintenance

- [ ] **P1** Add review cadences for cornerstone content. Reason: outdated content quietly loses trust and rankings.
- [ ] **P2** Show meaningful updated dates on pages where recency matters. Reason: freshness signals help both users and AI systems.
- [ ] **P2** Maintain changelogs for products, docs, and evolving information. Reason: temporal questions require explicit update history.
- [ ] **P2** Add short "Key takeaways" or TL;DR sections to major guides and refresh them with each update cycle. Reason: generative engines often lift these summaries directly into answers and overviews.

### 6.5 Style for AI and answer engines

- [ ] **P1** Use answer-first writing: start important sections with a 40-60 word direct answer that can stand alone, then elaborate with context. Reason: this length is ideal for snippets, PAAs, and AI answer extraction.
- [ ] **P1** Keep paragraphs short and design each list item or FAQ answer so it makes sense when read without surrounding context. Reason: answer engines frequently lift fragments out of context.
- [ ] **P1** Remove avoidable hedging from how-to and conceptual explanations, favoring clear, assertive statements backed by evidence. Reason: LLMs and answer engines prefer concise factual phrasing when quoting.
- [ ] **P2** Write in a conversational but precise style that mirrors natural user queries. Reason: AI search and voice interfaces favor content that sounds like how people actually ask questions.
- [ ] **P1** Organize content with clear headings and logical sections for human readers. Reason: Google's guide confirms that content should be written for people first -- well-organized, human-readable content is what AI systems also extract best from.

### 6.6 Semantic search and NLP optimization

- [ ] **P2** Ensure important pages mention closely related entities and concepts (entity co-occurrence) that appear in authoritative coverage of the topic. Reason: co-occurrence helps search and AI systems place your content correctly in the topical graph.
- [ ] **P2** Align your terminology and entity relationships with dominant industry and knowledge graph conventions, adjusting wording where necessary. Reason: matching how entities are described in major graphs improves retrieval and disambiguation.
- [ ] **P2** Include common synonyms and phrasings for key concepts in natural language within headings, body copy, and FAQs -- but only where natural. Reason: Google's AI guide explicitly states you do not need to obsess over capturing every query variation -- AI systems handle synonyms and general meaning natively.
- [ ] **P2** Use topic modeling or clustering periodically to find semantically related subtopics that are under-served on your site and create new content to fill those gaps. Reason: systematically closing topical gaps improves both SEO and AEO coverage.

### 6.7 Images and video

- [ ] **P1** Add high-quality, relevant images and video to support textual content where appropriate. Reason: Google's AI optimization guide explicitly states that generative AI search features can surface relevant images and video, creating additional citation surfaces beyond web page links.
- [ ] **P1** Follow image SEO best practices: descriptive filenames, alt text, correct dimensions, modern formats. Reason: Google confirms that existing image SEO best practices directly apply to generative AI search visibility.
- [ ] **P1** Follow video SEO documentation for any video content. Reason: same reasoning as image SEO -- video can appear in AI-generated responses as a separate citation surface.

---

## Phase 7: Media, assets, and Core Web Vitals

### 7.1 Media optimization

- [ ] **P1** Compress images and use modern formats where practical. Reason: image payload often determines LCP.
- [ ] **P1** Add descriptive filenames and alt text. Reason: accessibility and machine understanding both benefit.
- [ ] **P1** Reserve image dimensions to prevent layout shifts. Reason: this directly reduces CLS.
- [ ] **P2** Provide transcripts for video and audio content. Reason: transcripts turn media into crawlable text and answer candidates.

### 7.2 Core Web Vitals targets

- [ ] **P0** Target **LCP under 2.5 seconds** at the 75th percentile. Reason: this is Google's threshold for good loading performance.
- [ ] **P0** Target **INP under 200 ms** at the 75th percentile. Reason: this is Google's threshold for good responsiveness.
- [ ] **P0** Target **CLS under 0.1** at the 75th percentile. Reason: this is Google's threshold for good visual stability.

### 7.3 Performance engineering

- [ ] **P1** Prioritize the LCP resource and reduce render-blocking work. Reason: the main hero element often decides whether the page passes LCP.
- [ ] **P1** Reduce JavaScript, hydration cost, and third-party script overhead. Reason: excess JS harms both INP and crawl/render efficiency.
- [ ] **P2** Lazy-load non-critical media and below-the-fold components. Reason: critical content should win the first network round.

---

## Phase 8: AI SEO, generative engine optimization, and AEO

> **Framing note from Google's AI Optimization Guide**: Google explicitly states that "AEO" and "GEO" are still SEO from their perspective. Generative AI features on Google Search (AI Overviews, AI Mode) are built on top of core Search ranking and quality systems using RAG (retrieval-augmented generation). There is no separate optimization track for Google's AI features -- foundational SEO quality is the path.

### 8.1 Make content easy for AI systems to extract

- [ ] **P1** Use answer-first writing for key sections with concise, stand-alone definitions or explanations. Reason: AI Overviews and LLMs prefer concise direct answers followed by detail.
- [ ] **P1** Structure content with short paragraphs, clean lists, tables, FAQs, and definitions. Reason: structured content is easier for models to quote accurately.
- [ ] **P1** Keep entity names, product names, author names, and official descriptions consistent across the site and external profiles. Reason: AI systems rely heavily on entity resolution.

### 8.2 Engine-specific strategy and bias mitigation

- [ ] **P2** For your most important topics, periodically test outputs in Google AI Overviews, Perplexity, ChatGPT browsing, Claude, and Gemini, noting which structures each engine tends to cite (lists, tables, step-by-step, etc.). Reason: generative engines exhibit different preferences for how they select and format sources.
- [ ] **P2** Adjust page layout and answer framing for key topics to match each engine's preferred extraction pattern when it does not conflict with overall UX. Reason: engine-specific tuning can increase citation rates on high-value queries.
- [ ] **P2** Create content in multiple languages only where you can maintain quality and freshness, and align language variants with hreflang. Reason: language-aware optimization improves local AI visibility without spreading resources too thin.
- [ ] **P3** If you are a challenger brand, prioritize original data, niche depth, and inclusion in authoritative third-party resources to counter "big brand bias." Reason: AI systems often favor well-known domains unless smaller players provide clearly superior, specific evidence.

### 8.3 Voice and conversational search

- [ ] **P2** Optimize content for conversational, sentence-like queries including who, what, when, where, why, how, and local modifiers. Reason: voice search and many AI queries use natural spoken language.
- [ ] **P2** Include concise, factual answers to common voice queries such as "What is X?" or "How does Y work?" near the top of relevant pages. Reason: voice assistants and AI overviews favor clear one-shot answers they can read aloud.

### 8.4 Featured snippets, PAAs, and answer boxes

- [ ] **P2** Create dedicated sections that mirror common People Also Ask questions with 40-60 word direct answers followed by supporting detail. Reason: these sections are prime candidates for featured snippets and AI answer extraction.
- [ ] **P2** Use numbered steps, bulleted lists, and simple tables for how-to and comparison content. Reason: stepwise and tabular formats are consistently favored in snippets and generative overviews.
- [ ] **P2** Add end-of-page FAQ blocks with 8-12 focused questions and single-point answers. Reason: dense FAQ clusters increase coverage of long-tail and follow-up questions asked to AI systems.

### 8.5 Myths to actively avoid (Google-specific)

The following are tactics commonly promoted online that Google's official AI optimization guide explicitly identifies as ineffective or unsupported for Google Search:

- [ ] **Do NOT** create `llms.txt` or similar "AI text files" specifically for Google Search. Google does not treat these files in any special way for AI Overviews.
- [ ] **Do NOT** "chunk" content into small pieces on the assumption that AI systems need it fragmented. Google's systems understand multi-topic pages natively.
- [ ] **Do NOT** rewrite content specifically for AI phrasing or obsess over exact keyword permutations for query fan-out. AI systems handle synonyms and general meaning without exact match.
- [ ] **Do NOT** pursue inauthentic "mentions" across the web to game AI citation counts. Google's spam policies apply equally to AI features, and inauthentic signals are detected and discounted.
- [ ] **Do NOT** treat structured data as a direct path to AI Overview inclusion. Schema is valuable for rich results eligibility, not a trigger for generative AI features.

### 8.6 Agentic experiences (emerging)

- [ ] **P3** Monitor emerging AI agent protocols such as Universal Commerce Protocol (UCP) at https://ucp.dev/latest/ which enable Search agents to perform tasks (booking, comparing products) on your site. Reason: browser agents increasingly access websites by analyzing visual renderings, DOM structure, and accessibility trees -- sites that follow good accessibility and semantic HTML practices are naturally more agent-friendly.
- [ ] **P3** Review Google's agent-friendly website best practices guide at https://web.dev/articles/ai-agent-site-ux to understand how browser agents interact with your pages. Reason: agentic experiences are an emerging surface where your site can transact directly with AI-driven users, not just be cited.
- [ ] **P2** Ensure your site's accessibility tree and DOM structure are clean enough for programmatic interaction. Reason: AI agents navigating your site use accessibility APIs and DOM inspection -- the same improvements that help screen readers help agents.

---

## Phase 9: Off-page SEO, UGC, and brand presence

### 9.1 Authority building and UGC

- [ ] **P1** Earn backlinks from relevant and credible sites through useful content, tools, research, partnerships, and PR. Reason: authority is still strongly influenced by who cites you.
- [ ] **P1** Build citations and mentions on authoritative directories, communities, profiles, and relevant publications. Reason: mentions reinforce entity legitimacy and web presence.
- [ ] **P2** Develop pages that others naturally reference, such as glossaries, benchmarks, calculators, or definitive guides. Reason: linkable assets compound over time.
- [ ] **P1** Claim and optimize profiles on relevant review platforms such as Google Business Profile, G2, Capterra, or Yelp depending on your model. Reason: reviews and ratings are strong signals for both users and AI models.
- [ ] **P2** Implement a systematic, ethical review collection flow triggered at natural success moments (onboarding completion, NPS promoters, successful outcomes). Reason: a steady stream of genuine reviews improves both rankings and AI trust.
- [ ] **P2** Encourage founders and domain experts to answer questions on Reddit, Stack Overflow, Quora, and niche communities under real identities. Reason: helpful UGC builds authority and creates additional surfaces where AI systems can encounter and cite your brand.
- [ ] **P1** Do NOT seek or pay for inauthentic "mentions" as an AI visibility tactic. Reason: Google's AI optimization guide explicitly flags this as ineffective -- AI features depend on the same spam filters as core Search, and artificial mention networks are targeted by those filters.

### 9.2 Local business and ecommerce product data

- [ ] **P1** If you have a local business or physical locations, claim and optimize your Google Business Profile. Reason: Google's AI optimization guide states that generative AI responses can include local business information sourced directly from Business Profiles -- this is a direct AI citation path for local businesses.
- [ ] **P1** If you sell products, connect your product catalog to Google Merchant Center (including Merchant Center feeds). Reason: Google's AI guide explicitly states that product listings and product information can appear within AI-generated responses, making Merchant Center a direct product visibility channel in AI Mode and AI Overviews.
- [ ] **P2** Explore Google's Business Agent feature for ecommerce and service businesses. Reason: Business Agent is a conversational experience on Google Search that lets customers chat with your brand, an emerging AI-native customer acquisition surface.

### 9.3 Brand consistency, identity block, and proof

- [ ] **P1** Standardize brand name, tagline, description, website URL, logo, and social links across website, GitHub, LinkedIn, X, YouTube, directories, and docs. Reason: consistency improves entity resolution and trust.
- [ ] **P2** Align bios and descriptions with the site's canonical positioning and differentiators. Reason: mixed messaging weakens brand understanding.
- [ ] **P1** Create a single canonical "About / Proof" page that consolidates key facts, milestones, flagship customers, awards, and trust assets. Reason: AI systems often ground their brand understanding on one authoritative proof page.
- [ ] **P2** Write a reusable "identity block" and a one-sentence "how to describe us" line and propagate them across your site and major profiles. Reason: repeating the same concise positioning helps answer engines echo your preferred description.

---

## Phase 10: Measurement, QA, and continuous operations

### 10.1 Search and analytics tooling setup

- [ ] **P0** Set up and verify Google Search Console. Reason: it is the primary feedback loop for indexing, coverage, and query performance.
- [ ] **P1** Set up and verify Bing Webmaster Tools. Reason: Bing still matters directly and indirectly via downstream ecosystems.
- [ ] **P1** Set up analytics with goal and conversion tracking. Reason: SEO should be measured against business outcomes, not just traffic.

### 10.2 Ongoing SEO QA

- [ ] **P1** Run recurring technical crawls to catch broken links, duplicate metadata, orphan pages, redirect issues, and schema regressions. Reason: SEO quality decays without inspection.
- [ ] **P1** Monitor index coverage, canonical conflicts, rich result reports, and crawl anomalies in Search Console. Reason: this is where silent SEO failures appear first.
- [ ] **P1** Audit thin, decaying, or overlapping content on a fixed cadence. Reason: index hygiene supports stronger overall site quality.

### 10.3 AI visibility, AEO, and GEO monitoring

- [ ] **P2** Track whether your brand or pages are cited in AI-search systems and answer engines using dedicated tools where available. Reason: AI search visibility is now a parallel discovery channel.
- [ ] **P2** Periodically test major brand and topic queries across Google, Perplexity, ChatGPT browsing, Claude, and Gemini, capturing which sources and formats are cited. Reason: visibility differs by system and content structure.
- [ ] **P2** Measure share of voice for key topics across AI engines versus competitors. Reason: answer engines are competitive environments where relative visibility matters more than classic rankings.
- [ ] **P2** Monitor citation sentiment and factual accuracy, logging examples where AI systems misrepresent or omit your brand. Reason: concrete instances guide content and provenance improvements.
- [ ] **P3** Track AI referral traffic separately from classic organic search where possible and analyze behavior and conversion differences. Reason: AI-driven visitors often arrive deeper in the funnel and behave differently.
- [ ] **P3** Maintain a reusable prompt library used to test AI outputs over time and record prompts that correlate with strong or weak brand visibility. Reason: consistent prompts turn AI visibility into a measurable, repeatable QA process.

---

## Recommended execution order

Use this order unless there is a business-specific reason to change it.

1. **Phase 0**: Discovery, positioning, and benchmark
2. **Phase 1**: Canonical domain and index control
3. **Phase 2**: Rendering, crawlability, and technical correctness
4. **Phase 3**: Information architecture and internal linking
5. **Phase 4**: Metadata and on-page semantics
6. **Phase 5**: Structured data, entity layer, and provenance
7. **Phase 6**: Content quality, depth, E-E-A-T, and semantic search
8. **Phase 7**: Media, assets, and Core Web Vitals
9. **Phase 8**: AI SEO, generative engine optimization, and AEO
10. **Phase 9**: Off-page SEO, UGC, and brand presence
11. **Phase 10**: Measurement, QA, and continuous operations

---

## Fast-start P0 shortlist

If you need the shortest possible list of what to do first, do these before everything else.

- [ ] Pick and enforce one canonical domain and HTTPS
- [ ] Fix robots, noindex rules, and preview environment indexing
- [ ] Ensure target pages are snippet-eligible (no `nosnippet` / `max-snippet:0` blocks) -- required for AI Overview RAG grounding
- [ ] Publish a clean XML sitemap and submit it
- [ ] Ensure important pages render server-side or in initial HTML
- [ ] Fix broken status codes, redirect chains, and blocked resources
- [ ] Ensure mobile-first parity and good page experience across devices
- [ ] Add unique titles, canonicals, and correct heading structure
- [ ] Set up Search Console and analytics
- [ ] Hit Core Web Vitals thresholds: LCP < 2.5 s, INP < 200 ms, CLS < 0.1
- [ ] Add at least the core structured data for Organization plus page-template schema (for rich results eligibility, not AI features specifically)
- [ ] Create non-commodity, original content with unique first-hand perspective -- this is Google's #1 stated factor for AI Overview visibility
- [ ] Claim Google Business Profile and connect Merchant Center if applicable (local/ecommerce)

---

## Appendix: Google AI Optimization Guide -- key myths debunked

Reference: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide (last updated 2026-05-15)

| Tactic | Status | Reason |
|--------|--------|--------|
| `llms.txt` for Google AI visibility | Myth | Google does not treat it specially for AI Overviews |
| Chunking content for AI | Myth | Google systems understand multi-topic pages natively |
| Rewriting for exact AI query phrasing | Myth | AI systems handle synonyms and general meaning |
| Inauthentic mentions campaign | Harmful | Same spam filters apply to AI features as to core Search |
| Special schema.org markup for AI | Myth | No schema triggers AI Overview inclusion |
| Creating pages per fan-out query variant | Risky | Violates scaled content abuse spam policy |
| AEO/GEO as a separate discipline from SEO | Reframed | Google classifies it as SEO -- same foundations apply |
