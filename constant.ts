export const GeneralFeedUrls: Array<{ url: string }> = [
  // { url: "https://cointelegraph.com/feed" },
  { url: "https://www.coindesk.com/arc/outboundfeeds/rss/" },
  { url: "https://coingape.com/feed/" },
  { url: "https://blockworks.co/feed" },
  { url: "https://decrypt.co/feed" },
  { url: "https://beincrypto.com/news/feed/" },
  { url: "https://bitcoinist.com/feed/" },
];

export const DefiFeedUrls: Array<{ url: string }> = [
  { url: "https://dezentralizedfinance.com/defi-news-feed/feed/" },
  { url: "https://thedefiant.io/api/feed" },
  { url: "https://cryptoslate.com/defi/feed/" },
  { url: "https://cointelegraph.com/rss/tag/defi" },
  { url: "https://coingape.com/category/news/defi-news/feed/" },
];

export interface NewsArticle {
  title: string | undefined;
  link: string | undefined;
  published: string | undefined;
}
