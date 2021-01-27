import "./index.scss";

function Button({ size = "medium", children, isTransperent, onClick }) {
  const transperency = isTransperent ? "btn--transperent" : "";
  return (
    <button onClick={onClick} className={`btn btn--${size} ${transperency}`}>
      {children}
    </button>
  );
}

export default Button;
