import { Component } from '@angular/core';
import { Person } from '../models/person.module'
import { PersonsService } from '../services/persons.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-persons',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.scss'],
})



export class PersonsPage {

  public persons : Person []; // Definir la clase personas en la clase Personpage

  constructor(private datos : PersonsService, private activatedRoute : ActivatedRoute) { 

    

  }

  ngOnInit() {
  }

  
  getPeople(): Person[] {
    return this.datos.getPeople();
  }
}

