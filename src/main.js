import 'babel-polyfill';
import DocReady from 'es6-docready'
import './app.scss';

DocReady(() => {

    activate();

    ///////////////////////////////////////////////////

    function activate() {
        console.log('document ready');
    }

});
