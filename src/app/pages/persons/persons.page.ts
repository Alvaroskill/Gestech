import { Component, OnInit} from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PersonDetailComponent } from '../components/person-detail/person-detail.component';
import { Person } from '../models/person.model'
import { PersonsService } from '../services/persons.service';



@Component({
  selector: 'app-persons',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.scss'],
})



export class PersonsPage implements OnInit {

  public persons : Person []; // Definir la clase personas en la clase Personpage

  constructor(private datos:PersonsService, private modal:ModalController, private alert:AlertController) { 

    

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
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.datos.addPerson(result.data.person);
            break;
          case 'Edit':
            this.datos.updatePerson(result.data.person);
            break;
          default:
        }
      }
    });
  }
  
  onNewPerson(){
    this.presentPersonForm(null);  
  }


  onDeletePerson(person){
    this.datos.deletePersonById(person.id);
  }

  onEditPerson(person){
    this.presentPersonForm(person);
  }




}

