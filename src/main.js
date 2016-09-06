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
        toggleDt(this);
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
});
