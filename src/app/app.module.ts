import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './Demo/home/home.component';
import { BindingsComponent } from './Demo/bindings/bindings.component';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesComponent } from './Demo/pipes/pipes.component';
import { EurtobtcPipe } from './shared/pipes/eurtobtc.pipe';
import { TotimePipe } from './shared/pipes/totime.pipe';
import { InputoutputComponent } from './Demo/inputoutput/inputoutput.component';
import { ChildrenComponent } from './Demo/inputoutput/children/children.component';
import { Exos1_1Component } from './Exos/exos1_1/exos1_1.component';
import { Exos1_2Component } from './Exos/exos1_2/exos1_2.component';
import { Exos3Component } from './Exos/exos3/exos3.component';
import { Exos2Component } from './Exos/exos2/exos2.component';
import { DirectivesNgComponent } from './Demo/directives-ng/directives-ng.component';
import { DirectiveCustomComponent } from './Demo/directive-custom/directive-custom.component';
import { ZoomitDirective } from './shared/directives/zoomit.directive';
import { ZoomiteventDirective } from './shared/directives/zoomitevent.directive';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BindingsComponent,
    Exos1_1Component,
    Exos1_2Component,
    PipesComponent,
    EurtobtcPipe,
    TotimePipe,
    InputoutputComponent,
    ChildrenComponent,
    Exos3Component,
    Exos2Component,
    DirectivesNgComponent,
    DirectiveCustomComponent,
    ZoomitDirective,
    ZoomiteventDirective


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
