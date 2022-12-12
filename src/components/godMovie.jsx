import React, { Component } from "react";
import Movies from "./movies";
import SideBar from "./sideBar";
class GodMovie extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SideBar
            origin={this.props.origin}
            filterItem={(id) => this.props.filterItem(id)}
            lengthArr={(ganre) => this.props.lengthArr(ganre)}
          />
          <div className="container-fluid">
            <Movies {...this.props} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GodMovie;
