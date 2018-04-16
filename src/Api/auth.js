export const BASEURL = 'https://goiyeucau.herokuapp.com/api';
export const APIURL = BASEURL+ '/v1';


export const API_HEADERS = {
    //'Accept': 'application/json',
    'Content-Type': 'application/json',
};



export const login = (username, password) => {
    const url = `${BASEURL}/token-auth/`;
    return fetch(url, {
        method: 'POST',
        headers: API_HEADERS,
        body: JSON.stringify({
            email: username,
            password: password
        })
    })
    .then((res) => { return res.json()})
    .then((res) => {
        console.log('api res:', res);
        if (res.token){
            return res;
        }else if (res.non_field_errors) {
            return {error: res.non_field_errors.join(', ')};
        }else if (res.errors) {
            return {error: res.errors.join(', ')};
        }
        
    }); 
};

export const logout = (token) => {
    const url = `${BASEURL}/rest-auth/logout`;
    return fetch(url)
    .then((res) => {
        console.log('logout first res:', res) ; 
        return res})
    .then((res) => {
        console.log('logout res:', res);
        return res;
        
    }); 
};

export const signup = (username, password) => {
    const url = `${APIURL}/users/create`;
    fetch(url, {
        method: 'POST',
        headers: API_HEADERS,
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then((res) => { return res.json()})
    .then((res) => {
        return res;
    }); 
};