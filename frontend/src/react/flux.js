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

        this.createActions('users', UserActions);
        this.createStore('users', UserStore, this);
    }
}
const flux = new Flux();
export default flux;