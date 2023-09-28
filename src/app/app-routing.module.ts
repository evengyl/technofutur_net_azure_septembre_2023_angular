import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Demo/home/home.component';
import { BindingsComponent } from './Demo/bindings/bindings.component';
import { PipesComponent } from './Demo/pipes/pipes.component';
import { InputoutputComponent } from './Demo/inputoutput/inputoutput.component';
import { Exos1_1Component } from './Exos/exos1_1/exos1_1.component';
import { Exos1_2Component } from './Exos/exos1_2/exos1_2.component';
import { Exos3Component } from './Exos/exos3/exos3.component';
import { Exos2Component } from './Exos/exos2/exos2.component';
import { DirectivesNgComponent } from './Demo/directives-ng/directives-ng.component';
import { DirectiveCustomComponent } from './Demo/directive-custom/directive-custom.component';
import { Exos4Component } from './Exos/exos4/exos4.component';



const routes: Routes = [
  { path : "", component: HomeComponent },//Charge le composant
  { path : "bindings", component: BindingsComponent },
  { path : "pipes", component : PipesComponent},
  { path : "inputoutput", component : InputoutputComponent},
  { path : "directivesng", component: DirectivesNgComponent},
  { path : "directivecustom", component: DirectiveCustomComponent},


  
  { path : "exos1_1", component: Exos1_1Component },
  { path : "exos1_2", component : Exos1_2Component},
  { path : "exos_2", component : Exos2Component},
  { path : "exos_3", component: Exos3Component},
  { path : "exos_4", component: Exos4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
