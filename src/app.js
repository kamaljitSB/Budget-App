

const totalbudget = document.getElementById('total-budget')
const createbtn = document.querySelector('.Create-budget-btn')

const expense_item = document.querySelector('.input-name')
const expensive_amount = document.querySelector('.input-amount')
const addexpensebtn = document.querySelector('.add-expense-btn')

let BudgetAmount = document.createElement('div')
BudgetAmount.classList.add('Budget-Amount-displayer')

let RemainingAmount = document.createElement('div')
RemainingAmount.classList.add('Remaining-budget-displayer')

budgetListDiv = document.querySelector('.main')


function getBudgetAmount(totalbudget){
    if(expensive_amount == ''){
        expensive_amount.value = 0
    }
    let budget_data = totalbudget.value
    let budgetarr = budget_data.split()
    amount = budgetarr[0]
    totalbudget.value = BudgetAmount;
    totalbudget.value = RemainingAmount;
    totalbudget.value = '';
    
    display_budget(amount)
}

function display_budget(totalbudget) {
    BudgetAmount.innerHTML = `
    <h2>My Budget: ${totalbudget}</h2>
    <h3>Current remaining budget: ${totalbudget}</h3>
    `
    budgetListDiv.appendChild(BudgetAmount)
}

createbtn.addEventListener('click', ()=>{
    getBudgetAmount(totalbudget);
})


