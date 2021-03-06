import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HorecaComponent } from './horeca/horeca.component';
import { HorecaListComponent } from './horeca-list/horeca-list.component';
import { HorecaService } from './service/horeca-service.service';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPipe } from './horeca-list/search.pipe';
import { AgmCoreModule } from '@agm/core';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HorecaComponent,
    HorecaListComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatListModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBDeIsR0pwCDDlDMdy5wu1dsBILxl9qiKA'
    })
 
  ],
  providers: [HorecaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
