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
        const mainBalance = getInnerTextById('main-balance');
        const selectedBank = document.getElementById('all-bank').value;
        console.log(selectedBank);

        console.log(amount, pin, accountNum, mainBalance);

        if(amount < 0){
            alert('positive num dite hobe')
            return;
        }

        if (accountNum.length === 11) {
             if(pin === 1234){
           const sum = mainBalance + amount;
        //    console.log(sum);
            // document.getElementById('main-balance').innerText = sum
            setInnerTextByIdAndValue('main-balance', sum);

            const container = document.getElementById('transaction-container');
            // const p = document.createElement('p');
            // p.innerText =`
            // added ${amount} from ${accountNum} account
            // `
            // container.appendChild(p);
            const div = document.createElement('div');
            div.classList.add('bg-red-400')
            div.innerHTML = `
            <h1>Added Money from ${selectedBank}</h1>
            <h3>${amount}</h3>
            <p>account num : ${accountNum}</p>
            `
            container.appendChild(div);
      }
      else{
        console.log('pin shathik nai');
      }
      
        } else {
            console.log('num thik nai');
        }
    });