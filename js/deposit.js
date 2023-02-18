document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit clicked');
    //Deposite
    const depositeField = document.getElementById('deposit-amount');
    const depositeAmount = depositeField.value;
    depositeField.value = '';
    const newDepositeAmount = parseInt(depositeAmount);
    // console.log(typeof depositeAmount);

    const depositeAmountTotal = document.getElementById('deposit-total');
    const depositTotal = depositeAmountTotal.innerText;
    const previousDepositeTotal = parseFloat(depositTotal);
    const currentDepositTotal = previousDepositeTotal+newDepositeAmount;
    depositeAmountTotal.innerText = currentDepositTotal;
    // console.log(currentDepositTotal);

    //Balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    const currentBalanceTotal = previousBalanceTotal+newDepositeAmount;
    balanceTotalElement.innerHTML = currentBalanceTotal;
});