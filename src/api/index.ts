import HttpRequest from "@/http/request";

export * from '@/http/request';
export default new HttpRequest()

export interface ResponseData {
    code: number
    data?: any
    msg?: string
}