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

  constructor(private formBuilder: FormBuilder) {
    this.locationMenu.emit({hola:"saludo"})
    this.sendLocation(766273)
  }

  onSubmit(){
    let search = this.searchForm.value.search
    
    fetch('https://www.metaweather.com/api/location/search/?query='+search)
    .then(json =>json.json())
    .then(response => this.location = response)
  }

  sendLocation(woeid:number){    
    fetch('https://www.metaweather.com/api/location/'+woeid)
    .then(json =>json.json())
    .then(response => this.locationMenu.emit(response))
  }

}