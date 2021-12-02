import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'WeatherApp';
  
  week:any = []
  location:string = ''

  setLocation(weather: any){
    this.week = weather.consolidated_weather
    this.location = weather.parent.title + ", " + weather.title
  }

  getImage(weather_state_name:string){
    return 'assets/'+ weather_state_name?.replace(" ","")+'.png'
  }

}
