import { Injectable } from '@angular/core';
import { LayoutDetails } from '../classes/layout-details';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  fname: string;
  lname: string;
  standardLayout: LayoutDetails;
  newLayout: LayoutDetails;

  constructor() { }

  createNewResult(fname: string, lname: string): void {
    this.fname = fname;
    this.lname = lname;
    this.standardLayout = new LayoutDetails();;
    this.newLayout = new LayoutDetails();
  }

}
