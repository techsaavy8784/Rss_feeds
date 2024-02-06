import RSSParser from "rss-parser";
import { GeneralFeedUrls, NewsArticle } from "./constant";

const parser = new RSSParser();

async function getNewsArticles(
  feedUrls: Array<{ url: string }>
): Promise<NewsArticle[]> {
  try {
    const allArticles = await Promise.all(
      feedUrls.map(async (item) => {
        const feed = await parser.parseURL(item.url);
        return feed.items.map((item) => ({
          title: item.title,
          link: item.link,
          published: item.pubDate,
        }));
      })
    );
    return allArticles.flat();
  } catch (error) {
    console.error("Error fetching news articles:", error);
    return [];
  }
}

async function fetchAndDisplayNewsArticles() {
  try {
    const articles = await getNewsArticles(GeneralFeedUrls);
    articles.forEach((article: NewsArticle) => {
      console.log(article);
      return article;
    });
  } catch (error) {
    console.error("Error fetching news articles:", error);
  }
}

fetchAndDisplayNewsArticles();
