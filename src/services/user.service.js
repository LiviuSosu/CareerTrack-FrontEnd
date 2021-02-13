//import config from 'config';
import config from '../config/config.Developlent.json'

export const userService = {
    login,
    logout,
    getLoggedUser
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`http://localhost:1400/api/Users/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        }).catch(err => {
            console.log(err);
            return err;
        });
}

function logout(token) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
    };

    return fetch(`http://localhost:1400/api/Users/Logout`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.removeItem('user');
            console.log('hatz geonutzule!');
            console.log(user);
            return user;
        }).catch(err => {
            console.log('naspa...');
            console.log(err);
            return err;
        });
}

function getLoggedUser(){
    var user = localStorage.getItem('user');
    console.log(user);
    return user;
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                //TODO: logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}