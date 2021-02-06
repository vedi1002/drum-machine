import { Component, Input, OnInit } from '@angular/core';
import { sounds } from './drum-sounds.constants'

@Component({
  selector: 'app-drum-pad',
  templateUrl: './drum-pad.component.html',
  styleUrls: ['./drum-pad.component.css']
})
export class DrumPadComponent implements OnInit {
  @Input() keyName: string;
  soundUrl: string;
  constructor() {}

  ngOnInit(): void {
    this.soundUrl = sounds[this.keyName];
  }

  playDrum() {
    let audioElement = new Audio(this.soundUrl);
    audioElement.play()
  }
  
  
}
