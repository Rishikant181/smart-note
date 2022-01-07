// This is a service which is used to log any message passed to, into the console

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LoggerService {
    constructor() { }

    // Method to log an input message
    log(message: any): void {
        console.log(message)
    }
}
