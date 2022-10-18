import { ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PersonComponent } from './person.component';

@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule, RouterModule, ReactiveFormsModule],
    declarations: [PersonComponent],
    exports: [PersonComponent]
})
export class PersonComponentModule {

    

}