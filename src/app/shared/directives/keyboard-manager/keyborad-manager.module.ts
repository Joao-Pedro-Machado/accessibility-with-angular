import { KeyboardManagerDirective } from './keyboard-manager.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KeyboardMangedItemDirective } from 'src/app/shared/directives/keyboard-manager/keyboard-manged-item.directive';

@NgModule({
  declarations: [
    KeyboardManagerDirective,
    KeyboardMangedItemDirective
  ],
  imports: [CommonModule],
  exports: [KeyboardManagerDirective]
})
export class KeyboardManagerModule {}
