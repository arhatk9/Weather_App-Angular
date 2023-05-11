import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../Models/Weather';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent {

  city: string;
  weatherData: any;
  weather: Weather;

  constructor(private http: HttpClient) {
    this.city = '';
    this.weatherData = null;
    this.weather = new Weather();
  }

  getData() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=d80bbbc532dbf0ad01e49e049438c4b6`;

    this.http.get(url)
      .subscribe(data => {
        this.weatherData = data;

        this.weather.city = this.weatherData.name;
        this.weather.desc = this.weatherData.weather[0].description;
        this.weather.min_temp = this.weatherData.main.temp_min;
        this.weather.max_temp = this.weatherData.main.temp_max;
        this.weather.humidity = this.weatherData.main.humidity;
        this.weather.pressure = this.weatherData.main.pressure;
        
        
      });


  }



}
