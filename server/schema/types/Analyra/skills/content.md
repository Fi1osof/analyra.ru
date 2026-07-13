# Analyze Web Page

Full SEO and technical audit of a web page using headless browser.

## GraphQL Query

```graphql
mutation analyzeWebPage($input: AnalyzeWebPageInput!) {
  analyzeWebPage(input: $input)
}
```

## Input

```graphql
input AnalyzeWebPageInput {
  url: String!
  device: DeviceType
  waitForSelector: String
  timeout: Int
  userAgent: String
  acceptLanguage: String
  runAccessibilityCheck: Boolean
}
{
  device
  errors
  favicon
  finalUrl
  httpHeaders
  images
  links
  loadTime
  meta
  openGraph
  performance
  screenshots
  statusCode
  structuredData
  timestamp
  twitterCards
  url
}
```

## Arguments

| Argument                | Type       | Required | Description                               |
| ----------------------- | ---------- | -------- | ----------------------------------------- |
| `url`                   | String     | yes      | URL to analyze (with protocol)            |
| `device`                | DeviceType | no       | Device emulation: desktop, tablet, mobile |
| `waitForSelector`       | String     | no       | CSS selector to wait for before analysis  |
| `timeout`               | Int        | no       | Navigation timeout in ms (default 30000)  |
| `userAgent`             | String     | no       | Custom User-Agent header                  |
| `acceptLanguage`        | String     | no       | Accept-Language header (default en-US)    |
| `runAccessibilityCheck` | Boolean    | no       | Run axe-core accessibility audit          |

## Response

```json
{
  "url": "https://example.com",
  "finalUrl": "https://example.com/",
  "statusCode": 200,
  "device": "desktop",
  "timestamp": "2024-01-15T12:00:00.000Z",
  "loadTime": 2500,
  "favicon": "/favicon.ico",
  "httpHeaders": {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "max-age=3600",
    "x-frame-options": "SAMEORIGIN"
  },
  "performance": {
    "ttfb": 245,
    "fcp": 892,
    "lcp": 1456,
    "cls": 0.05,
    "domContentLoaded": 1200,
    "load": 2100,
    "resourceCount": 45,
    "totalResourceSize": 1234567
  },
  "meta": {
    "title": "Page Title",
    "description": "Meta description",
    "keywords": "seo, keywords",
    "canonical": "https://example.com/page",
    "robots": "index, follow",
    "viewport": "width=device-width, initial-scale=1",
    "charset": "utf-8",
    "language": "en"
  },
  "openGraph": {
    "title": "OG Title",
    "description": "OG Description",
    "image": "https://example.com/og.jpg"
  },
  "twitterCards": {
    "card": "summary_large_image",
    "title": "Twitter Title"
  },
  "headings": {
    "h1": ["Main Heading"],
    "h2": ["Section 1", "Section 2"],
    "h3": [],
    "h4": [],
    "h5": [],
    "h6": []
  },
  "links": {
    "internal": [
      { "href": "https://example.com/about", "text": "About", "rel": null }
    ],
    "external": [
      { "href": "https://google.com", "text": "Google", "rel": "nofollow" }
    ]
  },
  "images": [
    {
      "src": "https://example.com/img.jpg",
      "alt": "Image",
      "width": 800,
      "height": 600
    }
  ],
  "structuredData": [{ "@type": "Organization", "name": "Example" }],
  "accessibility": {
    "violations": [],
    "passes": [],
    "incomplete": []
  },
  "screenshots": {
    "viewport": "web-analyze/example.com/2024-01-15-desktop-viewport.png",
    "fullPage": "web-analyze/example.com/2024-01-15-desktop-fullpage.png"
  },
  "errors": []
}
```

## Response Fields

| Field            | Type   | Description                                 |
| ---------------- | ------ | ------------------------------------------- |
| `url`            | String | Original requested URL                      |
| `finalUrl`       | String | Final URL after redirects                   |
| `statusCode`     | Int    | HTTP status code                            |
| `device`         | String | Device type used for analysis               |
| `timestamp`      | String | ISO timestamp of analysis                   |
| `loadTime`       | Int    | Total analysis time in ms                   |
| `favicon`        | String | Favicon URL                                 |
| `httpHeaders`    | Object | Response HTTP headers                       |
| `performance`    | Object | Core Web Vitals and timing metrics          |
| `meta`           | Object | Meta tags (title, description, etc.)        |
| `openGraph`      | Object | Open Graph meta tags                        |
| `twitterCards`   | Object | Twitter Card meta tags                      |
| `headings`       | Object | Headings structure (h1-h6)                  |
| `links`          | Object | Internal and external links                 |
| `images`         | Array  | Images with src, alt, dimensions            |
| `structuredData` | Array  | JSON-LD structured data                     |
| `accessibility`  | Object | axe-core audit results (if enabled)         |
| `screenshots`    | Object | Paths to viewport and full-page screenshots |
| `errors`         | Array  | Errors encountered during analysis          |

## Performance Metrics

| Metric              | Description                        |
| ------------------- | ---------------------------------- |
| `ttfb`              | Time to First Byte (ms)            |
| `fcp`               | First Contentful Paint (ms)        |
| `lcp`               | Largest Contentful Paint (ms)      |
| `cls`               | Cumulative Layout Shift            |
| `domContentLoaded`  | DOM Content Loaded event time (ms) |
| `load`              | Page load event time (ms)          |
| `resourceCount`     | Number of resources loaded         |
| `totalResourceSize` | Total size of resources (bytes)    |

## Usage Examples

### Basic analysis

```graphql
mutation {
  analyzeWebPage(input: { url: "https://example.com" })
}
```

### Mobile device emulation

```graphql
mutation {
  analyzeWebPage(input: { url: "https://example.com", device: mobile })
}
```

### With accessibility check

```graphql
mutation {
  analyzeWebPage(
    input: { url: "https://example.com", runAccessibilityCheck: true }
  )
}
```

### Wait for dynamic content

```graphql
mutation {
  analyzeWebPage(
    input: {
      url: "https://spa-app.com"
      waitForSelector: ".main-content"
      timeout: 60000
    }
  )
}
```

### Custom User-Agent and language

```graphql
mutation {
  analyzeWebPage(
    input: {
      url: "https://example.com"
      userAgent: "Googlebot/2.1"
      acceptLanguage: "ru-RU"
    }
  )
}
```
