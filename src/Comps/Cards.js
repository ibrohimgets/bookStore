import React from "react";
import { useState } from "react";
import "./Cards.css";
import Info from "./Info";

const Cards = ({ books }) => {
  const [toggle, setToggle] = useState(false);
  const [bookItem, setItem] = useState();

  return (
    <>
      {books.map((newBook) => {
        let thumbnail =
          newBook.volumeInfo.imageLinks &&
          newBook.volumeInfo.imageLinks.smallThumbnail;
        let amount =
          newBook.saleInfo.listPrice && newBook.saleInfo.listPrice.amount;
        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <>
              <div
                className="card"
                onClick={() => {
                  setToggle(true);
                  setItem(newBook);
                }}
              >
                <img src={thumbnail} alt="books" />
                <div className="bottom">
                  <h3 className="title">{newBook.volumeInfo.title}</h3>
                  <p className="amount">{amount}</p>
                </div>
              </div>

              <Info
                toggle={toggle}
                item={bookItem}
                onClose={() => setToggle(false)}
              />
            </>
          );
        }
      })}
    </>
  );
};
export default Cards;
