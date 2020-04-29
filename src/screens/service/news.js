import { articles_url, api_key, country_code } from "../config/rest_config";

export async function getArticles(category = "general") {
  let articles = await fetch(
    `${articles_url}?country=${country_code}&category=${category}`,
    {
      headers: {
        "X-API-KEY": api_key,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {      
      return data.articles;
    });
  return articles;
}
