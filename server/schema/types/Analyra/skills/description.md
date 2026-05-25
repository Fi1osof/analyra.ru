# Analyze Web Page

Full SEO and technical audit of a web page using headless browser (Playwright).

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

enum DeviceType {
  desktop
  tablet
  mobile
}
```

## Arguments

| Argument              | Type       | Required | Description                                      |
|-----------------------|------------|----------|--------------------------------------------------|
| `url`                 | String     | yes      | URL to analyze (with protocol)                   |
| `device`              | DeviceType | no       | Device emulation: desktop (default), tablet, mobile |
| `waitForSelector`     | String     | no       | CSS selector to wait for before analysis         |
| `timeout`             | Int        | no       | Navigation timeout in ms (default 30000)         |
| `userAgent`           | String     | no       | Custom User-Agent header                         |
| `acceptLanguage`      | String     | no       | Accept-Language header (default en-US)           |
| `runAccessibilityCheck` | Boolean  | no       | Run axe-core accessibility audit                 |
