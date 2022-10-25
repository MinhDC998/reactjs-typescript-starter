export interface ICommonErrorResponse {
    [key: string]: string[]
}

export interface ISuccessResponse <D> {
    data: D,
    statusCode: 'OK'
}

export interface IFailedResponse <E> {
    message: E,
    statusCode: 'Error'
}