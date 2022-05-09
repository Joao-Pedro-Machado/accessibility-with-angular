import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtonGroupComponent } from './yes-no-button-group.component';
import { KeyboardManagerModule } from 'src/app/shared/directives/keyboard-manager/keyborad-manager.module';
import { DisableControlModule } from 'src/app/shared/directives/disable-control/disable-control.module';



@NgModule({
  declarations: [YesNoButtonGroupComponent],
  imports: [
    CommonModule,
    KeyboardManagerModule,
    DisableControlModule
  ],
  exports: [
    YesNoButtonGroupComponent
  ]
})
export class YesNoButtonGroupModule { }
