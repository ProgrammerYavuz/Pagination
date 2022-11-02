let link = document.getElementsByClassName("link");

let secilen = 1;

function aktifLink(){
    for (l of link){
        l.classList.remove("aktif");
    }
    event.target.classList.add("aktif");
    secilen = event.target.value;
}

function btnGeri(){
    if(secilen > 1){
        for(l of link){
            l.classList.remove("aktif");
        }
        secilen--;
        link[secilen-1].classList.add("aktif");
    }
}

function btnIleri(){
    if(secilen < 6){
        for(l of link){
            l.classList.remove("aktif");
        }
        secilen++;
        link[secilen-1].classList.add("aktif");
    }
}