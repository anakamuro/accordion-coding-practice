const accordion = document.querySelectorAll('.panel');
accordion.forEach(function(ele){
    console.log(ele);
    ele.addEventListener('click', toggleEle)
})

function toggleEle(e){
    // accordion.forEach(function(ele){
    //  ele.classList.remove('active');
    // })
   console.log(e.target.parentElement)
// const allActives = document.querySelectorAll('.active');
 accordion.forEach(function(ele){
    if(e.target.parentElement === ele){
    ele.classList.toggle('active');
    } else {
    ele.classList.remove('active');
    }
})
}