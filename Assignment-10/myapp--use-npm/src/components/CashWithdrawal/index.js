import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component{
    state={ List:this.props.denominationsList,balance:1150}
   
    Decrement=(value)=>{
           const {balance}=this.state
            const amount=balance-value
            this.setState({
                balance:amount
            })
    }
    render(){
        const{List,balance}=this.state
        return(          
            <div className='maincontainer'>
                <div className='subcontainer'>
                    <div className='firstdiv'><div className='sdiv'>S</div>
                        <p className='search'>Sarah William</p>
                    </div>
                         <div className='seconddiv'>
                            <p className='your'>Your Balance</p>
                            <p className='balance'>{balance}</p>
                           
                        </div>
                        <p className='p'>in Rupees</p>
                            <p className='wtd'>Withdraw</p>
                            <p className='para'>CHOOSE SUM (IN RUPEES)</p>
                            <div className='rajesh'>
           {List.map((eachitem)=>(
            <DenominationItem ListItems={eachitem} Decrement={this.Decrement}/>
           ))} 
           </div>
           </div>
           </div>)
    }
}

export default CashWithdrawal 