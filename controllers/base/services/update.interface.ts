export default interface IUpdateService {
    updateOneById(id: number, data: object): any 
    updateMany([]: Array<any>): any
}