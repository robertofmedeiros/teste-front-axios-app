import axios, { AxiosInstance, AxiosResponse } from "axios";

export enum STATUS_CODE {
    NO_CONTENT = 204,
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    INTERNAL_SERVER_ERROR = 500,
}

export interface IDataRequest {
    url: string;
    data?: object;
    headers?: object;
    withCredentials?: boolean;
    guarded?: boolean;
}

export interface IDataResponse<T = any> {
    data: T;
    statusCode: number;
    message: string;
}

export interface IHttpClient<T = any> {
    api: T;

    get(data: IDataRequest): Promise<IDataResponse<T>>;
    post(data: IDataRequest): Promise<IDataResponse<T>>;
    put(data: IDataRequest): Promise<IDataResponse<T>>;
    delete(data: IDataRequest): Promise<IDataResponse<T>>;
}

class Api implements IHttpClient<AxiosInstance> {
    api: AxiosInstance;

    constructor(baseUrl: string) {
        this.api = axios.create({
            baseURL: baseUrl,
            withCredentials: false,
        });
    }
    async get(data: IDataRequest): Promise<IDataResponse> {
        try {
            let _resp: AxiosResponse = await this.api.get(data.url, {
                headers: data.headers,
            });

            if (_resp === undefined) {
                return {
                    data: [],
                    message: "Api está indisponível",
                    statusCode: 500,
                };
            }

            if (_resp.status === STATUS_CODE.NO_CONTENT) {
                return {
                    data: [],
                    message: "Nunhum conteúdo a ser exibido",
                    statusCode: _resp.status,
                };
            }

            return {
                data: _resp.data,
                message: "Ok",
                statusCode: _resp.status,
            };
        } catch (error) {
            return {
                data: null,
                message: "Error",
                statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
            };
        }
    }

    async post(data: IDataRequest): Promise<IDataResponse> {
        try {
            let _resp: AxiosResponse = await this.api.post(data.url, data.data, {
                headers: data.headers || {},
            });

            if (_resp.status === STATUS_CODE.NO_CONTENT) {
                return {
                    data: [],
                    message: "Nunhum conteúdo a ser exibido",
                    statusCode: _resp.status,
                };
            }

            return {
                data: _resp.data,
                message: _resp?.data?.message || "OK",
                statusCode: _resp.status,
            };
        } catch (error) {
            return {
                data: null,
                message: "Error",
                statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
            };
        }
    }

    async put(data: IDataRequest): Promise<IDataResponse> {
        try {
            let _resp: AxiosResponse = await this.api.put(data.url, data.data, {
                headers: data.headers || {},
            });

            if (_resp.status === STATUS_CODE.NO_CONTENT) {
                return {
                    data: [],
                    message: "Nunhum conteúdo a ser exibido",
                    statusCode: _resp.status,
                };
            }

            return {
                data: _resp.data,
                message: "Ok",
                statusCode: _resp.status,
            };
        } catch (error) {
            return {
                data: null,
                message: "Error",
                statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
            };
        }
    }

    async delete(data: IDataRequest): Promise<IDataResponse> {
        try {
            let _resp: AxiosResponse = await this.api.delete(data.url, data.data);

            if (_resp.status === STATUS_CODE.NO_CONTENT) {
                return {
                    data: [],
                    message: "Nunhum conteúdo a ser exibido",
                    statusCode: _resp.status,
                };
            }

            return {
                data: _resp.data,
                message: "Ok",
                statusCode: _resp.status,
            };
        } catch (error) {
            return {
                data: null,
                message: "Error",
                statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
            };
        }
    }
}

const api = new Api(`${process.env.REACT_APP_API_BASE_URL}`);

export default api;