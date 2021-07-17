// ============ > start main menu  ================== >
let navlink = document.querySelectorAll(".menu .nav-link");
let link ;
let removeActive;
for(link=0 ; link < navlink.length; link++) {
    navlink[link].addEventListener("click" , function(){
        for(removeActive=0; removeActive < navlink.length ; removeActive++){
            navlink[removeActive].classList.remove("active");
        }
        this.classList.add("active");
    });
};

// ============ > End main menu  ================== >

// ============ > start up button  ================== >

let bodyscroll = document.querySelector("html,body");
window.addEventListener("scroll" , function(){
if(bodyscroll.scrollTop >=100){
document.querySelector(".scroll-top").style.display = "block";
document.querySelector(".scroll-top").addEventListener("click", function(){
    window.scrollTo(0 , 0)
})
}else{
    document.querySelector(".scroll-top").style.display = "none";
}
});

// ============ > End up button  ================== >





// ============ > Start ocardion menu  walid way================== >

let ocardion = document.querySelectorAll(".questions .questions-sections .questions-menu li");
let list ;
for(list=0 ; list < ocardion.length; list++) {
    ocardion[list].addEventListener("click" , function(){
        for(removeActive=0; removeActive < ocardion.length ; removeActive++){
            ocardion[removeActive].classList.remove("active-menu");
        }
        this.classList.add("active-menu");  
        if(document.querySelector(".basics-menu").classList.contains("active-menu")){
            document.querySelector(".spreads").classList.remove("active-list-block");
            document.querySelector(".protect-yourself").classList.remove("active-list-block");
            document.querySelector(".testing").classList.remove("active-list-block");
            document.querySelector(".outbreak").classList.remove("active-list-block");
            document.querySelector(".myth").classList.remove("active-list-block");
            document.querySelector(".basics").classList.add("active-list-block");
        }else
        if(document.querySelector(".spreads-menu").classList.contains("active-menu")){
            document.querySelector(".basics").classList.remove("active-list-block");
            document.querySelector(".protect-yourself").classList.remove("active-list-block");
            document.querySelector(".testing").classList.remove("active-list-block");
            document.querySelector(".outbreak").classList.remove("active-list-block");
            document.querySelector(".myth").classList.remove("active-list-block");
            document.querySelector(".spreads").classList.add("active-list-block");
        }else
        if(document.querySelector(".protect-yourself-menu").classList.contains("active-menu")){
            document.querySelector(".basics").classList.remove("active-list-block");
            document.querySelector(".spreads").classList.remove("active-list-block");
            document.querySelector(".testing").classList.remove("active-list-block");
            document.querySelector(".outbreak").classList.remove("active-list-block");
            document.querySelector(".myth").classList.remove("active-list-block");
            document.querySelector(".protect-yourself").classList.add("active-list-block");
        }else
        if(document.querySelector(".testing-menu").classList.contains("active-menu")){
            document.querySelector(".basics").classList.remove("active-list-block");
            document.querySelector(".spreads").classList.remove("active-list-block");
            document.querySelector(".protect-yourself").classList.remove("active-list-block");
            document.querySelector(".outbreak").classList.remove("active-list-block");
            document.querySelector(".myth").classList.remove("active-list-block");
            document.querySelector(".testing").classList.add("active-list-block");
        }else
        if(document.querySelector(".outbreak-menu").classList.contains("active-menu")){
            document.querySelector(".basics").classList.remove("active-list-block");
            document.querySelector(".spreads").classList.remove("active-list-block");
            document.querySelector(".protect-yourself").classList.remove("active-list-block");
            document.querySelector(".testing").classList.remove("active-list-block");
            document.querySelector(".myth").classList.remove("active-list-block");
            document.querySelector(".outbreak").classList.add("active-list-block");
        }else
        if(document.querySelector(".myth-menu").classList.contains("active-menu")){
            document.querySelector(".basics").classList.remove("active-list-block");
            document.querySelector(".spreads").classList.remove("active-list-block");
            document.querySelector(".protect-yourself").classList.remove("active-list-block");
            document.querySelector(".testing").classList.remove("active-list-block");
            document.querySelector(".outbreak").classList.remove("active-list-block");
            document.querySelector(".myth").classList.add("active-list-block");
        };    
    });
};

// ==================> End ocardion menu==========================>

// ==================> Start ocardion content==========================>


let acc = document.querySelectorAll(".accord");
let first =document.querySelector(".title-paragraph");
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    first.classList.remove("pre-active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
// ==================> End ocardion content==========================>

// ============ > start mobile menu  ================== >
function mobileFunction() {
    var n = document.querySelector(".slide-menu");
    if (n.style.display === "block") {
      n.style.display = "none";
    } else {
      n.style.display = "block";
    }
  }
// ============ > End mobile menu  ================== >

// ============ > start synchronize menu  ================== >

let home = document.querySelector(".home");
let about = document.querySelector(".about");
let symptoms = document.querySelector(".symptomss");
let preventions = document.querySelector(".prevention")
let treat = document.querySelector(".treatment");;
let faq = document.querySelector(".FAQ");
let news = document.querySelector(".news");
window.addEventListener("scroll" , function(){
    if(bodyscroll.scrollTop <500 ){
        for(link=0 ; link < navlink.length; link++) {
                for(removeActive=0; removeActive < navlink.length ; removeActive++){
                    navlink[removeActive].classList.remove("active");
                }
                home.classList.add("active");
            };
        }else{            
            if(bodyscroll.scrollTop >=500 && bodyscroll.scrollTop <=800) {
                for(link=0 ; link < navlink.length; link++) {
                        for(removeActive=0; removeActive < navlink.length ; removeActive++){
                            navlink[removeActive].classList.remove("active");
                        }
                        about.classList.add("active");
                    };
                }else {if(bodyscroll.scrollTop >=1700 && bodyscroll.scrollTop <2400){
                    for(link=0 ; link < navlink.length; link++) {
                            for(removeActive=0; removeActive < navlink.length ; removeActive++){
                                navlink[removeActive].classList.remove("active");
                            }
                            symptoms.classList.add("active");
                        };
                    }else {if(bodyscroll.scrollTop >=2400 && bodyscroll.scrollTop <3000){
                        for(link=0 ; link < navlink.length; link++) {
                                for(removeActive=0; removeActive < navlink.length ; removeActive++){
                                    navlink[removeActive].classList.remove("active");
                                }
                                preventions.classList.add("active");
                            };
                        }else {if(bodyscroll.scrollTop >=4300 && bodyscroll.scrollTop <5200){
                            for(link=0 ; link < navlink.length; link++) {
                                    for(removeActive=0; removeActive < navlink.length ; removeActive++){
                                        navlink[removeActive].classList.remove("active");
                                    }
                                    treat.classList.add("active");
                                };
                            }else {if(bodyscroll.scrollTop >=5700 && bodyscroll.scrollTop <6300){
                                for(link=0 ; link < navlink.length; link++) {
                                        for(removeActive=0; removeActive < navlink.length ; removeActive++){
                                            navlink[removeActive].classList.remove("active");
                                        }
                                        faq.classList.add("active");
                                    };
                                }else {if(bodyscroll.scrollTop >=6300 && bodyscroll.scrollTop <7000){
                                    for(link=0 ; link < navlink.length; link++) {
                                            for(removeActive=0; removeActive < navlink.length ; removeActive++){
                                                navlink[removeActive].classList.remove("active");
                                            }
                                            news.classList.add("active");
                                        };
                                    }else     
                                    document.querySelector(".scroll-top").style.display = "none";
                        };
                    };
                };
            };
        };
    };
});


// ==================> End synchronize menu  ==========================>
