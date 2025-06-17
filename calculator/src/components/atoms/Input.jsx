import './AtomStyles.css'

export  function Input({id, placeholder, onChange, value, type='number', style }) {
  return (
    <input id={id} type={type} placeholder={placeholder} onChange={onChange} value={value} className={`${style}`}/>
  )
}