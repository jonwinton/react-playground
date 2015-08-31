'use strict';

import React from 'react';
import HelloWorld from './components/HelloWorld';

export default class App {
    constructor() {

        this.init();
    }

    init() {
        React.render(<HelloWorld />, document.body);
    }
}