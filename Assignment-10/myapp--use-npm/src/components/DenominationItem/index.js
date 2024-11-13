 import './index.css';
const DenominationItem =(props)=>{
  const {ListItems,Decrement}=props
  const{value}=ListItems
 const DecreaseAmount=()=>{
  Decrement(value)
 }
  return(
      <div className='prashanth'>
    <button onClick={DecreaseAmount} className='button'>{value}</button>
  </div>
  )
}

export default DenominationItem