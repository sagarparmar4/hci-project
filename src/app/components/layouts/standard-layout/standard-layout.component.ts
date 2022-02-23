import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { compareTwoStrings } from 'string-similarity';

@Component({
  selector: 'app-standard-layout',
  templateUrl: './standard-layout.component.html',
  styleUrls: ['./standard-layout.component.scss']
})
export class StandardLayoutComponent implements OnInit {
  
  isLandscapeMode: boolean;
  orientation: ScreenOrientation = screen.orientation;
  textarea: string;
    
  sampleText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
  'Mauris fermentum venenatis quam vitae tempor. ' +
  'Nam dictum risus ut scelerisque tempus. ' +
  'Aliquam iaculis turpis ac lobortis iaculis. ' +
  'Nulla gravida sem non felis egestas sodales. ' +
  'In non velit faucibus, mollis ante in, elementum orci. ' +
  'Ut ac convallis enim. ' +
  'Suspendisse eget eleifend est. ' +
  'Vivamus elementum, lectus eu placerat ullamcorper, lectus justo hendrerit neque, id pharetra massa urna id risus.';
  
  @ViewChild('standardLayoutForm', {static: false}) standardLayoutForm: NgForm;
  
  constructor(private commonService: CommonService, private router: Router) { }
  
  ngOnInit() {
    this.commonService.standardLayout.startTime = new Date();
    this.checkLandscapeMode();
    this.orientation.addEventListener('change', () => {
      this.checkLandscapeMode();
    });
  }
  
  checkLandscapeMode(): void {
    this.isLandscapeMode = (this.orientation.type == 'landscape-primary' || this.orientation.type == 'landscape-secondary');
  }
  
  nextLayout(standardLayoutForm: NgForm): void {
    this.commonService.standardLayout.endTime = new Date();
    
    let enteredText = standardLayoutForm.value.textarea ? standardLayoutForm.value.textarea : '';
    this.commonService.standardLayout.accuracy = compareTwoStrings(this.sampleText, enteredText);
    
    this.router.navigate(['new-layout'], { skipLocationChange: true });
  }
  
  onChangeAction(event: string): void {
    this.textarea = event;
  }

}
