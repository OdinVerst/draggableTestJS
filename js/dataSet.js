

for (var i = 0; i < centerDragg.length; i++) {
    centerDragg[i].dataset.indexNumber = i;
}

var setMaxMinFilterVal = function (min, max) {
    filterInput[0].dataset.maxValue = min;
    filterInput[1].dataset.maxValue = max;
};

setMaxMinFilterVal(300, 400);





