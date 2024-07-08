import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

const News = ({ category = "general", setProgress}) => {
  const apikey = process.env.NEWS_APIKEY ;
  const [articles, setArticles] = useState([]); 
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&page=${page}&pageSize=12`;    
    try {
      setProgress(20);
      let data = await fetch(url);
      let parsedData = await data.json();

      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);      
      setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);      
    }
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, page]);

  const prevClick = () => {
    if (page <= 1) return;
    setPage(page - 1);
  };

  const nextClick = () => {
    if (page + 1 > Math.ceil(totalResults / 12)) return;
    setPage(page + 1);
  };

  return (
    <div className="container my-3">
      
       
      
        <>
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title || ""}
                  description={element.description || ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
          <div className="d-grid gap-2 d-flex justify-content-between">
            <button
              disabled={page <= 1}
              className="btn btn-dark"
              type="button"
              onClick={prevClick}
            >
              &larr;
            </button>
            <button
              disabled={page + 1 > Math.ceil(totalResults / 12)}
              className="btn btn-dark"
              type="button"
              onClick={nextClick}
            >
              &rarr;
            </button>
          </div>
        </>
      
    </div>
  );
};

News.propTypes = {
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
};

export default News;
