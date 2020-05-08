import tokenService from './tokenService';

const BASE_URL = '/api/user/'; 

function signup(user) {
    console.log(user)
    return fetch(BASE_URL + 'signup', {
        method: 'POST', 
        headers: new Headers ({
            'Content-Type': 'application/json'
        }), 
        body: JSON.stringify(user),
    })
    .then ((res) => {
        console.log(res)
        if (res.ok) return res.json(); 
        throw new Error ('Email is already in use')
    })
    .then (({
        token
    }) => {
        tokenService.setToken(token);

    }); 
}

function getUser() {
    return tokenService.getUserFromToken();
}

function logout(){
    tokenService.removeToken();
}

function login(creds) {
    return fetch (BASE_URL + 'login', {
        method: 'POST', 
        headers: new Headers({
            'Content-Type': 'application/json'
        }), 
        body: JSON.stringify(creds)
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error ('Bad Credentials!'); 
    })
    .then(({
        token 
    }) => tokenService.setToken(token)); 
}

function createBeaut(user){
    return fetch (`${BASE_URL}/newbeautician/`,{
        method: 'PUT', 
        headers:{'content-type': 'application/json', Authorization: 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(user)
    }).then(res => res.json()); 
}

function index(){
    return fetch(BASE_URL + 'homepage')
    .then(res => res.json())
}



export default {
    signup,
    getUser,
    logout,
    login, 
    createBeaut,
    index,
}