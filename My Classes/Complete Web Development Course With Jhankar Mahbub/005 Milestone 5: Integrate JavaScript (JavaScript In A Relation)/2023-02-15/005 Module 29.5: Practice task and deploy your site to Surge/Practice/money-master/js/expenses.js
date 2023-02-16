document.getElementById('calculate-btn').addEventListener('click', function(){
    const incomeAmount = getInputFieldValueById('income');
    const temporaryAmount = incomeAmount;

    const foodAmount = getInputFieldValueById('food');
    const rentAmount = getInputFieldValueById('rent');
    const clothesAmount = getInputFieldValueById('clothes');

    const totalExpense = foodAmount + rentAmount + clothesAmount;

    setTextElementValueById('total-expense', totalExpense);

    const currentBalanceAmount = incomeAmount - totalExpense;

    setTextElementValueById('balance', currentBalanceAmount);

    document.getElementById('btn-save').addEventListener('click', function(){
        
        const saveAmount = getInputFieldValueById('save');
        
        const savingAmount = getTextElementValueById('saving-amount');
    
        const currentSavingAmount = (temporaryAmount*(savingAmount/100));
        
        setTextElementValueById('saving-amount', currentSavingAmount);
        
        const currentRemainingBalance = currentBalanceAmount - currentSavingAmount;

        setTextElementValueById('remaining-balance', currentRemainingBalance);
    })
    
})

// document.getElementById('btn-save').addEventListener('click', function(){
//     // const incomeAmount = getInputFieldValueById('income');
//     const incomeAmount = 555;

//     const saveAmount = getInputFieldValueById('save');
    
//     const savingAmount = getTextElementValueById('saving-amount');

//     const currentSavingAmount = (incomeAmount*(savingAmount/100));
    
//     setTextElementValueById('saving-amount', currentSavingAmount);

//     const remainingBalance = getElementById('balance');
//     const currentRemainingBalance = incomeAmount - currentSavingAmount;
//     setTextElementValueById('remaining-balance', currentRemainingBalance);
// })