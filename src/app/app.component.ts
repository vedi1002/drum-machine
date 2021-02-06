import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drum-machine';
  keys = ['Q', 'W', 'E', 'A', 'S', 'D'];
}
