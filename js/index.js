
// 1st donation section------>
document.getElementById('btn-donate-N').addEventListener('click', function(){
    const addMoneyN = getInputFieldValueById('add-money-N');
        const receivedMoneyN = getTextFieldById('received-money-N');
         const mainBalance =getTextFieldById('main-balance');
        
          if (isNaN(addMoneyN) || addMoneyN > mainBalance ||     addMoneyN <= 0) {          
            alert('Failed to donation');
            document.getElementById('my_modal_1').close()         
            return;
         }
       
    const newBalanceN = addMoneyN + receivedMoneyN;
    document.getElementById('received-money-N').innerText = newBalanceN;
   
    const remainingBalance = mainBalance - addMoneyN;
    document.getElementById('main-balance').innerText = remainingBalance; 
        
    const div = document.createElement('div');
    div.classList.add('border-2', 'shadow-xl', 'p-6');
   div.innerHTML = `
        <h4 class = "text-xl font-bold">${addMoneyN} Taka is Donated for Flood at Noakhali, Bangladesh </h4> <br>
        <p class = "shadow-lg shadow-slate-300 p-2 font-semibold">Date: ${new Date().toString()}  </p>
    `;
    const historyContainer = document.getElementById('donation-list') ;
    historyContainer.appendChild(div);  
})  


// 2nd donation section----->
document.getElementById('btn-donate-F').addEventListener('click', function(){
    const addMoneyF = getInputFieldValueById('add-money-F');
    const receivedMoneyF = getTextFieldById('received-money-F');
    const mainBalance =getTextFieldById('main-balance');
    if (isNaN(addMoneyF) || addMoneyF > mainBalance ||     addMoneyF <= 0) {
        
        alert('Failed to donation');
        document.getElementById('my_modal_2').close();
        return;
     }

const newBalanceF = addMoneyF + receivedMoneyF;
document.getElementById('received-money-F').innerText = newBalanceF;

const remainingBalance = mainBalance - addMoneyF;
document.getElementById('main-balance').innerText = remainingBalance; 
   
const div = document.createElement('div');
div.classList.add('border-2', 'shadow-xl', 'p-6');
div.innerHTML = `
    <h4 class = "text-xl font-bold">${addMoneyF} Taka is Donated for Flood at Feni, Bangladesh </h4> <br>
    <p class = "shadow-lg shadow-slate-300 p-2 font-semibold">Date: ${new Date().toString()}  </p>
`;
const historyContainer = document.getElementById('donation-list') 
historyContainer.appendChild(div);
})


// 3rd donation section------->
document.getElementById('btn-donate-Q').addEventListener('click', function(){
    const addMoneyQ = getInputFieldValueById('add-money-Q');
    const receivedMoneyQ = getTextFieldById('received-money-Q');
    const mainBalance =getTextFieldById('main-balance');
    if (isNaN(addMoneyQ) || addMoneyQ > mainBalance ||     addMoneyQ <= 0) {
        
        alert('Failed to donation');
        document.getElementById('my_modal_3').close();
        return;
     }
const newBalanceQ = addMoneyQ + receivedMoneyQ;
document.getElementById('received-money-Q').innerText = newBalanceQ;

const remainingBalance = mainBalance - addMoneyQ;
document.getElementById('main-balance').innerText = remainingBalance; 
const div = document.createElement('div');
div.classList.add('border-2', 'shadow-xl', 'p-6');
div.innerHTML = `
    <h4 class = "text-xl font-bold">${addMoneyQ} Taka is Donated for Aid for Injured in the Quota Movement </h4> <br>
    <p class = "shadow-lg shadow-slate-300 p-2 font-semibold">Date: ${new Date().toString()}  </p>
`;
const historyContainer = document.getElementById('donation-list') 
historyContainer.appendChild(div);
})

// btn features----->
donationBtn = document.getElementById('donation');
historyBtn = document.getElementById('history');
historyBtn.addEventListener('click', function(){
    
    historyBtn.classList.add('btn-info', 'text-white');
    donationBtn.classList.remove('btn-info', 'text-white');
    showFeaturesById('donation-history');  
})

donationBtn.addEventListener('click', function(){
    donationBtn.classList.add('btn-info', 'text-white');
    historyBtn.classList.remove('btn-info', 'text-white');
    showFeaturesById('donation-card-section'); 
})



document.getElementById('btn-blog').addEventListener('click', function(){
     
    window.location.href = './home.html'
    
})
