export default function Input({ ref, placeholder }) {
  return (<input style={{ height: '30px', borderRadius: "4px", border: "solid 1px gray", padding: "4px 8px" }} ref={ref} placeholder={placeholder}></input>)
}