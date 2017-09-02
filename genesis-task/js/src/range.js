"use strict"

// ready( () => {

//     const sliderElem = document.getElementById('range');
// const thumbMin = document.getElementById('thumb-min');
// const thumbMax = document.getElementById('thumb-max');
// // let thumbMin = sliderElem.children[0];
// const sliderCoords = getCoords(sliderElem);
// const rangeEnd = sliderElem.offsetWidth - thumbMin.offsetWidth;
// const MAX_YEAR = 58;
// // let rangeEnd = sliderElem.offsetWidth;

// let min = parseInt(getComputedStyle(thumbMin).left);
// let max = parseInt(getComputedStyle(thumbMax).left);

// let mintext = parseInt(parseInt(getComputedStyle(thumbMin).left)/(rangeEnd/(MAX_YEAR-18))) + 18;
// thumbMin.children[0].innerHTML = mintext;
// let maxtext = parseInt(parseInt(getComputedStyle(thumbMax).left)/(rangeEnd/(MAX_YEAR-18))) + 18;
// thumbMax.children[0].innerHTML = maxtext;

// thumbMin.onmousedown = (e) => {
//     let thumbCoords = getCoords(thumbMin);
//     let shiftX = e.pageX - thumbCoords.left;


//     document.onmousemove = (e) => {
//         let newLeft = e.pageX - shiftX - sliderCoords.left;

//         //если вне слайдера
//         if (newLeft < 0) {
//             newLeft = 0;
//         }

//         if (newLeft > max - thumbMin.offsetWidth / 2) {
//             newLeft = max - thumbMin.offsetWidth / 2;
//         }

//         if (!(max-newLeft>thumbMin.offsetWidth*1.5)) {
//             thumbMin.children[0].style.top = "-26px";
//         } else {
//             thumbMin.children[0].style.top = "13px";
//         }

//         min = newLeft;
//         // mintext = parseInt(newLeft/(rangeEnd/(MAX_YEAR-18)));
//         thumbMin.children[0].innerHTML = parseInt(newLeft/(rangeEnd/(MAX_YEAR-18))) + 18;
//         thumbMin.style.left = newLeft + 'px';
//     }

//     document.onmouseup = () => {
//         document.getElementById('year-min').value = thumbMin.children[0].innerHTML;
//         document.onmousemove = document.onmouseup = null;
//     }

//     return false;
// };

// thumbMax.onmousedown = (e) => {
//     let thumbCoords = getCoords(thumbMax);
//     let shiftX = e.pageX - thumbCoords.left;

//     document.onmousemove = (e) => {
//         let newLeft = e.pageX - shiftX - sliderCoords.left;

//         //если вне слайдера
//         if (newLeft < min + thumbMin.offsetWidth / 2) {
//             newLeft = min + thumbMin.offsetWidth / 2;
//         }

//         if (newLeft > rangeEnd) {
//             newLeft = rangeEnd;
//         }

//         if (!(newLeft - min > thumbMin.offsetWidth * 1.5)) {
//             thumbMin.children[0].style.top = "-26px";
//         } else {
//             thumbMin.children[0].style.top = "13px";
//         }

//         max = newLeft;
//         // maxtext = parseInt(newLeft/(rangeEnd/(MAX_YEAR-18)));
//         thumbMax.children[0].innerHTML = parseInt(newLeft/(rangeEnd/(MAX_YEAR-18))) + 18;

//         thumbMax.style.left = newLeft + 'px';
//     }

//     document.onmouseup = () => {
//         document.onmousemove = document.onmouseup = null;
//         document.getElementById('year-max').value = thumbMax.children[0].innerHTML;
//         // console.log('max: ', document.getElementById('year-max').value);
//     }

//     return false;
// };

// thumbMin.ondragstart = () => false;

// function getCoords(elem) {
//     let box = elem.getBoundingClientRect();

//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//     };
// }
  

// })
window.onload = () => {

const sliderElem = document.getElementById('range');
const thumbMin = document.getElementById('thumb-min');
const thumbMax = document.getElementById('thumb-max');
// let thumbMin = sliderElem.children[0];
const sliderCoords = getCoords(sliderElem);
const rangeEnd = sliderElem.offsetWidth - thumbMin.offsetWidth;
const MAX_YEAR = 58;
// let rangeEnd = sliderElem.offsetWidth;

let min = parseInt(getComputedStyle(thumbMin).left);
let max = parseInt(getComputedStyle(thumbMax).left);

let mintext = parseInt(parseInt(getComputedStyle(thumbMin).left)/(rangeEnd/(MAX_YEAR-18))) + 18;
thumbMin.children[0].innerHTML = mintext;
document.getElementById('year-min').setAttribute('value', mintext);
let maxtext = parseInt(parseInt(getComputedStyle(thumbMax).left)/(rangeEnd/(MAX_YEAR-18))) + 18;
thumbMax.children[0].innerHTML = maxtext;
document.getElementById('year-max').setAttribute('value', maxtext);

thumbMin.onmousedown = (e) => {
    let thumbCoords = getCoords(thumbMin);
    let shiftX = e.pageX - thumbCoords.left;


    document.onmousemove = (e) => {
        let newLeft = e.pageX - shiftX - sliderCoords.left;

        //если вне слайдера
        if (newLeft < 0) {
            newLeft = 0;
        }

        if (newLeft > max - thumbMin.offsetWidth / 2) {
            newLeft = max - thumbMin.offsetWidth / 2;
        }

        if (!(max-newLeft>thumbMin.offsetWidth*1.5)) {
            thumbMin.children[0].style.top = "-26px";
        } else {
            thumbMin.children[0].style.top = "13px";
        }

        min = newLeft;
        // mintext = parseInt(newLeft/(rangeEnd/(MAX_YEAR-18)));
        thumbMin.children[0].innerHTML = parseInt(newLeft/(rangeEnd/(MAX_YEAR-18))) + 18;
        thumbMin.style.left = newLeft + 'px';
    }

    document.onmouseup = () => {
        document.getElementById('year-min').setAttribute('value', thumbMin.children[0].innerHTML);
        document.onmousemove = document.onmouseup = null;
    }

    return false;
};

thumbMax.onmousedown = (e) => {
    let thumbCoords = getCoords(thumbMax);
    let shiftX = e.pageX - thumbCoords.left;

    document.onmousemove = (e) => {
        let newLeft = e.pageX - shiftX - sliderCoords.left;

        //если вне слайдера
        if (newLeft < min + thumbMin.offsetWidth / 2) {
            newLeft = min + thumbMin.offsetWidth / 2;
        }

        if (newLeft > rangeEnd) {
            newLeft = rangeEnd;
        }

        if (!(newLeft - min > thumbMin.offsetWidth * 1.5)) {
            thumbMin.children[0].style.top = "-26px";
        } else {
            thumbMin.children[0].style.top = "13px";
        }

        max = newLeft;
        // maxtext = parseInt(newLeft/(rangeEnd/(MAX_YEAR-18)));
        thumbMax.children[0].innerHTML = parseInt(newLeft/(rangeEnd/(MAX_YEAR-18))) + 18;

        thumbMax.style.left = newLeft + 'px';
    }

    document.onmouseup = () => {
        document.onmousemove = document.onmouseup = null;
        // document.getElementById('year-max').value = thumbMax.children[0].innerHTML;
        document.getElementById('year-max').setAttribute('value', thumbMax.children[0].innerHTML);
        // console.log('max: ', document.getElementById('year-max').value);
    }

    return false;
};

thumbMin.ondragstart = () => false;

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
    
}