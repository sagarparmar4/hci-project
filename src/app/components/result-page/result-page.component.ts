import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutDetails } from 'src/app/classes/layout-details';
import { CommonService } from 'src/app/services/common.service';
import { author, maintainers } from '../../../../package.json'

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {
  
  fname: string; 
  lname: string; 
  standardLayout: LayoutDetails;
  newLayout: LayoutDetails;
  
  constructor(private commonService: CommonService, private router: Router) { }
  
  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    this.fname = this.commonService.fname;
    this.lname = this.commonService.lname;
    this.standardLayout = this.commonService.standardLayout;
    this.newLayout = this.commonService.newLayout;
  }

  getAuthor(): string {
    return author.name;
  }

  getMaintainers(): string {
    return maintainers.map(e => e.name).join(', ');;
  }
  
}
