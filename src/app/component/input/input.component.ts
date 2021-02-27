import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  namedone:String = "";
  bx:any;
  boxtodo:any = [];

  add(a):boolean{
    a = a.trim();
    if(a.length == 0){this.namedone = "";return false;}
    this.boxtodo.push(a);
    this.namedone = "";
  }

  del(){
    this.boxtodo = [];
  }

  idn:any;
  
  // @Output() oout : EventEmitter<string> = new EventEmitter();
  show:boolean = true;
  dex(b){    
    this.show = false;
    // alert(typeof(this.boxtodo.indexOf(b)));
    this.idn = this.boxtodo.indexOf(b);
    delete this.boxtodo[this.idn];
    setTimeout(() => {
      this.show = true;
    });
    // this.oout.emit();
  }


  chk(a):boolean{
    if(a.length != 0){
      return true;
    } else {
      return false;
    }
  }

  constructor() { }
  ngOnInit(): void {
  }

}
