'use strict';

var DRAGGABLE_BLOCK = document.querySelector('.draggable-line');
var draggableBl = document.querySelectorAll('.sample__draggable-bl');
var centerDragg = document.querySelectorAll('.center__evt');
var draggableContain = document.querySelector('.sample__line');
var filterInput = document.querySelectorAll('.filter__input');
var procentFomul = (filterInput[1].value - filterInput[0].value)/100;

var percentCount = function (elem, curVal) {
    var numPercent = elem.querySelector('.percent__line');
    numPercent.innerHTML = Math.floor((curVal * 100) / (draggableContain.clientWidth - 10)) + ' %';
};

var filterCount = function (block, curVal) {
    if (block.classList.contains('filter__block-min')) {
        console.log(procentFomul);
        if(newMin){
            filterInput[0].value = Math.floor(((curVal * 100) / (draggableContain.clientWidth - 10)*procentFomul)+ Number(newMin));
        }else {filterInput[0].value = Math.floor((curVal * 100) / (draggableContain.clientWidth - 10));}
    }
    if (block.classList.contains('filter__block-max')) {
        if(newMin) {
            filterInput[1].value = Math.floor(((curVal * 100) / (draggableContain.clientWidth - 10) * procentFomul) + Number(newMin));
        } else {filterInput[1].value = Math.floor((curVal * 100) / (draggableContain.clientWidth - 10));}
    }
};

DRAGGABLE_BLOCK.addEventListener('mousedown', function (evt) {
    if (evt.target.classList.contains('center__evt')) {
        evt.preventDefault();
        var startCoords = {
            x: evt.clientX
        };

        var onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();
            var shift = {
                x: startCoords.x - moveEvt.x
            };


            startCoords = {
                x: moveEvt.clientX
            };
            var currentDragEL = evt.target;
            if (currentDragEL.parentElement.classList.contains('filter-item')) {
                var curentBlock = draggableBl[evt.target.dataset.indexNumber];
                var curentValFilter = draggableBl[evt.target.dataset.indexNumber].offsetLeft;
                if (currentDragEL.parentElement.classList.contains('filter__block-min')) {
                    if (draggableBl[evt.target.dataset.indexNumber].offsetLeft - shift.x < (draggableBl[Number(evt.target.dataset.indexNumber) + 1].offsetLeft - 9) && draggableBl[evt.target.dataset.indexNumber].offsetLeft - shift.x >= 0) {
                        draggableBl[evt.target.dataset.indexNumber].style.left = (draggableBl[evt.target.dataset.indexNumber].offsetLeft - shift.x) + 'px';
                        filterCount(curentBlock, curentValFilter);
                    }
                }
                if (currentDragEL.parentElement.classList.contains('filter__block-max')) {
                    if (draggableBl[evt.target.dataset.indexNumber].offsetLeft - shift.x < (draggableContain.clientWidth - 9) && draggableBl[evt.target.dataset.indexNumber].offsetLeft - shift.x >= draggableBl[Number(evt.target.dataset.indexNumber) - 1].offsetLeft + 10) {
                        draggableBl[evt.target.dataset.indexNumber].style.left = (draggableBl[evt.target.dataset.indexNumber].offsetLeft - shift.x) + 'px';
                        filterCount(curentBlock, curentValFilter);
                    }
                }
            } else {
                if (draggableBl[evt.target.dataset.indexNumber].offsetLeft - shift.x < (draggableContain.clientWidth - 9) && draggableBl[evt.target.dataset.indexNumber].offsetLeft - shift.x >= 0) {
                    draggableBl[evt.target.dataset.indexNumber].style.left = (draggableBl[evt.target.dataset.indexNumber].offsetLeft - shift.x) + 'px';
                    var parenBlock = draggableBl[evt.target.dataset.indexNumber].parentElement.parentElement.parentElement;
                    var curentVal = draggableBl[evt.target.dataset.indexNumber].offsetLeft;
                    percentCount(parenBlock, curentVal);
                }

            }
        };

        var onMouseUp = function (upEvt) {
            upEvt.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
});