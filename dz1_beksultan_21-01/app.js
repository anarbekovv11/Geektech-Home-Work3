const emailInput = document.querySelector(".emailInput");
const emailCheck = document.querySelector(".emailCheck");
const emailResult = document.querySelector(".emailResult");

const regExp = /^[\w][\w-.]*@[\w-]+\.[a-z]{2,4}$/i;
emailCheck.addEventListener("click", () => {
    if (regExp.test(emailInput.value)){
        emailResult.innerHTML = "Адрес введен верно";
        emailResult.style.color = "Green"
    }else {
        emailResult.innerHTML = "Адрес введен не верно";
        emailResult.style.color = "red";
    }
});

//-------------Task2----------\\

let pos = 0;
function recursBox (){
    pos ++;
    if (pos > 400) return;
    document.querySelector(".box").style.left = pos + "px"
    anim();
}
function anim() {
    setTimeout(recursBox, 100);
}
anim();
