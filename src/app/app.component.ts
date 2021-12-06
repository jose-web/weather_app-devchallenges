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
  type:string = 'C'

  setLocation(weather: any){
    this.week = weather.consolidated_weather
    this.location = weather.parent.title + ", " + weather.title
  }

  getImage(weather_state_name:string){
    return 'assets/'+ weather_state_name?.replace(" ","")+'.png'
  }

  changeType(type:string){
    for (const item of this.week) {
      if(type == 'F'){
        item.max_temp = item.max_temp * 1.8 + 32
        item.min_temp = item.min_temp * 1.8 + 32
        item.the_temp = item.the_temp * 1.8 + 32
      } else if(type == 'C'){
        item.max_temp = (item.max_temp - 32) / 1.8
        item.min_temp = (item.min_temp - 32) / 1.8
        item.the_temp = (item.the_temp - 32) / 1.8
      }
    }

    this.type=type    
  }

}
