# Northstar Advisory — preliminary website concept

This folder contains a six-page, responsive HTML/CSS/JavaScript demonstration for a proposed Canadian management consulting brand. **Northstar Advisory is a temporary project name, not a confirmed client company name.** Company facts, contact details, service claims, team information, article copy, and performance figures that have not been supplied are identified as pending or illustrative.

The static site is a design prototype. It is not a WordPress theme, does not connect to a CMS, and does not send contact-form submissions.

## Pages

- `index.html` — Home
- `about.html` — About, proposed mission and vision, values, and team placeholder
- `services.html` — Six adjustable, proposed service categories
- `approach.html` — Five-stage consulting process concept
- `insights.html` — Searchable, filterable demonstration articles and reusable article layouts
- `contact.html` — Contact-information and map placeholders, plus browser-side form validation

The optional FAQ and case-study page templates are intentionally not included in the six-page demonstration scope.

## Preview locally

Open `index.html` directly, or serve this folder from a local web server so relative links behave like a deployed site:

```powershell
cd northstar-advisory
python -m http.server 8000
```

Then visit `http://localhost:8000`. No package install or build step is required.

## Design and assets

- Palette: primary navy `#10243A`, secondary navy `#183B56`, gold `#C5A46D`, white `#FFFFFF`, light background `#F4F6F8`, blue-grey `#E8EEF3`, text `#263746`, muted text `#667788`.
- Typography: elegant system serif fallbacks for editorial headings and native system sans-serif fonts for interface and body text. No external font service is required.
- Logo concepts: horizontal light/dark and square-mark light/dark SVGs are in `assets/`.
- Photography: distinct WebP images are stored locally in `images/`; the photos were sourced from Unsplash and resized/served as WebP through its image CDN. They are demonstration photography, not representations of a particular client, office, or Canadian city.
- CSS is split between shared layout/components in `css/style.css` and responsive breakpoints in `css/responsive.css`. Shared browser interactions are in `js/script.js`.

The image, CSS, JavaScript, and page links use relative paths for GitHub Pages project-site compatibility. Before client presentation or launch, confirm the applicable image licensing and replace any image that does not suit the approved brand or audience.

## Contact form limitation

The contact form validates required fields, email format, and input length in the browser. Company name, phone, and service of interest are optional. The consent checkbox only confirms that the user understands this local demonstration does not transmit information; it is not a production privacy consent. Submission deliberately does not claim to send, save, or deliver an enquiry. A production form needs a configured server-side endpoint or an approved WordPress form integration, a verified recipient, delivery and failure handling, suitable privacy wording, and spam protection. No paid plugin or service is included or purchased.

## WordPress, Gutenberg, and Kadence implementation

The static front end does **not** automatically become a WordPress website. A later implementation should recreate and verify the approved design in the client's WordPress environment:

1. Confirm the WordPress installation, hosting constraints, content, brand assets, and the client's Kadence Theme/Kadence Blocks setup. Do not replace or overwrite an existing WordPress project.
2. Create the six WordPress pages and map the navigation, page titles, meta descriptions, and approved content to them.
3. Use Kadence Theme settings or approved site templates for the shared header, footer, typography, palette, and responsive breakpoints.
4. Recreate reusable sections with Gutenberg and Kadence Blocks—such as the hero, columns, service cards, process steps, article cards, contact callout, and form area. Use native WordPress posts and archive/single templates for the Insights section if blog publishing is enabled.
5. Upload approved images to the WordPress Media Library, add descriptive alt text, and use responsive image sizes. Set the approved SVG logo variants through the selected header/footer implementation.
6. Connect the contact form to a client-approved backend or form integration, configure delivery and spam protection, and test that enquiries are actually received. Add the client's approved privacy information.
7. Test links, keyboard access, mobile layouts, SEO metadata, image loading, and form delivery in the target WordPress environment before launch.

Kadence licensing, plugins, hosting, and any paid services require client approval; none are purchased or assumed here.

## Scope and approval notes

The proposed project budget is CAD $2,000–$2,500, subject to confirmed scope and agreement. This prototype does not constitute a quote, a completed WordPress implementation, or an agreement to provide specific business results. Confirm page copy, service categories, facts, team profiles, proof points, contact details, article content, image choices, and final scope with the client before launch.
