import axios from 'axios';
class HttpRequest {
    constructor (baseUrl = baseURL) {
        this.baseUrl = baseUrl
        this.queue = {}
    }
    getInsideConfig () {
        const config = {
            baseURL: this.baseUrl,
            headers: {
                'X-CSRF-TOKEN': document.getElementsByName('csrf-token')[0].content,
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`, // passport
            },
            withCredentials: true // take up cookies
        }
        return config
    }
    destroy (url) {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) {

        }
    }
    interceptors (instance, url) {
        instance.interceptors.request.use(config => {
            if (!Object.keys(this.queue).length) {
                // do something before sending requests
            }
            this.queue[url] = true
            return config
        }, error => {
            return Promise.reject(error)
        })
        instance.interceptors.response.use(res => {
            this.destroy(url)
            // do something after getting responses
            const { data, status } = res;
            // update csrf_token
            if(data['csrf_token']){
                document.getElementsByName('csrf-token')[0].content = data['csrf_token'];
            }
            return { data, status }
        }, error => {
            this.destroy(url);
            let errorInfo = error.response;
            if (!errorInfo) {
                const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error));
                errorInfo = {
                    data : {message: statusText},
                    statusText,
                    status,
                    request: { responseURL: config.url }
                }
            }
            return Promise.reject(errorInfo)
        })
    }
    request (options) {
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options.url);
        return instance(options)
    }
}
export default HttpRequest
