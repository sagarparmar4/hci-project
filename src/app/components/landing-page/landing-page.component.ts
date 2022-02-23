import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  
  showError: boolean = false; 
  
  constructor(private commonService: CommonService, private router: Router) { }

  startExperiment(userDetails: NgForm): void {
    if(userDetails.value.fname && userDetails.value.lname) {
      this.showError = false;
      this.commonService.createNewResult(userDetails.value.fname, userDetails.value.lname, userDetails.value.experimentGroup);

      let url = (this.commonService.groupNumber == 1) ? 'standard-layout' : 'new-layout';
      this.router.navigate([url],  { skipLocationChange: true });
    } else {
      this.showError = true;
    }
  }
  
}
