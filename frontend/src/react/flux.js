/*
 |--------------------------------------------------------------------------
 | Flummox - Flux extension
 | Handles dispatcher, actions and stores
 |--------------------------------------------------------------------------
**/

import { Flummox } from 'flummox'

import UserActions from './actions/User'
import UserStore from './stores/User'

class Flux extends Flummox {

    constructor() {

        super();

        this.api = 'http://' + window.location.hostname + ':8080';

        this.createActions('users', UserActions);
        this.createStore('users', UserStore, this, this.api);
    }
}

const flux = new Flux();
export default flux;