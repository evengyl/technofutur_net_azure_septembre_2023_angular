import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Demo/home/home.component';
import { BindingsComponent } from './Demo/bindings/bindings.component';
import { Exos1Component } from './Demo/Exos/exos1/exos1.component';
import { Exos2Component } from './Demo/Exos/exos2/exos2.component';
import { TutoComponent } from './Demo/tuto/tuto.component';
import { Shoppinglistv1Component } from './Demo/correctif/shoppinglistv1/shoppinglistv1.component';
import { PipesComponent } from './Demo/pipes/pipes.component';
import { ChronopipeComponent } from './Demo/correctif/chronopipe/chronopipe.component';
import { InputoutputComponent } from './Demo/inputoutput/inputoutput.component';
const routes: Routes = [
  { path: "", component: HomeComponent },//Charge le composant
  { path: "Bindings", component: BindingsComponent },
  { path: "Exos1", component: Exos1Component },
  { path : "Exos2", component: Exos2Component},
  {path : "Tuto", component: TutoComponent},
  {path : "shoppingv1", component : Shoppinglistv1Component},
  {path : 'pipes', component : PipesComponent},
  {path : 'chronopipe', component : ChronopipeComponent},
  {path : 'inputoutput', component : InputoutputComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
