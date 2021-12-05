import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'Menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})

export class Menu {

  @Output()
  locationMenu = new EventEmitter<any>()

  searchForm:FormGroup = this.formBuilder.group({
    search: ''
  })

  location:any = []
  gpsDetected = 'inActive'

  constructor(private formBuilder: FormBuilder) {
    this.sendLocation(766273) // Madrid by default
  }

  onSubmit(){
    let search = this.searchForm.value.search
    
    fetch('https://www.metaweather.com/api/location/search/?query='+search)
    .then(json =>json.json())
    .then(response => {
      this.gpsDetected = 'inActive'
      this.location = response
    })
  }

  sendLocation(woeid:number){    
    fetch('https://www.metaweather.com/api/location/'+woeid)
    .then(json =>json.json())
    .then(response => {
      this.locationMenu.emit(response)})
  }

  detectLocation(){
  
    let accept = (ubicacion:any) => {

      fetch('https://www.metaweather.com/api/location/search/?lattlong='+ubicacion.coords.latitude+","+ubicacion.coords.longitude)
        .then(json =>json.json())
        .then(response => {
          this.gpsDetected = 'active'
          this.sendLocation(response[0].woeid)
        })
    }
    
    let error = (err:any) => {
      alert("Accept location please")
    }
  
    let options = {
      enableHighAccuracy: true, // High accuracy
      maximumAge: 0, // We don't want cache
      timeout: 2000 // timeout 2 seconds
    };

    navigator.geolocation.getCurrentPosition(accept, error, options);

  }

}