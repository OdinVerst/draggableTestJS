'use strict';

var draggableBl = document.querySelector('.sample__draggable-bl');
var draggableBl2 = document.querySelector('.sample__draggable-bl span');
var draggableContain = document.querySelector('.draggable-sample__contain');

draggableBl2.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
        x: evt.clientX,
    };

    var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();
        var shift = {
            x: startCoords.x - moveEvt.clientX
        };

        startCoords = {
            x: moveEvt.clientX
        };
        console.log(shift);
        console.log('---');
        console.log(draggableBl.offsetLeft);
        if(draggableBl.offsetLeft - shift.x < (draggableContain.clientWidth-17) && draggableBl.offsetLeft - shift.x > 9) {
            draggableBl.style.left = (draggableBl.offsetLeft - shift.x) + 'px';
            console.log(draggableBl.offsetLeft);
        }
    };

    var onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});