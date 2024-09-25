function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber;

}

function getTextFieldById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;

}

// btn convert features--->
function showFeaturesById(id){
    document.getElementById('donation-card-section').classList.add('hidden');
    document.getElementById('donation-history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}