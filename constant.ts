export const GeneralFeedUrls: Array<{ url: string }> = [
  { url: "https://www.coindesk.com/arc/outboundfeeds/rss/" },
  { url: "https://coingape.com/feed/" },
  { url: "https://blockworks.co/feed" },
  { url: "https://decrypt.co/feed" },
  { url: "https://beincrypto.com/news/feed/" },
  { url: "https://bitcoinist.com/feed/" },
];

export const DefiFeedUrls: Array<{ url: string }> = [
  { url: "https://dezentralizedfinance.com/feed/" },
  { url: "https://thedefiant.io/api/feed" },
  { url: "https://dappradar.com/blog/feed" },
  { url: "https://blog.synthetix.io/rss/" },
  { url: "https://coingape.com/category/news/defi-news/feed/" },
];

export interface NewsArticle {
  title: string | undefined;
  link: string | undefined;
  published: string | undefined;
}
