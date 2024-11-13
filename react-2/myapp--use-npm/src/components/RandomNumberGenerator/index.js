import {Component} from 'react'
import './index.css';

class RandomNumberGenerator extends Component{
    state={count:0}
    onChane=()=>{
        const Number=Math.floor(Math.random()*100);
        this.setState({count:Number})
    }
    render(){
        const {count}=this.state
        return(
            <div className="outerDivision">
              <div className='innerDivision'>
                 <h1 className='heading'>Random Number</h1>
                 <p className='content'>Generate a random number in the range of 0 to 100</p>
                 <button className='button' onClick={this.onChane}>Generate</button>
                 <p class="change">{count}</p>
              </div>
            </div>
        )
    }
}


export default RandomNumberGenerator