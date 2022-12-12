import SingleMovie from "./singleMovie";
import { useState } from "react";

const Movies = (props) => {
  const { arr, myDelete, changeHeart, itemsPage } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const startIn = (currentPage - 1) * itemsPage;
  const endIn = startIn + itemsPage;
  const theMovies = arr.slice(startIn, endIn);
  return (
    <div>
      <table className="table" style={{ width: 180 + "vh" }}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Id</td>
            <td>Genre</td>
            <td>Length</td>
            <td>Rating</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {theMovies.map((value) => {
            return (
              <SingleMovie
                rate={value.rate}
                id={value.id}
                name={value.name}
                ganre={value.ganre}
                time={value.time}
                key={value.id}
                heart={value.heart}
                changeHeart={() => changeHeart(value.id)}
                myDelete={() => myDelete(value.id)}
              />
            );
          })}
        </tbody>
      </table>
      <div className="btn-group " role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
        >
          -
        </button>
        <button type="button" className="btn btn-outline-primary" disabled>
          {currentPage}
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            if (arr.length / itemsPage > currentPage)
              setCurrentPage(currentPage + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Movies;
