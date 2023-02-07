import React from "react";
import "./Info.css";
const Info = ({ toggle, item, onClose }) => {
  if (!toggle) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="more">
        <div className="more-info">
          <button onClick={onClose} className="close-btn">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div className="box">
            <img className="info-img" src={thumbnail} alt="book" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publisher}{" "}
                <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <a href={item.volumeInfo.previewLink}>
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="desc">{item.volumeInfo.description}</h4>
        </div>
      </div>
      ;
    </>
  );
};
export default Info;
