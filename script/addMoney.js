/*
document.getElementById('add-money-btn')
 .addEventListener('click', function(event){
      event.preventDefault();
      
      const amount = document.getElementById('amount').value;
      const convertedAmount = parseFloat(amount) || 0;
      
      const pin = document.getElementById('pin').value;
      const convertedPin = parseInt(pin);
      
      const accountNum =document.getElementById('account-num').value;
      
      const mainBalance = document.getElementById('main-balance').innerText;
      const convertedMainBalance = parseFloat(mainBalance);
      

      if(accountNum.length === 11){
        if(convertedPin === 1234){
           const sum = convertedMainBalance + convertedAmount;
            document.getElementById('main-balance').innerText = sum
      }
      else{
        console.log('pin shathik nai');
      }
      }
      else{
        console.log('num thik nai');
      }
})
      */


document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const amount = getInputValueById('amount') || 0 ;
        const pin = getInputValueById('pin');
        const accountNum = document.getElementById('account-num').value; // ✅ value নিচ্ছি

        console.log(amount, pin, accountNum);

        if (accountNum.length === 11) {
            console.log('Account number is valid');
        } else {
            console.log('num thik nai');
        }
    });