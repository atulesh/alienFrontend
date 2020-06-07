import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphySeriveService } from './giphy-serive.service';
import { QuillModule } from 'ngx-quill'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['G'],
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          [{ 'header' : 2 }],
          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],                                 // remove formatting button
          ['link', 'image', 'video']          
        ]
      }
    })
  ],
  providers: [GiphySeriveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
