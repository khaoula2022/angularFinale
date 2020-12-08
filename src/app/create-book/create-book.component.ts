import { LivresServiceService } from './../shared/livre-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Livres } from '../model/livres';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent implements OnInit {
  //  CreateBookForm: FormGroup;
  constructor(
    private http: HttpClient,
    private service: LivresServiceService
  ) {}
  CreateBookForm: FormGroup;
  ListLivres: Livres[];
  SelectedFile = null;

  Livre: Livres;


  ngOnInit(): void {
    this.Livre = new Livres();
    this.service
      .getLivres()
      .subscribe((data: Livres[]) => (this.ListLivres = data));

    this.CreateBookForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      author: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      synopsis: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(2),
        Validators.min(1),

      ]),
      quantity: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.min(1),

      ]),
    });
  }

  save() {
    this.service.AddBook(this.Livre).subscribe(
      () => this.ListLivres = [this.Livre, ...this.ListLivres]
    );
   }

  onFileselected(event)
 {
this.SelectedFile=event.target.files[0]; }




delete(title)
{this.service.DeleteBook(title).subscribe(
  () => this.ListLivres = this.ListLivres.filter(livre => livre.title != title)
);
}
}
