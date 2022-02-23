import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import Keyboard from 'simple-keyboard';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit, OnDestroy {

  @Output() onChangeAction = new EventEmitter<string>();

  keyboard: Keyboard;
  keyboardOptions: Object = {
    onChange: (input: string) => this.onChangeAction.emit(input),
    onKeyPress: (input: string) => this.onKeyPressAction(input),
    newLineOnEnter: true,
    layout: {
      default: [
        '` 1 2 3 4 5 6 7 8 9 0 - =',
        'q w e r t y u i o p [ ] \\',
        'a s d f g h j k l ; \'',
        '{shift} z x c v b n m , . / {backspace}',
        '{numbers} {space} {enter}'
      ],
      shift: [
        '~ ! @ # $ % ^ & * ( ) _ +',
        'Q W E R T Y U I O P { } |',
        'A S D F G H J K L : \'',
        '{shift} Z X C V B N M , . / {backspace}',
        '{numbers} {space} {enter}'
      ],
      numbers: [
        '1 2 3 4 5 6 7 8 9 0',
        '@ # £ _ & - + ( ) /',
        '{sym2} * " \' : ; ! ? {backspace}',
        '{abc} {space} {enter}'
      ]
    },
    display: {
      '{numbers}': '123',
      '{enter}': '←',
      '{escape}': 'ESC',
      '{tab}': 'TAB',
      '{backspace}': '⌫',
      '{capslock}': 'CAPS',
      '{shift}': '⇧',
      '{controlleft}': 'CTRL',
      '{controlright}': 'CTRL',
      '{altleft}': 'ALT',
      '{altright}': 'ALT',
      '{metaleft}': 'CMD',
      '{metaright}': 'CMD',
      '{abc}': 'ABC',
      '{space}': ' '
    }
  }

  constructor() { }

  ngOnInit() {
    this.keyboard = new Keyboard(this.keyboardOptions);
  }

  ngOnDestroy(): void {
    this.keyboard.destroy();    
  }

  onKeyPressAction(button: string): void {
    if (button === '{shift}' || button === '{lock}') {
      let shiftToggle = (this.keyboard.options.layoutName === 'default') ? 'shift' : 'default';
      this.keyboard.setOptions({ layoutName: shiftToggle });
    }
  }

}
