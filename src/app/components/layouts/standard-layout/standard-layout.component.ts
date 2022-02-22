import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { compareTwoStrings } from 'string-similarity';
import Keyboard from "simple-keyboard";


@Component({
  selector: 'app-standard-layout',
  templateUrl: './standard-layout.component.html',
  styleUrls: ['./standard-layout.component.scss']
})
export class StandardLayoutComponent implements OnInit {
  
  isLandscapeMode: boolean;
  orientation: ScreenOrientation = screen.orientation;
  textarea: string;
  keyboard: Keyboard;
  keyboardOptions: Object = {
    onChange: (input) => this.textarea = input,
    onKeyPress: (input: string) => this.onKeyPress(input),
    newLineOnEnter: true,
    layout: {
      default: [
        "` 1 2 3 4 5 6 7 8 9 0 - =",
        "q w e r t y u i o p [ ] \\",
        "a s d f g h j k l ; '",
        "{shift} z x c v b n m , . / {backspace}",
        "{numbers} {space} {enter}"
      ],
      shift: [
        "~ ! @ # $ % ^ & * ( ) _ +",
        "Q W E R T Y U I O P { } |",
        "A S D F G H J K L : \"",
        "{shift} Z X C V B N M , . / {backspace}",
        "{numbers} {space} {enter}"
      ],
      numbers: [
        "1 2 3 4 5 6 7 8 9 0",
        "@ # £ _ & - + ( ) /",
        "{sym2} * \" ' : ; ! ? {backspace}",
        "{abc} {space} {enter}"
      ]
    },
    display: {
      "{numbers}": "123",
      "{enter}": "←",
      "{escape}": "ESC",
      "{tab}": "TAB",
      "{backspace}": "⌫",
      "{capslock}": "CAPS",
      "{shift}": "⇧",
      "{controlleft}": "CTRL",
      "{controlright}": "CTRL",
      "{altleft}": "ALT",
      "{altright}": "ALT",
      "{metaleft}": "CMD",
      "{metaright}": "CMD",
      "{abc}": "ABC",
      "{space}": " "
    }
  }
  
  sampleText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
  "Mauris fermentum venenatis quam vitae tempor. " +
  "Nam dictum risus ut scelerisque tempus. " +
  "Aliquam iaculis turpis ac lobortis iaculis. " +
  "Nulla gravida sem non felis egestas sodales. " +
  "In non velit faucibus, mollis ante in, elementum orci. " +
  "Ut ac convallis enim. " +
  "Suspendisse eget eleifend est. " +
  "Vivamus elementum, lectus eu placerat ullamcorper, lectus justo hendrerit neque, id pharetra massa urna id risus.";
  
  @ViewChild("standardLayoutForm", {static: false}) standardLayoutForm: NgForm;
  
  constructor(private commonService: CommonService, private router: Router) { }
  
  ngOnInit() {
    this.commonService.standardLayout.startTime = new Date();
    this.checkLandscapeMode();
    this.orientation.addEventListener('change', () => {
      this.checkLandscapeMode();
    });
    
    this.keyboard = new Keyboard(this.keyboardOptions);
  }
  
  checkLandscapeMode(): void {
    this.isLandscapeMode = (this.orientation.type == "landscape-primary" || this.orientation.type == "landscape-secondary");
  }
  
  nextLayout(standardLayoutForm: NgForm): void {
    this.commonService.standardLayout.endTime = new Date();
    this.commonService.standardLayout.accuracy = compareTwoStrings(this.sampleText, standardLayoutForm.value.textarea);
    this.router.navigate(['new-layout'], { skipLocationChange: true });
  }
  
  onKeyPress(button: string): void {
    if (button === "{shift}" || button === "{lock}") {
      let shiftToggle = (this.keyboard.options.layoutName === "default") ? "shift" : "default";
      this.keyboard.setOptions({ layoutName: shiftToggle });
    }
  };
  
}
