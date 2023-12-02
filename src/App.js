import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
//import {payloan}from './Account/AccountActions_backup'
import { deposit } from './Account/AccountSlice';
import { withdraw } from './Account/AccountSlice';
import {requestLoan } from './Account/AccountSlice';
import{ Payloan} from './Account/AccountSlice'
//import {requestloan} from './Account/AccountActions_backup'
//import {Payloan,deposit,withdraw ,requestLoan}from './Account/AccountActions_backup'
//import depositAction
function App() {
  const[depositAmount, setDepositAmount] = useState()
  const[withdrawAmount, setWithdrawAmount] = useState()
  const[loanAmount, setLoanAmount] = useState()
  const[loanPurpose, setLoanPurpose] = useState('')
  const stateValues = useSelector(state=>state)
  console.log('Entire Store: ', stateValues)
  const dispatch = useDispatch();
  let amount = stateValues.account.balance; //Accountslice ln 10.4
  let LoanAmt =stateValues.account.loan;
  let loanamountt=stateValues.account. loanamount;
  let LoanPurpose=stateValues.account.loanPurpose;
  //let deposit =stateValues.account.deposit;
  if(amount){
    return (
      <div >
        
          <h2 className='App'> Your Account Operation</h2>
          <div className='container'>
              <label for='Deposit'>DEPOSIT</label>
              <input 
                type='number' 
                id='deposit' 
                onChange={(e)=>{
                setDepositAmount(e.target.value)
              }}/>
              <button onClick={()=>dispatch(deposit(depositAmount))}>DEPOSIT</button><br/>
  
              <label for='Withdraw'>WITHDRAW</label>
              <input 
                  type='number' 
                  id='withdraw'
                  onChange={(e)=>{
                  setWithdrawAmount(e.target.value)
                  }}/>

                <button onClick={()=>dispatch(withdraw(withdrawAmount))}>WITHDRAW</button><br/>
  
              <label for='Request Loan'>REQUEST LOAN</label>
              <input 
                  type='number' 
                  placeholder='loan amount' 
                  id='requestLoan'
                  onChange={(e)=>{
                  setLoanAmount(e.target.value)
                  }}/>
                  <input 
                  type='text' 
                  placeholder='loan purpose' 
                  id='loan Purpose'
                  onChange={(e)=>{
                  setLoanPurpose(e.target.value)
                  }}/>
              <button onClick={()=>dispatch(requestLoan(loanAmount, loanPurpose))}>REQUEST LOAN</button><br/>
  
              <label for='payBack'>PAYBACK ${ loanamountt}</label>              
              <button onClick={()=>dispatch(Payloan(LoanAmt))}>PAY LOAN</button><br/>
              <h2>Current Balance Amount :${ amount}</h2>
              <h2>Current Loan Amount :${ LoanAmt}  ,  And  You are Requesting loan for " {LoanPurpose}...."</h2>
              
          </div>
      
      </div>
    );
  }

  else{
    return (
      <div >
        
          <h2> Your Account Operation</h2>
          <div className='container'>
              <label for='deposit'>Deposit</label>
              <input 
                type='number' 
                id='deposit' 
                onChange={(e)=>{
                setDepositAmount(e.target.value)
              }}/>
              <button onClick={()=>dispatch(deposit(depositAmount))}>DEPOSIT</button><br/>
  
              <label for='withdraw'>Withdraw</label>
              <input type='number' id='withdraw'/>
              <button>WITHDRAW</button><br/>
  
              <label for='requestLoan'>Request Loan</label>
              <input type='number' placeholder='loan amount' id='requestLoan'/>
              <input type='text' placeholder='loan purpose' id='loan Purpose'/>
              <button>REQUEST LOAN</button><br/>
  
              <label for='payBack'>Pay Back $X</label>
              <button>PAY LOAN</button><br/>
            
          </div>
      
      </div>
    );
  }
  
}

export default App;
