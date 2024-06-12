// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';

// import { WeatherData } from '../models/weather.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class WeatherDataService {
//   constructor(private http: HttpClient) {}

//   fetchWeatherData(cityName: string): Observable<WeatherData> {
//     const headers = new HttpHeaders()
//       .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue)
//       .set(environment.XRapidAPIHostName, environment.XRapidAPIHostValue);

//     const params = new HttpParams()
//       .set('q', cityName)
//       .set('units', 'metric')
//       .set('mode', 'json');

//     return this.http.get<WeatherData>(environment.XRapidAPIBaseUrl, { headers, params });
//   }
// }
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  constructor(private http: HttpClient) {}

  fetchWeatherData(city: string): Observable<any> {
    const headers = new HttpHeaders()
      .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue)
      .set(environment.XRapidAPIHostName, environment.XRapidAPIHostValue);

    const options = { headers };

    return this.http.get<WeatherData>(
      `https://open-weather13.p.rapidapi.com/city/${city}/EN`,
      options
    );
  }
}
