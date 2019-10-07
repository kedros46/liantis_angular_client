import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorecaListComponent } from './horeca-list/horeca-list.component';
 
const routes: Routes = [
  { path: 'horeca', component: HorecaListComponent },
 
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }