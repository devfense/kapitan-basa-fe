import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

import { HttpStatus } from '../constants/httpStatus' 

const host = process.env.REACT_APP_HOST;
const port = process.env.REACT_APP_PORT;
const API_PORT = port !== undefined ? ':' + port : '';
const protocol = process.env.REACT_APP_PROTOCOL;

const SERVER_BASE_URL = `${protocol}://${host}${API_PORT}`;
const timeout = 25000;

const config: AxiosRequestConfig = {
    baseURL: SERVER_BASE_URL + '/clushop/',
    timeout,
    headers: { 'Content-Type': 'application/json' }
}

export const arrayBufferToBase64 = (buffer: Array<number>):string => {
    let binary = '';
    let bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
}

export const api = (options: AxiosRequestConfig = {}) => axios.request({...config, ...options});

export interface ResponseDetails<S extends HttpStatus = 200> {
    message: string;
    status: S;
}

export const NOCACHE: AxiosRequestHeaders = {
    'Cache-Control': 'no-cache, must-revalidate',
    'Expires':  '0'
};

export type Response<T extends object = {}, S extends HttpStatus = 200> = { data: ResponseDetails<S> & T };