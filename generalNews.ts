import RSSParser from "rss-parser";
import { GeneralFeedUrls, NewsArticle } from "./constant";

const parser = new RSSParser();

async function getGeneralNewsArticles(
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
    console.error("Error fetching generalNews articles:", error);
    return [];
  }
}

async function fetchAndDisplayGeneralNewsArticles() {
  try {
    const articles = await getGeneralNewsArticles(GeneralFeedUrls);
    articles.forEach((article: NewsArticle) => {
      console.log(article);
      return article;
    });
  } catch (error) {
    console.error("Error fetching generalNews articles:", error);
  }
}

fetchAndDisplayGeneralNewsArticles();
