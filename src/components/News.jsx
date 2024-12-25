import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  articles = [];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
    document.title = `News - ${
      this.props.category[0].toUpperCase() + this.props.category.slice(1)
    }`;
  }

  async updateNews() {
    const apiKey = process.env.REACT_APP_NEWS_API;
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    try {
      const url = `${proxyUrl}https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=${apiKey}`;
      this.setState({ loading: true });
      let data = await fetch(url, {
        Origin: "https://app.news.jsbhalla.in/",
        "x-requested-with": "XMLHttpRequest",
      });
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        totalArticles: parsedData.totalResults,
        loading: false,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    this.updateNews();
    this.setState({ page: this.state.page + 1 });
  };
  handlePrevClick = async () => {
    this.updateNews();
    this.setState({ page: this.state.page - 1 });
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-4">
          Top Headlines on{" "}
          {this.props.category[0].toUpperCase() + this.props.category.slice(1)}{" "}
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col mx-4 md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    newUrl={element.url}
                    imageUrl={element.urlToImage}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source}
                  />
                </div>
              );
            })}
        </div>
        {/* Left and Right Arrows Added */}
        <div className="container d-flex justify-content-between ">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalArticles / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
