import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LayoutDetails {
    startTime: Date;
    endTime: Date;
    timeTaken: number;
    accuracy: number;

    constructor() {
        let date: Date = new Date();
        this.startTime = date;
        this.endTime = date;
        this.accuracy = 0;
    }

    getTimeTaken(): number {
        return this.endTime.getTime() - this.startTime.getTime();
    }
    
}
