import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    balance: 1000,
    loan: 0,
    loanPurpose:"",
    deposit:0
}

const accountSlice = createSlice({
    name:'account',
    initialState,
    reducers:{
        deposit(state, action){
            state.balance += parseInt(action.payload)
            state.deposit=parseInt(action.payload)
        },        
        withdraw(state, action){
            state.balance -= action.payload
        },
        requestLoan:{
            prepare(amount, purpose){
                return{
                    payload:{amount, purpose},
                }
            },        
            reducer(state, action){
                if ( state.loan > 0) return state;    
                //console.log(action)
                state.loan = action.payload.amount;
                state.loanPurpose = action.payload.purpose;
                state.balance = state.balance + parseInt(action.payload.amount)
            }
        },  
            Payloan(state){
            return{
                loan: 0,
                loanPurpose: state.loanPurpose,
                loanamount:state.loan,
                balance: state.balance - state.loan,
            }
        }

    }
})

console.log(accountSlice)

export const {deposit, withdraw, requestLoan,Payloan} = accountSlice.actions

export default accountSlice.reducer

/*
export default function accountReducer(state = initialState, action){
    console.log('Reducer Called=>')
    switch (action.type) {
        case "account/deposit":
            return {...state, balance: state.balance + parseInt(action.payload)}
        
        case "WITHDRAW":
            return {...state, balance: state.balance - parseInt(action.payload)}   

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

export function deposit(amount){
    console.log("Action called =>")
    return {
            type: 'DEPOSIT',
            payload: amount
        }
} 

export function withdraw(amount){
    return {
            type: 'WITHDRAW',
            payload: amount
        }
} */