import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: ListadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
