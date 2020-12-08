import { LivresServiceService } from './../shared/livre-service.service';
import { Livres } from './../model/livres';
import { Component, OnInit , Input, Type} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})

export class LivreComponent implements OnInit {
isDisplay=true ;
livs : Livres[];
  constructor( private router : Router , private service : LivresServiceService) { }

  ngOnInit(): void {

    this.service.getLivres().subscribe(
      (data: Livres[]) => this.livs = data
    );


  }

toggle()
{
  this.isDisplay= !this.isDisplay;
}
create(){
  //do your any operations
  this.router.navigate(['create']);
  //also you can pass like this,
  // this.router.navigateByURL(['path']);
  }

  getColor(a : Livres)
  { if (a.quantity ===0)
  return 'yellow' ;



  }


}






