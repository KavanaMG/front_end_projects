const open=document.getElementById('open')
const close=document.getElementById('close')
const container=document.querySelectorAll('open')

open.addEventListener('click',()=> container.classList.add('show-nav'))
open.addEventListener('click',()=> container.classList.remove('show-nav'))