import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  CreateBookForm: FormGroup;
  constructor( private http : HttpClient) { }

SelectedFile =null ;


    ngOnInit(): void {
    this.CreateBookForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      author: new FormControl('', [Validators.required, Validators.minLength(3)]),
      synopsis: new FormControl('', [Validators.required, Validators.minLength(20)]),
      price: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2) , Validators.min(1),
        Validators.pattern('[1-9]')]),
      quantity: new FormControl('', [Validators.required, Validators.minLength(1),Validators.min(1),
        Validators.pattern('[1-9]')]),


    });
  }


  submit(){
    alert('Book Created) ' + JSON.stringify(this.CreateBookForm.value));
  }

 /* onFileselected(event)
 {
this.SelectedFile=event.target.files[0]; }

 */


}
