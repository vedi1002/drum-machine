import { Component, OnInit } from '@angular/core';
import { bankOne, bankTwo } from './drum-sounds.constants'

@Component({
  selector: 'app-outer-container',
  templateUrl: './outer-container.component.html',
  styleUrls: ['./outer-container.component.css']
})
export class OuterContainerComponent implements OnInit {
  bank = bankOne;
  power: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onChange($event: any) {
    this.bank = $event.value === "bank1" ? bankOne : bankTwo;
  }

  onTogglePower($event: any) {
    this.power = $event.checked;
  }
}
