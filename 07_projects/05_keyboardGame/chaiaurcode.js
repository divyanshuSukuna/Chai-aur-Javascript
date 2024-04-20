const key=document.querySelector('.key')
document.addEventListener('keydown', (e)=>{
  key.innerHTML=`Key Pressed: ${e.key}, Key Code: ${e.keyCode}`
})