import { Component, OnInit } from '@angular/core';

import { WeatherData } from './models/weather.model';
import { WeatherDataService } from './services/weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';

  constructor(private weatherDataService: WeatherDataService) {}

  weatherData?: WeatherData;
  cityName: string = 'Indore';
  errorMessage: string = '';

  ngOnInit(): void {
    this.getweatherData(this.cityName);
    this.cityName = '';
  }
  onSubmit() {
    this.getweatherData(this.cityName);
    this.cityName = '';
  }
  clear() {
    this.errorMessage = '';
  }

  getweatherData(cityName: string) {
    this.weatherDataService.fetchWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
      },
      error: (error) => {
        console.log(error.error);

        this.errorMessage = error.error.message;
        console.log(error.error.message);
      },
    });
  }
}
