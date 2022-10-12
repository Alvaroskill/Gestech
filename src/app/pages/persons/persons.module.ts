import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonsPageRoutingModule } from './persons-routing.module';

import { PersonsPage } from './persons.page';
import { PeopleComponentModule } from '../components/person/person.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonsPageRoutingModule,
    PeopleComponentModule
    
    
  ],
  declarations: [PersonsPage]
})
export class PersonsPageModule {}