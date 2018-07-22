// export const BASEURL = 'http://127.0.0.1:8000/api';
export const BASEURL = https://goiyeucau.herokuapp.com/api';
export const APIURL = BASEURL+ '/v1';
export const AUTHURL = APIURL + '/rest-auth'

export const API_HEADERS = {
    //'Accept': 'application/json',
    'Content-Type': 'application/json',
};



export const login = (username, password) => {
    //const url = `${BASEURL}/token-auth/`;
    const url = `${AUTHURL}/login/`;
    
    return fetch(url, {
        method: 'POST',
        headers: API_HEADERS,
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then((res) => { 
        return res.json()
    })
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
    const url = `${AUTHURL}/logout/`;
    return fetch(url)
    .then((res) => {
        console.log('logout first res:', res) ; 
        return res})
    .then((res) => {
        console.log('logout res:', res);
        return res;
        
    }); 
};

export const signup = (payload) => {
    const url = `${AUTHURL}/registration/`;
    fetch(url, {
        method: 'POST',
        headers: API_HEADERS,
        body: JSON.stringify(payload)
    })
    .then((res) => { return res.json()})
    .then((res) => {
        console.log('sginpup res:', res) ; 
        return res;
    }); 
};