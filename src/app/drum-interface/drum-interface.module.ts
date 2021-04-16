import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OuterContainerComponent } from './outer-container/outer-container.component';
import { DisplayComponent } from './display/display.component';
import { DrumPadComponent } from './drum-pad/drum-pad.component';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
  declarations: [OuterContainerComponent, DisplayComponent, DrumPadComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatButtonToggleModule
  ]
})
export class DrumInterfaceModule { }
