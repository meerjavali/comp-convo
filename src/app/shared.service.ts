import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private helpingVariable;
  constructor() { }

  getData(){
    return this.helpingVariable;
  }

  setData(data){

    console.log("are we coming here");
    this.helpingVariable= data;
  }
}
