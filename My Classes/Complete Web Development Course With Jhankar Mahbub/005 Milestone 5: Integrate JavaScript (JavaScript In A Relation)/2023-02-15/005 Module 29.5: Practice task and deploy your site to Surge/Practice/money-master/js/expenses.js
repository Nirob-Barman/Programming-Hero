document.getElementById('calculate-btn').addEventListener('click', function(){
    const incomeAmount = getInputFieldValueById('income');

    const foodAmount = getInputFieldValueById('food');
    const rentAmount = getInputFieldValueById('rent');
    const clothesAmount = getInputFieldValueById('clothes');

    const totalExpense = foodAmount + rentAmount + clothesAmount;

    setTextElementValueById('total-expense', totalExpense);

    const currentBalanceAmount = incomeAmount - totalExpense;

    setTextElementValueById('balance', currentBalanceAmount);
})

document.getElementById('btn-save').addEventListener('click', function(){
    const incomeAmount = getInputFieldValueById('income');

    const saveAmount = getInputFieldValueById('save');
    
    const savingAmount = getTextElementValueById('saving-amount');

    const currentSavingAmount = (incomeAmount*(savingAmount/100));
    
    setTextElementValueById('saving-amount', currentSavingAmount);

    // const remainingBalance = 
})
