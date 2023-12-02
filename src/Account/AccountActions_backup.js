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
} 

export function requestLoan(loan_amt,loan_purpose){
    return{
        type: 'REQUEST_LOAN', 
        payload:{loan_amt, loan_purpose}    
    }
}

export function Payloan(amount){
    return{
        type:'PAY_LOAN',
        payload: amount
    }
}