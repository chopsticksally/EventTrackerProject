import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoadtripStopComponent } from './roadtrip-stop/roadtrip-stop.component';
import { RoadtripStopService } from './roadtrip-stop.service';

@NgModule({
  declarations: [
    AppComponent,
    RoadtripStopComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [RoadtripStopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
