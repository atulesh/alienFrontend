import { Component, OnInit } from '@angular/core';
import { GiphySeriveService } from './giphy-serive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  giphyResult: any;
  giphyname: any;
  constructor(private GiphySeriveService: GiphySeriveService){

  }
  
  searchGiphy(query) {
    this.GiphySeriveService.giphyearch(query).then((response) => {
      console.log(response.data);
      this.giphyResult = response.data;
    },(error) => {
      alert("Error: " + error.statusText)
    })
  }
  loadMoreGiphy(query){
    this.GiphySeriveService.giphyearchMore(query).then((response) => {
      console.log(response.data);
      this.giphyResult = response.data;
    },(error) => {
      alert("Error: " + error.statusText)
    })
  }
  title = 'fron-end-task';
  
}
