import React from 'react';
import $ from 'jquery';
import HelloWorld from '../components/HelloWorld';

export default class HelloController {
    constructor(string) {

        this.init();
    }

    test() {
        console.log(this);
    }

    init() {

        $.get('http://jsonip.com', function (json) {
            console.log('The IP address is: ' + json.ip);

            React.render(<HelloWorld ip={json.ip} />, document.body);
        }.bind(this));

    }

}


