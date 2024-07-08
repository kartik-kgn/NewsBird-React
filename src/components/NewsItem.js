import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <>
      <div className="my-4">
        <div className="card" style={{ margin: "35px 0px", marginTop: "60px" }}>
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            {" "}
            {source}
          </span>
          <img src={imageUrl} className="card-img-top" alt=" " />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                {" "}
                Written by {!author ? "Unknown" : author} |{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More..
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
