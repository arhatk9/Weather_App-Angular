import { Component } from '@angular/core';
import { Weather } from '../Models/Weather';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})


export class WeatherDataComponent {
  
  weather:Weather;
  
  constructor() {
    this.weather = new Weather();
    this.weather.desc = "Sunny";
    this.weather.min_temp = 20;
    this.weather.max_temp = 30;
    this.weather.humidity = 50;
    this.weather.pressure = 1000;
   }

  ngOnInit(): void {
  }

}
