import 'babel-polyfill';
import DocReady from 'es6-docready'
import './app.scss';

DocReady(() => {

    activate();

    ///////////////////////////////////////////////////

    function activate() {
        hideAllDd();
    }

    function hideAllDd() {
        const ddElements = document.getElementsByTagName('dd');
        for (const element of ddElements) {
            element.classList.add('u-hidden');
        }
    }
});
