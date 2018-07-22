import {APIURL, API_HEADERS} from './auth';
// common header
const headers = Object.assign({}, API_HEADERS);

export const fetchAllRequests = (queryparams) => {
    
    let url = `${APIURL}/requests?`;
    let urls = [];
    for (const k in queryparams) {
        if (queryparams[k] !== null)
            urls.push(k+'='+queryparams[k]);
    }
    url += urls.join("&");

    const params = {
        method: 'GET',
        //headers: headers,
    };
    
    return fetch(url, params)
        .then((res) => { return res.json()})
        .then((res) => {
            console.log('got requests:', res);
            return res;
        });
    
   //return fetch(url);
};


export const postRequest = (message, token) => {
    let postHeader = headers;
    postHeader.Authorization = 'JWT ' + token;
    const url = `${APIURL}/requests`;
    console.log('headers:', headers);
    return fetch(url, {
        method: 'POSt',
        headers: headers,
        body: JSON.stringify({message: message})
    })
    .then(res => { return res.json()})
    .then(res => {
        console.log(' post request:', res);
        return res;
    }); 
};

export const replyRequesst = (request, reply) => {
    
    const url = `{APIURL}/requests`;
    return fetch(url, )
    .then((res) => { return res.json()})
    .then((res) => {
        return res;
    }); 
};

