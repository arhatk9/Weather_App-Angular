import { Component, Input } from '@angular/core';
import { Weather } from '../Models/Weather';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})


export class WeatherDataComponent {

  @Input() city: string;
  weatherData!: Weather;
  weather: any;

  constructor(private http: HttpClient) {
    this.city = '';
    this.weatherData = new Weather();
    
  }

  ngOnInit(): void {
    console.log("Hello" + this.city)
    this.http.get<any>(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=d80bbbc532dbf0ad01e49e049438c4b6`
    ).subscribe(
      data => {
        this.weather = data;

        this.weatherData.city = this.weather.name;
        this.weatherData.desc = this.weather.weather[0].description;
        this.weatherData.min_temp = this.weather.main.temp_min;
        this.weatherData.max_temp = this.weather.main.temp_max;
        this.weatherData.humidity = this.weather.main.humidity;
        this.weatherData.pressure = this.weather.main.pressure;

        console.log(this.weather);
      },
      error => {
        console.error(error);
      }
    );
  }


}
