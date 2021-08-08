//一旦止めてます
function inputChange(event){
    msg.innerText = '音量は ' + happySlider.value + ' です';
  }
  
  let happySlider = document.getElementById('happySlider');
  happySlider.addEventListener('input', inputChange);
  let msg = document.getElementById('msg');