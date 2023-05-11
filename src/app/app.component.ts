import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  city: string;
  status:boolean; 
  constructor() {
    this.city = '';
    this.status = false;
  }


  onCityEvent(data: string) {
    this.city = data;
    this.status = true;
  }


}
