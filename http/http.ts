import axios, { AxiosInstance, AxiosResponse } from 'axios'

declare module 'axios' {
    interface AxiosResponse<T = any> extends Promise<T> {}
}

export default abstract class HttpClient {
    protected readonly httpClient: AxiosInstance

    constructor(baseURL: string) {
        this.httpClient = axios.create({
            baseURL,
        })

        this._initializeResponseInterceptor()
    }
    private _initializeResponseInterceptor() {
       this.httpClient.interceptors.response.use(
           this._handleResponse,
           this._handleError
       )
    }

    private _handleResponse = ( {data} : AxiosResponse ) => data

    protected _handleError = (error: any) => Promise.reject(error)

}