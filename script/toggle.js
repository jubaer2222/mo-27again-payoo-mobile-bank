/*** 
document.getElementById('cashout').style.display = 'none';

document.getElementById('add-money-box')
    .addEventListener('click', function () {
        document.getElementById('cashout').style.display = 'none';
        document.getElementById('add-money').style.display = 'block'
    })

document.getElementById('cash-out-box')
    .addEventListener('click', function () {
        document.getElementById('cashout').style.display = 'block';
        document.getElementById('add-money').style.display = 'none'
    })
        */


document.getElementById('cashout').style.display = 'none';

document.getElementById('add-money-box')
    .addEventListener('click', function () {
        handleToggle('add-money', 'block')
        handleToggle('cashout', 'none')
        handleToggle('transaction-history', 'none')
    })
document.getElementById('cash-out-box')
    .addEventListener('click', function () {
        handleToggle('add-money', 'none');
        handleToggle('cashout', 'block')
        handleToggle('transaction-history', 'none')
    })

document.getElementById('transaction-box')
   .addEventListener('click',function(){
    handleToggle('add-money', 'none');
    handleToggle('cashout', 'none');
    handleToggle('transaction-history', 'block')
   })

function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}