import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conv-componts';
  data1="";
  data2=[];
  flag=true;

  onEvent(event){
    console.log("the data came from", event);
    this.data1 = event;
    this.data2.push(this.ser.getData());

     this.data2.push(this.ser.getData());  // same data reterived
     console.log(this.data2);
     this.flag=false;
    
  }

  constructor(private ser:SharedService){}// we are injecting the dependency as a constructor paramater to implement D.I
}
