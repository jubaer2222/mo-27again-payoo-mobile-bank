// document.getElementById('btn-cash-out')
//    .addEventListener('click',function(event){
//        event.preventDefault();
//     const pin = document.getElementById('cashOut-pin').value ;
//     const convertedPin = parseInt(pin);
//     const amount = document.getElementById('cashOUt-amount').value;
//     const convertedAmount = parseFloat(amount);
//     const mainBalance = document.getElementById('main-balance').innerText;
//       const convertedMainBalance = parseFloat(mainBalance);


//     if(convertedPin === 1234){
//         const sum = convertedMainBalance - convertedAmount;
//         document.getElementById('main-balance').innerText = sum;
//     }
//     else{
//         console.log('pin thik nai');
//     }
//    })

document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = getInputValueById('cashOUt-amount')
        const pin = getInputValueById('cashOut-pin')
        const mainBalance = getInnerTextById(
            'main-balance'
        )
        if (pin === 1234) {
            const sum = mainBalance - amount;
            document.getElementById('main-balance').innerText = sum;

            const container = document.getElementById('transaction-container');
             const p = document.createElement('p');
            p.innerText =`
            cashout ${amount} from  a account
            `
            container.appendChild(p);
        }
        else {
            console.log('pin thik nai');
        }
    });


    