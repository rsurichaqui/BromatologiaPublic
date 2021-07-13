import { FormsModule } from '@angular/forms';
import { PersonaResult } from './../models/persona.model';
import { ApiService } from './../services/api.service';
import { Component } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];
  model = new Hero(18, '', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  result!: PersonaResult;

  constructor(private apis: ApiService){}

  onSubmit() { 
    this.submitted = true;
    this.ngConsulta();
  }

  ngRetorno(){
    this.result = new PersonaResult;
    this.submitted = false;
  }
  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  // Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // DNI
  }

  async ngConsulta(){
    this.result = await this.apis.getPersona(this.model.name).toPromise()
  }

}
