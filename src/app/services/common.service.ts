import { Injectable } from '@angular/core';
import { LayoutDetails } from '../classes/layout-details';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  fname: string;
  lname: string;
  groupNumber: number = 1;
  standardLayout: LayoutDetails;
  newLayout: LayoutDetails;

  constructor() { }

  createNewResult(fname: string, lname: string, groupNumber: number): void {
    this.fname = fname;
    this.lname = lname;
    this.groupNumber = groupNumber;
    this.standardLayout = new LayoutDetails();;
    this.newLayout = new LayoutDetails();
  }

}
