import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OuterContainerComponent } from './outer-container/outer-container.component';
import { DisplayComponent } from './display/display.component';
import { DrumPadComponent } from './drum-pad/drum-pad.component';



@NgModule({
  declarations: [OuterContainerComponent, DisplayComponent, DrumPadComponent],
  imports: [
    CommonModule
  ]
})
export class DrumInterfaceModule { }
