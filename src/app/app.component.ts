import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'covid19sa-frotnend';

  constructor () {

  }

  ngOnInit () {
    console.log('On init!')
  }

}
