const nav=document.getElementsByTagName("nav") [0];
const topoNav=nav.offsetTop;

/*TODA VEZ Q DOU SCROLL, ELE CHAMA A FUNÇÃO "FIXAR NO TOPO*/ 

window.onscroll=function(){
    fixarManuNoTopo()
}

function fixarManuNoTopo(){
    if(window.pageYOffset >= topoNav){
/*retorna a posicao zero (pageYOFFset) */

            nav.classList.add("FixoNoTopo");


    }else{
        nav.classList.remove("FixoNoTopo")
    }
}
