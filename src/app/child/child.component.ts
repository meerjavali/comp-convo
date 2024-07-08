import { EventEmitter, Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() data="";
@Output() newData = new EventEmitter<string>();

data1={'name':'meerjavali', 'age':'26', 'dob':new Date().toLocaleDateString()};

handleEvent(){
  this.ser.setData(this.data1);
  this.newData.emit("cultfit");
  

}

constructor(private ser:SharedService){}

}
