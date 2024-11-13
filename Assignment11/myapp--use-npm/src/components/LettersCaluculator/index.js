import './index.css'
import {Component} from 'react'

class LettersCaluculator extends Component{
         state={count:10}
         calculate=(event)=>{
            const  num=event.target.value.length
             this.setState({count:num})
         }
    render(){
        const {count}=this.state
    
        return(
           <div className='maincontainer'>
           <div className='firsthalf'>
              <h1 className='heading'>Calculate the Letters your enter</h1>
              <p className='para'>Enter the phrase</p>
              <input type="text" placeholder='calculator' onChange={this.calculate} className='button'></input>
              <div className='box'>No.of letters:{count}</div>
           </div>
           <div className='secondhalf'>
            <img src='https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png' className='image'/>
           </div>
           </div>
        )
    }
}

export default LettersCaluculator