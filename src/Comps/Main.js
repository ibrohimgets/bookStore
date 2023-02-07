import { React, useState } from "react";
import "./Main.css";
import axios from "axios";
import Cards from "../Comps/Cards";
const Main = () => {
  const [search, setSearch] = useState("");
  const [book, setBook] = useState([]);

  const handleClick = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCf68iR7uz6dd5_LLBnNKVkLYWMaK3axJE+&maxResults=40`
      )
      .then((response) => setBook(response.data.items))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="Navbar">
        <span className="Author">Ibrohim Muminov</span>
        <ul>
          <li>
            <a href="https://www.instagram.com/iibrohimm/">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100082665042642">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/ibrohimgets">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="header">
        <div className="row-1">
          <nav>
            <h1>Search your book here!</h1>
            <br />

            <input
              placeholder="Enter a book name here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleClick}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </nav>
          <img
            className="search-img"
            src="https://www.freepnglogos.com/uploads/owl/owl-clipart-owl-school-clipart-download-clip-art-clip-34.png"
            alt="boooks"
          />
        </div>
        <div className="row-2">
          <h2>
            If you don’t like to read, you haven’t found the right book.
            <br />
            <span>J.K. Rowling.</span>
          </h2>
        </div>
      </div>
      <div className="container">
        <Cards books={book} />
      </div>
    </>
  );
};
export default Main;
