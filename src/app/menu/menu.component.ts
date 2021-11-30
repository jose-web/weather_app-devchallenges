import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})

export class Menu {
  searchForm:FormGroup = this.formBuilder.group({
    search: ''
  });

  location:any = []

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(){
    let search = this.searchForm.value.search
    
    fetch('https://www.metaweather.com/api/location/search/?query='+search)
    .then(json =>json.json())
    .then(response => this.location = response)
  }
}
