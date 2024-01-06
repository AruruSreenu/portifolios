import "../Styles/Form.css";

const Form = () => {
  return (
    <form className="form-container">
      <label className="input-lable">Project Name</label>

      <input className="form-input" type="text" />

      <label className="input-lable">Project Link</label>

      <input className="form-input" type="text" />

      <label className="input-lable">Description</label>

      <textarea className="form-input special-input" />

      <button className="add-button">Add</button>
    </form>
  );
};

export default Form;
