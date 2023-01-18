const box = document.getElementsByClassName("box");

let positionX = 0;
let positionY = 0;

const go = () => {
    if(positionX <= 440 && positionY === 0 ){
        positionX += 16;
        box[0].style.left = `${positionX}px`;
        setTimeout(go, 100);
    }else if (positionX >= 440 && positionY <= 440) {
    positionY += 16;
    box[0].style.top = `${positionY}px`;
    setTimeout(go, 100);
    }else if (positionX >= 0 && positionY >= 440){
    positionX -= 16;
    box[0].style.left = `${positionX}px`;
    setTimeout(go, 100);
    }else if (positionX <= 440 && positionY >= 0) {
    positionY -= 16;
    box[0].style.top = `${positionY}px`;
    setTimeout(go, 100);
}
};

go();



let interVall = 0;
function see (){
interVall++;
console.log(interVall + " second.");
if(interVall === 60){
    clearInterval(id);
}
}
id = setInterval(see,1000);