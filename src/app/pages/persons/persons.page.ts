import { Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PersonDetailComponent } from '../components/person-detail/person-detail.component';
import { Person } from '../models/person.module'
import { PersonsService } from '../services/persons.service';



@Component({
  selector: 'app-persons',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.scss'],
})



export class PersonsPage implements OnInit {

  public persons : Person []; // Definir la clase personas en la clase Personpage

  constructor(private datos:PersonsService, private modal:ModalController) { 

    

  }

  ngOnInit() {
  }

  
  getPeople(): Person[] {
    return this.datos.getPeople();
  }

  async presentPersonForm(person:Person){
    const modal = await this.modal.create({
      component:PersonDetailComponent,
      componentProps:{
        person:person
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{

    });
  }
  
  onNewPerson(){
    this.presentPersonForm(null);  
  }

  onEditPerson(person){
    this.presentPersonForm(person);
  }

  onDeletePerson(person){
    this.datos.deletePersonById(person.id);
  }






}

