'use strict';
(function () {
    var accordion = document.querySelectorAll('.accordion');

    var isActive = function(elem){
        var accordionItem = elem.querySelectorAll('.accordion__item');
        var activeEl = null;
        accordionItem.forEach(function (item) {
            if(item.classList.contains('active')){
                activeEl = item;
            }
        });
        return activeEl;
    };

    accordion.forEach(function (item) {
        item.addEventListener('click', function (evt) {
            evt.preventDefault();
            var parent = evt.target.parentNode;
            if (evt.target.classList.contains('accordion__title-el')) {
                if(parent !== isActive(item)){
                    var acctiveEl = isActive(item);
                    if (acctiveEl){
                        acctiveEl.classList.remove('active');
                    }
                    parent.classList.add('active');
                }else {
                    parent.classList.remove('active');
                }

            }
        })
    })
})();