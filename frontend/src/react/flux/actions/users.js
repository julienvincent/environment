/*
 |--------------------------------------------------------------------------
 | Actions example
 |--------------------------------------------------------------------------
 **/

import { Actions } from 'flummox'
import { get } from '../ajax/ajax'

export default
class users extends Actions {

    async fetch() {
        return await get('auth')
    }
}