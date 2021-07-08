import axios, {AxiosInstance, AxiosPromise, AxiosRequestConfig} from "axios"

class HttpRequest {
    constructor(public baseUrl?: string) {
        this.baseUrl = baseUrl;
    }

    public request(options: AxiosRequestConfig): AxiosPromise {
        const instance: AxiosInstance = axios.create();
        HttpRequest.interceptors(instance, options.url)
        return instance(options)
    }

    private static interceptors(instance: AxiosInstance, url?: string) { //拦截器
        instance.interceptors.request.use(config => {

            return config
        }, error => error)
    }
}

export default HttpRequest