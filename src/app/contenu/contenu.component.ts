import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenu',
  templateUrl: './contenu.component.html',
  styleUrls: ['./contenu.component.css']
})
export class ContenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigate(){
    //do your any operations
    this.router.navigate(['livre']);
    //also you can pass like this,
    // this.router.navigateByURL(['path']);
    }
}
