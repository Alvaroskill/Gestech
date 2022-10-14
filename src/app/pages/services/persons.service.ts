import { Injectable } from '@angular/core';
import { Person } from '../models/person.module';


@Injectable({
  providedIn: 'root'
})


export class PersonsService {

  public person: Person[] = [
    {
      id: 0,
      name: 'Pepe',
      surname: 'Viyuela',
      age: 23,
      image: ''
    },
    {
      id: 1,
      name: 'Samuel',
      surname: 'Rodríguez',
      age: 73,
      image: ''
    },
    {
      id: 2,
      name: 'Juan',
      surname: 'Bustos',
      age: 45,
      image: ''
    },
    {
      id: 3,
      name: 'Gema',
      surname: 'Benitez',
      age: 20,
      image: ''
    },
    {
      id: 4,
      name: 'Sofia',
      surname: 'Aguilera',
      age: 36,
      image: ''
    }
  ]
  
  constructor() { }

  public getPeople(): Person[] {
    return this.person;
  }

  public getPeopleById(id: number): Person {
    return this.person[id];
  }


}
