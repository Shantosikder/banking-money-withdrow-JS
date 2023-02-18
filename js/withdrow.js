document.getElementById('btn-withdrow').addEventListener('click', function(){
    const withdrowAmount = document.getElementById('Withdrow-amount');
    const newWithdrowAmountStirng = withdrowAmount.value;
    const newWithdrowAmount = parseFloat(newWithdrowAmountStirng);
    // console.log(newWithdrowAmount);

    const withTotalElement = document.getElementById('withdrow-total');
    const previousWithdrowTotalStirng = withTotalElement.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowTotalStirng);

    //balance 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousbalanceTotalStirng = balanceTotalElement.innerText;
    const previousbalanceTotal = parseFloat(previousbalanceTotalStirng);

    withdrowAmount.value = '';
    
    if(newWithdrowAmount > previousbalanceTotal){
        alert('Tomar Bap ar ato tk nai');
        return;
    }
    const currentWithdrowTotal = previousWithdrowTotal+newWithdrowAmount;
    withTotalElement.innerText = currentWithdrowTotal;

    const newBalanceTotal = previousbalanceTotal - newWithdrowAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    
});