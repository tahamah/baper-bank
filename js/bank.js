//Handel Deposit event Heandaler
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInput =document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositInput.value) ;

    //update deposit total
    const depositTotal=document.getElementById('deposit-total');
    const previousDepositAmount = parseFloat(depositTotal.innerText) ;
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText= newDepositTotal;
    // clear deposit input field 
    depositInput.value='';

    //Update account blance
    const mainBlance = document.getElementById('main-blance');
    const privesMainBlance= parseFloat(mainBlance.innerText);
    const curentMainBlance = privesMainBlance+newDepositAmount;
    mainBlance.innerText=curentMainBlance;
});


//Handel Withdraw event Heandaler
document.getElementById('widthdraw-btn').addEventListener('click', function(){
    const widthdrawInput =document.getElementById('widthdraw-input');
    const newWidthdrawAmount = parseFloat(widthdrawInput.value);

    //update widthdraw total
    const widtdrawTotal=document.getElementById('widtdraw-total');
    const previousWidtdrawAmount = parseFloat(widtdrawTotal.innerText) ;
    const newWidtdrawTotal = previousWidtdrawAmount + newWidthdrawAmount;
    widtdrawTotal.innerText= newWidtdrawTotal;


    //Update account blance
    const mainBlance = document.getElementById('main-blance');
    const privesMainBlance= parseFloat(mainBlance.innerText);
    const curentMainBlance = privesMainBlance - newWidthdrawAmount;
    mainBlance.innerText=curentMainBlance;
    widthdrawInput.value='';

})




