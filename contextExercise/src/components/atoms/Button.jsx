import PropTypes from 'prop-types';

export default function Button({ children, onClick }) {
  return <button
    style={{ padding: "12px 8px", backgroundColor: "white", borderRadius: "10px", fontFamily: "fantasy" }}
    onClick={onClick}>
    {children}
  </button>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};