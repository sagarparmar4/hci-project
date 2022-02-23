import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { compareTwoStrings } from 'string-similarity';

@Component({
  selector: 'app-new-layout',
  templateUrl: './new-layout.component.html',
  styleUrls: ['./new-layout.component.scss']
})
export class NewLayoutComponent implements OnInit {
  
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
  
  constructor(private commonService: CommonService, private router: Router) { }
  
  ngOnInit() {
    this.commonService.newLayout.startTime = new Date();
    this.checkLandscapeMode();
    this.orientation.addEventListener('change', () => {
      this.checkLandscapeMode();
    });
  }
  
  checkLandscapeMode(): void {
    this.isLandscapeMode = (this.orientation.type == 'landscape-primary' || this.orientation.type == 'landscape-secondary');
  }

  nextPage(newLayoutForm: NgForm): void {
    this.commonService.newLayout.endTime = new Date();

    let enteredText = newLayoutForm.value.textarea ? newLayoutForm.value.textarea : '';
    this.commonService.newLayout.accuracy = compareTwoStrings(this.sampleText, enteredText);

    let url = (this.commonService.groupNumber == 1) ? 'result-page' : 'standard-layout';
    this.router.navigate([url], { skipLocationChange: true });
  }

  onChangeAction(event: string): void {
    this.textarea = event;
  }
  
}
