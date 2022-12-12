import { render } from "@testing-library/react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
const NewMovie = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      ganre: "",
      time: "",
      rate: "1",
      heart: "🤍",
    },
  });

  const newId = props.origin[props.origin.length - 1].id + 1;
  return (
    <div className="m-5">
      <form
        action="/"
        onSubmit={(e) => {
          props.onSubmitMaster(e, formik.values, newId);
        }}
      >
        <div className="m-5" style={{ width: 300 }}>
          <label className="form-labe"> Movie name </label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            placeholder="enter movie name "
            value={formik.values.name}
            onChange={formik.handleChange}
            required
          />
        </div>
        <div className="m-5" style={{ width: 200 }}>
          <label className="form-labe">Movie lenght </label>
          <input
            max="03:00"
            className="form-control"
            type="time"
            name="time"
            onChange={formik.handleChange}
            required
          />
        </div>
        <div className="m-5" style={{ width: 200 }}>
          <label className="form-labe">Movie Rating</label>
          <input
            max="10"
            min="0"
            className="form-control"
            type="number"
            name="rate"
            onChange={formik.handleChange}
            required
          />
        </div>
        <div className="input-group m-5 " style={{ width: 200 }}>
          <label className="input-group-text" htmlFor="inputGanre">
            Options
          </label>
          <select
            placeholder="Choose"
            className="form-select "
            id="inputGanre"
            name="ganre"
            onChange={formik.handleChange}
            required
          >
            <option value="action">Action</option>
            <option value="horror">Horror</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="fantasy">Fantasy</option>
            <option value="scifi">Scifi</option>
          </select>
        </div>

        <button type="submit" className=" m-5 btn btn-primary">
          Done Done Done{" "}
        </button>
      </form>
    </div>
  );
};

export default NewMovie;
