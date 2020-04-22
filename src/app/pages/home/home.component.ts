import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';

@Component({
  entryComponents: [
    DashboardComponent
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor () { }

  ngOnInit () {
  }

}
