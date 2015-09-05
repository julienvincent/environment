/*
 |--------------------------------------------------------------------------
 | Store example
 |--------------------------------------------------------------------------
 **/

import { Store } from 'flummox'

export default
class users extends Store {

    constructor(flux) {

        super();

        this.registerAsync(flux.getActions('users').fetch, this._loading, this._update, this._error);

        this.state = {
            user: null,
            error: null,
            loading: false
        }
    }

    _loading() {
        this.setState({
            loading: true,
            error: null
        })
    }

    _update(user) {
        this.setState({
            user: user.user,
            error: null,
            loading: false
        })
    }

    _error(err) {
        this.setState({
            error: err,
            loading: false
        })
    }

    get getState() {
        return this.state
    }
}