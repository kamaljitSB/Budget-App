

const totalbudget = document.getElementById('total-budget')
const createbtn = document.querySelector('.Create-budget-btn')

const expense_item = document.querySelector('.input-name')
const expensive_amount = document.querySelector('.input-amount')
const addexpensebtn = document.querySelector('.add-expense-btn')

let BudgetAmount = document.createElement('div')
BudgetAmount.classList.add('Budget-Amount-displayer')

let RemainingAmount_list = document.createElement('div')
RemainingAmount_list.classList.add('Remaining-budget-displayer')

budgetListDiv = document.querySelector('.main')


function getBudgetAmount(totalbudget, expensive_amount){
    // if(Number.isFinite(expensive_amount) == false){
        
    let valueForExpense = expensive_amount.value
    let valuearr = valueForExpense.split()
    let valueAmount = valuearr[0]
    

    let budget_data = totalbudget.value
    let budgetarr = budget_data.split()
    let amount = budgetarr[0]
    amount.value = BudgetAmount;
    totalbudget.value = '';
    
    remaining_balance = parseFloat(amount)- parseFloat(valueAmount)
    display_budget(amount,remaining_balance)
}

function display_budget(totalbudget,remaining_balance) {
    BudgetAmount.innerHTML = `
    <h2>My Budget: ${totalbudget}</h2>
    <h3>Current remaining budget: ${remaining_balance}</h3>
    `
    budgetListDiv.appendChild(BudgetAmount)
}

createbtn.addEventListener('click', ()=>{
    getBudgetAmount(totalbudget,expensive_amount);
})

function display_expense_items(expense_item,expensive_amount){
    let item_for_expense = expense_item.value
    let itemarr = item_for_expense.split()
    let itemName = itemarr.splice(0)

    let amount_for_expense = expensive_amount.value
    let amountarr = amount_for_expense.split()
    let expenseAmount = amountarr[0]

    display_remaining_amount(item_for_expense,amountarr)
    expense_item.value = '';
    expensive_amount.value = '';

}

function display_remaining_amount(expense_item,expenseAmount){
    
    RemainingAmount_list.innerHTML = `
        <h2>${expense_item}: ${expenseAmount}</h2>
        `
        budgetListDiv.appendChild(RemainingAmount_list)
    
}

addexpensebtn.addEventListener('click',()=>{
    display_expense_items(expense_item,expensive_amount);
})



