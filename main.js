
window.onload = function() {
    const accounts = [
        {id: 1, password: '1234', balance: 500},
        {id: 2, password: '1234', balance: 500},
        {id: 3, password: '1234', balance: 500}
    ];
    let cuentaSeleccionada = null;

    const accountButtons = document.querySelectorAll('.account');
    accountButtons.forEach(button => {
        button.addEventListener('click', function() {
            accountButtons.forEach(button => button.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    document.getElementById('loginButton').addEventListener('click', function() {
        const accountId = document.querySelector('.account.selected').dataset.id;
        const enteredPassword = document.getElementById('passwordInput').value;
        const account = accounts.find(account => account.id == accountId);
        
        if (account.password === enteredPassword) {
            cuentaSeleccionada = account;
            document.getElementById('actions').style.display = 'block';
        } else {
            alert('Contraseña incorrecta. Inténtalo de nuevo.');
        }
    });

    document.getElementById('checkBalanceButton').addEventListener('click', function() {
        document.getElementById('balanceDisplay').textContent = 'Saldo actual: $' + cuentaSeleccionada.balance;
        document.getElementById('balanceDisplay').style.display = 'block';
    });

    document.getElementById('depositButton').addEventListener('click', function() {
        document.getElementById('depositInput').style.display = 'block';
    });

    document.getElementById('confirmDepositButton').addEventListener('click', function() {
        const depositAmount = Number(document.getElementById('depositAmount').value);
        if(cuentaSeleccionada.balance + depositAmount <= 990){
            cuentaSeleccionada.balance += depositAmount;
            alert('Has depositado: $' + depositAmount + '. Tu nuevo saldo es: $' + cuentaSeleccionada.balance);
        }else{
            alert('El monto a depositar sobrepasa el límite de $990. Por favor, ingresa un monto menor.')
        }
        document.getElementById('depositAmount').value = '';
        document.getElementById('depositInput').style.display = 'none';
    });

    document.getElementById('withdrawButton').addEventListener('click', function() {
        document.getElementById('withdrawInput').style.display = 'block';
    });

    document.getElementById('confirmWithdrawButton').addEventListener('click', function() {
        const withdrawAmount = Number(document.getElementById('withdrawAmount').value);
        if(cuentaSeleccionada.balance - withdrawAmount >= 10){
            cuentaSeleccionada.balance -= withdrawAmount;
            alert('Has retirado: $' + withdrawAmount + '. Tu nuevo saldo es: $' + cuentaSeleccionada.balance);
        }else{
            alert('El monto a retirar es mayor que el saldo disponible o dejará la cuenta con menos de $10. Por favor, ingresa un monto menor.')
        }
        document.getElementById('withdrawAmount').value = '';
        document.getElementById('withdrawInput').style.display = 'none';
    });
}
