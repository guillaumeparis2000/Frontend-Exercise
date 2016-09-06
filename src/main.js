import 'babel-polyfill';
import DocReady from 'es6-docready'
import './app.scss';

DocReady(() => {

    activate();

    ///////////////////////////////////////////////////

    function activate() {
        hideAllDd();
        addClickEventOnDt();
    }

    function hideAllDd() {
        const ddElements = document.getElementsByTagName('dd');
        for (const element of ddElements) {
            element.classList.add('u-hidden');
        }
    }

    function addClickEventOnDt() {
        const dtElements = document.getElementsByTagName('dt');

        for (const element of dtElements) {
            element.addEventListener('click', dtClick, false);
        }
    }

    function dtClick() {
        if(this.classList.contains('ajax-request')) {
            getAjaxContent(this);
        }
        else {
            toggleDt(this);
        }
    }

    function toggleDt(element) {
        let hide = true;

        if (element.nextElementSibling.classList.contains('u-hidden')) {
            hide = false;
        }

        hideAllDd();

        if (hide) {
            element.nextElementSibling.classList.add('u-hidden')
        }
        else{
            element.nextElementSibling.classList.remove('u-hidden')
        }
    }

    function getAjaxContent(element, callback) {
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                element.nextElementSibling.innerHTML =  xmlhttp.responseText;
                toggleDt(element);
            }
        };

        xmlhttp.open('GET', './ajax-content/' + element.getAttribute('data-file-name'), true);
        xmlhttp.send();
    }

});
