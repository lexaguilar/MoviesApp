
const path = `http://localhost:3001/`;

const http = url => {

    const base = (url, properties) => {
        
        return new Promise((resolve, reject) => {

            fetch(`${url}`, {...properties })
                .then(processResponse)
                .catch(error => reject(error))
                .then(response => resolve(response));

        })
    };

    let getParameters = function(data) {
        let queryString = '';

        if (data) {
            let parameters = '';

            if (typeof data == 'function')
                parameters = data();
            else
                parameters = data;

            for (const prop in parameters) {
                queryString += `&${prop}=${parameters[prop]}`
            }

        }

        return queryString.length > 0 ? queryString.replace('&', '?') : queryString;

    };

    const _url = `${url}`;

    return {
        
        asGet: (data = null) => {

            let params = getParameters(data);

            return base(`${_url}${params}`, { method: 'GET', Accept: 'application/json', 'Content-Type': 'application/json' });

        },
        asPost: data => {
            return new Promise((resolve, reject) => {
                fetch(_url, {
                        method: 'POST',
                        body: data ? JSON.stringify(data) : null,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",                           
                        }
                    })
                    .then(processResponse)
                    .catch(error => reject(error))
                    .then(data => resolve(data));
            })
        }
    }
}

const processResponse = resp => {

    return new Promise((resolve, reject) => {

        if (resp.status == httpStatus.ok)
            resp.json().then(data => resolve(data))

    })

}

const httpStatus = {
    ok : 200,
    badRequest : 400,
    unauthorized : 401,
    internalServerError : 500
}

export default http;