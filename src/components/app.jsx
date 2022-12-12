import { Formik } from "formik";
import React, { Component } from "react";
import Main from "./main";
import NavBar from "./navBar";
class App extends Component {
  constructor() {
    super();

    this.state.arr = [...this.state.origin];
  }
  state = {
    arr: [],
    origin: [
      {
        name: "Shrek",
        id: 1,
        ganre: "scifi",
        time: "2:20",
        rate: 10,
        heart: "🤍",
      },
      {
        name: "adam project",
        id: 2,
        ganre: "scifi",
        time: "1:50",
        rate: 10,
        heart: "🤍",
      },
      {
        name: "titanic",
        id: 3,
        ganre: "scifi",
        time: "2:30",
        rate: 10,
        heart: "🤍",
      },
      {
        name: "fast 5",
        id: 4,
        ganre: "scifi",
        time: "2:20",
        rate: 10,
        heart: "🤍",
      },
      {
        name: "taken",
        id: 5,
        ganre: "action",
        time: "2:20",
        rate: 10,
        heart: "🤍",
      },
      {
        name: "taken",
        id: 6,
        ganre: "action",
        time: "2:20",
        rate: 10,
        heart: "🤍",
      },
      {
        name: "taken",
        id: 7,
        ganre: "action",
        time: "2:20",
        rate: 10,
        heart: "🤍",
      },
      {
        name: "taken",
        id: 8,
        ganre: "action",
        time: "2:20",
        rate: 10,
        heart: "🤍",
      },
      {
        name: "taken",
        id: 9,
        ganre: "action",
        time: "2:20",
        rate: 10,
        heart: "🤍",
      },
      {
        name: "taken",
        id: 10,
        ganre: "action",
        time: "2:20",
        rate: 10,
        heart: "🤍",
      },
      {
        name: "taken",
        id: 11,
        ganre: "action",
        time: "2:20",
        rate: 10,
        heart: "🤍",
      },
    ],
    page: 5, //items in page, currnt page, number of pages, index in arr
  };

  changeHeart = (id) => {
    this.state.origin.map((movie) => {
      if (movie.id == id && movie.heart == "🤍") {
        movie.heart = "🖤";
      } else if (movie.id == id && movie.heart == "🖤") {
        movie.heart = "🤍";
      }
    });
    this.setState({ origin: this.state.origin });
    this.setState({ arr: this.state.arr });
  };
  removeItem = (id) => {
    const arr = this.state.arr.filter((movie) => movie.id !== id);
    this.setState({ arr });
    const origin = this.state.origin.filter((movie) => movie.id !== id);
    this.setState({ origin });
  };
  thePage(num) {
    this.setState({ page: parseInt(num) });
  }

  filterItem = (ganre) => {
    switch (ganre) {
      case "action": {
        const arr = this.state.origin.filter((movie) => movie.ganre == ganre);
        this.setState({ arr });
        break;
      }
      case "drama": {
        const arr = this.state.origin.filter((movie) => movie.ganre == ganre);
        this.setState({ arr });
        break;
      }

      case "scifi": {
        const arr = this.state.origin.filter((movie) => movie.ganre == ganre);
        this.setState({ arr });
        break;
      }

      case "horror": {
        const arr = this.state.origin.filter((movie) => movie.ganre == ganre);
        this.setState({ arr });
        break;
      }

      case "comedy": {
        const arr = this.state.origin.filter((movie) => movie.ganre == ganre);
        this.setState({ arr });
        break;
      }

      case "fantasy": {
        const arr = this.state.origin.filter((movie) => movie.ganre == ganre);
        this.setState({ arr });
        break;
      }

      case "all": {
        const arr = [...this.state.origin];
        this.setState({ arr });
        break;
      }
    }
  };
  lengthArr(ganre) {
    if (ganre == "all") {
      const arr = [...this.state.origin];
      return arr.length;
    } else {
      const arr = this.state.origin.filter((movie) => movie.ganre == ganre);
      return arr.length;
    }
  }
  onSubmitMaster(e, movie, newId) {
    e.preventDefault();
    if (movie.time.startsWith("0")) {
      movie.time = movie.time.slice(1, movie.time.length);
    }
    const newMovie = {
      name: movie.name,
      id: newId,
      ganre: movie.ganre,
      time: movie.time,
      rate: movie.rate,
      heart: "🤍",
    };
    this.state.arr.push(newMovie);
    this.state.origin.push(newMovie);
    this.setState({ arr: this.state.arr });
    this.setState({ origin: this.state.origin });
    alert("Movie " + movie.name + " added succssesfully");
    this.filterItem("all");
    e.target.reset();
  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          thePage={(thisPage) => this.thePage(thisPage)}
          filterItem={(genre) => this.filterItem(genre)}
          arr={this.state.arr}
        />
        <Main
          itemsPage={this.state.page}
          onSubmitMaster={(e, movie, newId) =>
            this.onSubmitMaster(e, movie, newId)
          }
          lengthArr={(ganre) => this.lengthArr(ganre)}
          origin={this.state.origin}
          arr={this.state.arr}
          id={this.state.arr.id}
          name={this.state.arr.name}
          ganre={this.state.arr.ganre}
          time={this.state.arr.time}
          key={this.state.arr.id}
          rate={this.state.arr.rate}
          heart={this.state.arr.heart}
          changeHeart={(id) => this.changeHeart(id)}
          myDelete={(id) => this.removeItem(id)}
          filterItem={(genre) => this.filterItem(genre)}
        />
      </React.Fragment>
    );
  }
}

export default App;
