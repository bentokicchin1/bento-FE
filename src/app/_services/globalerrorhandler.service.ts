import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()

export class GlobalErrorHandler implements ErrorHandler {

    constructor() { }
    msg: string;
    data: any;
    handleError(error) {
        this.msg = error.status + '-' + error.statusText;
        this.data = error.json();
        return this.msg + '-' + this.data.message;
    }
}