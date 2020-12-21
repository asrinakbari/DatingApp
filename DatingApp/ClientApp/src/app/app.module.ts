import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { error } from 'protractor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  users: any;

  constructor(private http: HttpClient) {
  }
  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
     this.http.get('https://localhost:44364/api/Users').subscribe(response => {
        this.users = response;
      }, error => {
        console.log(error);
      })
  }

}
