import "./Button.css";

export default function Button({ children, onClick, type }) {
  return (
    <button className={`button ${type}`}
      onClick={onClick}>
      {children}
    </button>
  )
}