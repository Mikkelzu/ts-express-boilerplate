import HttpClient from "../../../http/http"

export default interface IReadService {

    getData(): Promise<any>

}