import './index.css';

const TodoItem=(props)=>{
      const {items,DeleteItem}=props
      const {title,id}=items
      const onDelete=()=>{
          DeleteItem(id)
      }
      return(
            <div className="list">
             <p className='paragraph'>{title}</p>
             <button className='button' onClick={onDelete}>Delete</button>
            </div>
      )    
}

export default TodoItem