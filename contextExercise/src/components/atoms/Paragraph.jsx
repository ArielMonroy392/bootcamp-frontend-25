import PropTypes from "prop-types";

export default function Paragraph ({children}) {
  return (
    <p style={{fontFamily: "fantasy"}}>{children}</p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired
};