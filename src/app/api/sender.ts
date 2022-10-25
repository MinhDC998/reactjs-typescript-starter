import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type' : 'application/json'
    }
})

const handleResponse = (res: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        if (res.status === 200) {
            if (res.data.statusCode === 'OK') return resolve(res.data);

            return reject(res.data.message);
        }

        if (res.status !== 200) return reject(new Error(res.statusText));

        reject(new Error('Unknown Error'));
    });
}

const handleError = (error: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        // if (isCancelRequest(error)) {
        //     return;
        // }

        if (error.response && error.response.data) {
            return reject(error.response.data.message);
        }

        return reject(error);
    });
}

export const setAuthentication = (token: string): void => { instance.defaults.headers.common.Authorization = `Bearer ${token}`; }

export const get = (route: string, params?: { [key: string]: string }): Promise<any> => {
    return instance.get(route, { params }).then(handleResponse).catch(handleError);
};

export const post = (route: string, payload: { [key: string]: any } = {}): Promise<any> => (
    instance.post(route, payload).then(handleResponse).catch(handleError)
);

export const put = (route: string, payload: { [key: string]: any }): Promise<any> => (
    instance.put(route, payload).then(handleResponse).catch(handleError)
);

export const del = (route: string): Promise<any> => (
    instance.delete(route).then(handleResponse).catch(handleError)
);