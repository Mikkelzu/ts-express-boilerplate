export default interface IReadService {

    getData(): Promise<any>

    getSingleById(id: number): any

}