import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloController from './controllers/HelloController';

export default class App {
    constructor() {

        this.init();
    }

    init() {
        //React.render(
        //    <HelloWorld />, // Var that's a class
        //    document.body // Location to put it
        //);
        this.controller = new HelloController();
    }
}