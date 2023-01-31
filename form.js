const btn= document.querySelector('button')
btn.addEventListener('mouseover',(e) =>{
    const x = e.pageX - btn.offsetLeft
    const y = e.pageY -btn.offsetTop
    btn.style.setProperty('--x', x + 'px')
    btn.style.setProperty('--x', x + 'px')
})
let hideText_btn  = document.getElementById ('hideText_btn')
let hideText = document.getElementById('hideText')

hideText_btn.addEventListener('click', toggleText);
function toggleText(){
    hideText.classList.toggle('show');
}