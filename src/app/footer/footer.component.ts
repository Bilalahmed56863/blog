import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, FormBuilder} from '@angular/forms'
// ,Output,EventEmitter 
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
// @Output() parantComponent: EventEmitter<any>= new EventEmitter()
//home=new home{
  constructor(private fb:FormBuilder) { }

  
 loginForm= this.fb.group({
     user:[''],
     email:[''],
    //  pasword1: [''],
     pasword: this.fb.array([
      this.fb.control(''),

    ])
   })
   loginSubmit(){
    console.warn(this.loginForm.value); //Reactive form
   }
   get pasword() {
    return this.loginForm.get('pasword') as FormArray;
  }
  addAlias() {
    this.pasword.push(this.fb.control(''));
  }

   

   ngOnInit(){
     
   }



























  // send data child to parent 
  // sendData(){
  //   let item="hello bilal"
  //   this.parantComponent.emit(item)
  // }
}
