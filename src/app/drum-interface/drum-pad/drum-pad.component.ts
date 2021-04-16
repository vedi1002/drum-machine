import { Component, Input, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-drum-pad',
  templateUrl: './drum-pad.component.html',
  styleUrls: ['./drum-pad.component.css']
})
export class DrumPadComponent implements OnInit {
  @Input() keyName: string;
  @Input() soundUrl: string;
  @Input() power: boolean;
  constructor() {}

  ngOnInit(): void {
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key.toUpperCase() === this.keyName) {
      let element: HTMLElement | null = document.getElementById(this.keyName);
      element?.click();
    }
  }

  playDrum() {
    let audioElement = new Audio(this.soundUrl);
    if (this.power) {
      audioElement.play()
    }
  }
  
  
}
