if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready();
}
function ready(){
    let panel=document.getElementById('panel');
    panel.addEventListener('click',()=>{
        let navBottom=document.querySelector('.nav-bottom-wrapper').firstElementChild;
        let lis=navBottom.children;
        for(let i=0;i<lis.length;i++){
            lis[i].classList.toggle('visible')
        }
    })
    window.addEventListener('scroll',()=>{
        let details=document.querySelectorAll(".details > div");
        for(let i=0;i<details.length;i++){
            details[i].classList.add('animate');
            if(window.pageYOffset===document.body.scrollHeight-innerHeight || window.pageYOffset===0){
                for(let i=0;i<details.length;i++){
                    details[i].classList.remove('animate')
                }
            }
        }
        setTimeout(()=>{
            for(let i=0;i<details.length;i++){
                details[i].classList.remove('animate');
            }
         },1000);
    });
}