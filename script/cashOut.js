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
        }
        else {
            console.log('pin thik nai');
        }
    });


    