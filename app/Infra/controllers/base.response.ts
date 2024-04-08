export default class BaseResponse {
  constructor(
    public statusCode: number,
    public message: string,
    public body?: any
  ) { }
}