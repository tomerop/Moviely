import React, { Component } from "react";
class SingleMovie extends Component {
  state = {};
  render() {
    const { name, id, ganre, time, myDelete, heart, changeHeart, rate } =
      this.props;
    return (
      <React.Fragment>
        <tr id="row1" style={{ width: 100 + "%" }}>
          <th className="ms-5" style={{ width: 200 }}>
            {name}
          </th>
          <th className="me-5" style={{ width: 200 }}>
            {id}
          </th>
          <th className="me-5" style={{ width: 200 }}>
            {ganre}
          </th>
          <th className="me-5" style={{ width: 200 }}>
            {time}
          </th>
          <th className="me-5" style={{ width: 200 }}>
            {rate}
          </th>
          <td style={{ width: 250 }}>
            <button className="btn btn-warning me-5" onClick={myDelete}>
              delete
            </button>
            <button className="btn me-5" onClick={changeHeart}>
              {heart}
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default SingleMovie;
