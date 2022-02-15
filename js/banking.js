document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;

    if (newDepositAmount >= 1) {
        const depositTotal = document.getElementById('deposit-total');
        const previusDepositAmount = depositTotal.innerText;

        const newDepositTotal = parseFloat(previusDepositAmount) + parseFloat(newDepositAmount)
        depositTotal.innerText = newDepositTotal

        // balance e add
        const balanceTotal = document.getElementById('balance-total');
        const previusBalanceAmount = balanceTotal.innerText;

        const newBalanceTotal = parseFloat(previusBalanceAmount) + parseFloat(newDepositAmount)
        balanceTotal.innerText = newBalanceTotal

        // clear input deposit
        depositInput.value = '';
    }


})


document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;

    if (newWithdrawAmount >= 1) {
        const withdrawTotal = document.getElementById('withdraw-total');
        const previusWithdrawAmount = withdrawTotal.innerText;

        const newWithdrawTotal = parseFloat(previusWithdrawAmount) + parseFloat(newWithdrawAmount)
        withdrawTotal.innerText = newWithdrawTotal;

        // balance e add
        const balanceTotal = document.getElementById('balance-total');
        const previusBalanceAmount = balanceTotal.innerText;

        const newBalanceTotal = parseFloat(previusBalanceAmount) - parseFloat(newWithdrawAmount)
        balanceTotal.innerText = newBalanceTotal

        // clear input deposit
        withdrawInput.value = '';
    }


})