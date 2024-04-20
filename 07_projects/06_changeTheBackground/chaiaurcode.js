const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[parseInt(Math.random() * 16)];
    }
    return color
  }
  
  function changeColor(){
    const body = document.querySelector('body')
    body.style.backgroundColor=`${randomColor()}`
  }
  
  const start=document.querySelector('#start')
  
  let intervalId
  
  start.addEventListener('click', ()=>{
    if(!intervalId){
      intervalId=setInterval(changeColor, 1000)
    }
    
  })
  
  const stop=document.querySelector('#stop')
  
  stop.addEventListener('click', ()=>{
    clearInterval(intervalId)
    intervalId=null
  })
  