import RSSParser from "rss-parser";
import { DefiFeedUrls, NewsArticle } from "./constant";

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
    console.error("Error fetching defiNews articles:", error);
    return [];
  }
}

async function fetchAndDisplayDefiNewsArticles() {
  try {
    const defiNewsarticles = await getNewsArticles(DefiFeedUrls);
    defiNewsarticles.forEach((defiNewsarticle: NewsArticle) => {
      console.log(defiNewsarticle);
      return defiNewsarticle;
    });
  } catch (error) {
    console.error("Error fetching defiNews articles:", error);
  }
}

fetchAndDisplayDefiNewsArticles();
