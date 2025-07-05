document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
   const accountNumber = document.getElementById('account-number').value ;
   const pinNumber = document.getElementById('pin').value;
   console.log(accountNumber,pinNumber);
})