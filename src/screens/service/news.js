import { articles_url, _api_key, country_code } from '../config/rest_config';

export async function getArticles(category = 'general') {

    try {
        let articles = await fetch(`${articles_url}?country=${country_code}&category=${category}`, {
            headers: {
                'X-API-KEY': "e468e212a27e4ddea8b9885d7c438699"
            }
        }).then(res => res.json()).then(data => {
            // console.log(data);
            return data.articles;
        });
        return articles;
        // let result = await articles.json();
        // articles = null;

        // return result.articles;
    }
    catch (error) {
        throw error;
    }
}