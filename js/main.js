'use strict';

var draggableBl = document.querySelector('.sample__draggable-bl');

draggableBl.addEventListener('mousedown', function (evt) {
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
        console.log(startCoords);
        if(startCoords.x < 661) {
            draggableBl.style.left = (draggableBl.offsetLeft - shift.x) + 'px';
            console.log(draggableBl.style.left);
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