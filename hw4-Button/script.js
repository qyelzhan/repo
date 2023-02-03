const btn = document.querySelector('.button')

function hendlebtnclick(event){
    event.preventDefault();
    let counteClickBtn =btn.textContent;
    btn.textContent = parseInt(counteClickBtn)+1;
}
btn.addEventListener('click',hendlebtnclick);