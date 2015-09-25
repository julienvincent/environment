/*
 |--------------------------------------------------------------------------
 | Mock API
 |--------------------------------------------------------------------------
 **/

export function mock(url, cb) {

    switch (url) {
        case 'auth':
            cb(mockUser());
            break;
        default:
        // some default mock
    }

    function mockUser() {

        return {
            user: {
                id: 1,
                name: 'John',
                surname: 'Doe',
                email: 'johndoe@gmail.com'
            }
        }
    }
}