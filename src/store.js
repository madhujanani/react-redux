import { createStore } from "redux";
const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose:""
}

function bankReducer(state = initialState, action){
    switch (action.type) {
        case "DEPOSIT":
            return {...state, balance: state.balance + action.payload}
        
        case "WITHDRAW":
            return {...state, balance: state.balance - action.payload}   

        case "REQUEST_LOAN":
            if ( state.loan > 0) return state;
            return {
                    ...state, 
                    loan: action.payload.amount,
                    loanPurpose: action.payload.purpose,
                    balance: state.balance + action.payload.amount
                }
        
        case "PAY_LOAN":
            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan
            }    
        default :
            return state;
    }
}

const store = createStore(bankReducer)

// store.dispatch({
//     type: 'DEPOSIT',
//     payload: 500
// })

//Action Creator
function deposit(amount){
    return {
            type: 'DEPOSIT',
            payload: amount
        }
} 
store.dispatch(deposit(800))
console.log('After Deposit: ', store.getState())

// store.dispatch({
//     type:'WITHDRAW',
//     payload:500
// })
function withdraw(amount){
    return{
        type:'WITHDRAW',
        payload:amount
    }
}
store.dispatch(withdraw(500));
console.log('After Withdraw: ', store.getState())

// store.dispatch({
//     type: 'REQUEST_LOAN',
//     payload: {amount: 1000, purpose:'Buy a cheap car'}
// })
function request_loan(loan_amt,loan_purpose){
    return{
        type: 'REQUEST_LOAN', 
        payload:{loan:loan_amt, purpose:loan_purpose}    
    }
}
store.dispatch(request_loan(1000,"to buy a car"));
console.log('After Loan:', store.getState())

// store.dispatch({
//     type: 'PAY_LOAN',
// })
function Pay_loan(){
    return{
        type:'PayLOAN'
    }
}
store.dispatch(Pay_loan());
console.log('Loan Paid', store.getState())




// Store - Represents application data
// Reducer: used to update the store
// action: that will be dispatched to the reducer alongwith the state
// action creators: responsible to create the action



