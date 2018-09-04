// 'use strict';
//
// var draggableBl = document.querySelector('.sample__draggable-bl');
// var draggableBl2 = document.querySelector('.sample__draggable-bl span');
// var draggableContain = document.querySelector('.draggable-sample__contain');
// var percentCount = document.querySelector('.percent__line');
//
// draggableBl2.addEventListener('mousedown', function (evt) {
//     evt.preventDefault();
//     var startCoords = {
//         x: evt.clientX,
//     };
//
//     var onMouseMove = function (moveEvt) {
//         moveEvt.preventDefault();
//         var shift = {
//             x: startCoords.x - moveEvt.clientX
//         };
//
//         startCoords = {
//             x: moveEvt.clientX
//         };
//         // console.log(shift);
//         // console.log('---');
//         // console.log(draggableBl.offsetLeft);
//         if(draggableBl.offsetLeft - shift.x < (draggableContain.clientWidth-17) && draggableBl.offsetLeft - shift.x > 9) {
//             draggableBl.style.left = (draggableBl.offsetLeft - shift.x) + 'px';
//             percentCount.innerHTML = Math.round(((draggableBl.offsetLeft-9)*100)/(draggableContain.clientWidth-26));
//
//         }
//     };
//
//     var onMouseUp = function (upEvt) {
//         upEvt.preventDefault();
//
//         document.removeEventListener('mousemove', onMouseMove);
//         document.removeEventListener('mouseup', onMouseUp);
//     };
//     document.addEventListener('mousemove', onMouseMove);
//     document.addEventListener('mouseup', onMouseUp);
// });

