import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'editor',
    // loadChildren: ()=> import('./editor/editor.component').then(c => c.EditorComponent)
    component:EditorComponent
  },
  {
    path:'editor/:id',
    component:EditorComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
