import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'persons',
    loadChildren: () => import('./pages/persons/persons.module').then( m => m.PersonsPageModule)
  },

  {
    path: 'assign',
    loadChildren: () => import('./pages/assign/assign.module').then( m => m.AssignPageModule)
  },
  {
    path: 'viewtasks',
    loadChildren: () => import('./pages/viewtasks/viewtasks.module').then( m => m.ViewtasksPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
