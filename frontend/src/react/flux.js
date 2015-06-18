/*
 |--------------------------------------------------------------------------
 | Flummox - Flux extension
 | Handles dispatcher, actions and stores
 |--------------------------------------------------------------------------
**/

import { Flummox } from 'flummox'

let api = 'http://' + window.location.hostname + ':8080';

class Flux extends Flummox {

    constructor() {

        super();
    }
}

const flux = new Flux();
export default flux;