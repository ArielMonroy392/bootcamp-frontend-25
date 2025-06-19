export default function CheckBox ({value, onChange}) {
  return <input type="checkbox" value={value} onChange={(e)=> onChange(e.target.checked)} ></input>
}