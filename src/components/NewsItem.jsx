import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: '18rem' }}> 
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '85%', zIndex: '1' }} >
            {source.name}
          </span>
          <img src={
            !imageUrl ? "http://stuffnobodycaresabout.com/wp-content/uploads/2012/01/Article-Front-pg-NYT-Jan-21-1909.jpg" : imageUrl} style={{ height: '200px', width: '100%' }} className="card-img-top" alt="" />
          <div className="card-body">
            <div className="card-title">{title}</div>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted"> By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newUrl} className="btn btn-sm btn-dark">Open</a>
          </div>
        </div>
      </div>
    )
  }
}
