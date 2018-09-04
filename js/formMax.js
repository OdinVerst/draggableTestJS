var formSetval = document.querySelector('.formContain');
var formSetvalBtn = document.querySelector('.setval__btn');
var formSetvalMin = document.querySelector('.setval__min');
var formSetvalMax = document.querySelector('.setval__max');
var showError = document.querySelector('.showError');
var newMin;



formSetvalBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    var min = formSetvalMin.value;
    var max = formSetvalMax.value;
    console.log(min);
    if(Number(min) <= Number(max)){
        if(min === "" || max === ""){
            showError.style.visibility ='visible';
            showError.innerHTML= '<b style="color: red">Заполните все поля!</b>'
        }else {
            setMaxMinFilterVal(min, max);
            showError.style.visibility = 'hidden';
            procentFomul = (filterInput[1].value - filterInput[0].value)/100;
            newMin = min;
            for(var i = 0;i <draggableBl.length; i ++){
                draggableBl[i].removeAttribute('style');
            }


        }
    } else {
        showError.style.visibility ='visible';
        showError.innerHTML= '<b style="color: red">Минимум больше максимума!</b>'
    }

});

