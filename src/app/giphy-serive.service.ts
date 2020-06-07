import { Injectable } from '@angular/core';
import { GiphySearch } from './giphy-search';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphySeriveService {

  constructor(private http: HttpClient) { }
  giphyearch = (query: string): Promise<GiphySearch> => {
    let promise = new Promise<GiphySearch>((resolve, reject) => {
        this.http.get('http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=1Oqfh3ryQON92qjCHhSwlMUPupmiT4MH&limit=18' )
        .toPromise()
        .then((response) => {
          resolve(response as GiphySearch)
        },(error) => {
          reject(error);
        })
    })
    return promise;
  }
  giphyearchMore = (query: string): Promise<GiphySearch> => {
    let promise = new Promise<GiphySearch>((resolve, reject) => {
        this.http.get('http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=1Oqfh3ryQON92qjCHhSwlMUPupmiT4MH&limit=' )
        .toPromise()
        .then((response) => {
          resolve(response as GiphySearch)
        },(error) => {
          reject(error);
        })
    })
    return promise;
  }
}