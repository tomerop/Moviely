const SideBar = (props) => {
  return (
    <div style={{ width: 100, height: 500 }}>
      <button
        className="btn btn-light mb-3 ms-3 position-relative"
        style={{ widht: 100 }}
        onClick={() => props.filterItem("all")}
      >
        All Movies
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {props.lengthArr("all")}
          <span className="visually-hidden">{props.lengthArr("all")}</span>
        </span>
      </button>
      <br />
      <button
        type="button"
        className="btn btn-light mb-3 ms-3 position-relative"
        style={{ widht: 100 }}
        onClick={() => props.filterItem("action")}
      >
        Action
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {props.lengthArr("action")}
          <span className="visually-hidden"></span>
        </span>
      </button>
      <br />
      <button
        className="btn btn-light mb-3 ms-3 position-relative"
        style={{ widht: 100 }}
        onClick={() => props.filterItem("drama")}
      >
        Drama
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {props.lengthArr("drama")}
          <span className="visually-hidden">New alerts</span>
        </span>
      </button>
      <br />
      <button
        className="btn btn-light mb-3 ms-3 position-relative"
        style={{ widht: 100 }}
        onClick={() => props.filterItem("comedy")}
      >
        Comedy
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {props.lengthArr("comedy")}
          <span className="visually-hidden">New alerts</span>
        </span>
      </button>
      <br />
      <button
        className="btn btn-light mb-3 ms-3 position-relative"
        style={{ widht: 100 }}
        onClick={() => props.filterItem("fantasy")}
      >
        Fantasy
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {props.lengthArr("fantasy")}
          <span className="visually-hidden">New alerts</span>
        </span>
      </button>
      <br />
      <button
        className="btn btn-light mb-3 ms-3 position-relative"
        style={{ widht: 100 }}
        onClick={() => props.filterItem("horror")}
      >
        Horror
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {props.lengthArr("horror")}
          <span className="visually-hidden">New alerts</span>
        </span>
      </button>
      <br />
      <button
        className="btn btn-light mb-3 ms-3 position-relative"
        style={{ widht: 100 }}
        onClick={() => props.filterItem("scifi")}
      >
        Scifi
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {props.lengthArr("scifi")}
          <span className="visually-hidden">New alerts</span>
        </span>
      </button>
    </div>
  );
};

export default SideBar;
