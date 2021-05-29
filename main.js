
(function () {
const btn = document.querySelector('.button-section__btn');

let btnW = btn.offsetWidth;
let btnH = btn.offsetHeight;
let rotateX = 1;
let rotateY = 1;

btn.addEventListener('mousemove', function(mouse) {
    btn.classList.remove('button-section__btn-back-positon');
    let mouseX = mouse.offsetX;
    let mouseY = mouse.offsetY;
    
    if (mouseX <= (btnW /2)) {
        rotateX = -((btnW / 2) - mouseX); 
    } else {
        rotateX = Math.abs((btnW / 2) - mouseX);
    }

    if (mouseY <= (btnH /2)) {
        rotateY = (btnH / 2) - mouseY; 
    } else {
        rotateY = (btnH / 2) - mouseY; 
    }

    btn.style.transform = `rotateY(${rotateX / 2}deg) rotateX(${rotateY / 2}deg)`

});

btn.addEventListener('mouseleave', function() {
    setTimeout(() => {
        btn.classList.add('button-section__btn-back-positon');
        btn.style = '';
    }, 1000);
});
})();

