function linkLoja(loja) {
   const link = +loja

  


   if (link === livrosHP) {
       document.body.innerHTML = `
           <a href="https://www.google.com/search?q=libors+harrpotter&rlz=1C1ONGR_pt-PTBR1066BR1066&oq=libors+harrpotter&aqs=chrome..69i57.4238j0j1&sourceid=chrome&ie=UTF-8"></a>
          

           
       `
   } else if (numero > numeroSecreto) {
       elementoChute.innerHTML += `
       <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
       `
   } else {
       elementoChute.innerHTML += `
       <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
       `
   }
}
