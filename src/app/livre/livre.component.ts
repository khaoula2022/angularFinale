import { LivresServiceService } from './../shared/livre-service.service';
import { Livres } from './../model/livres';
import { Component, OnInit , Input, Type} from '@angular/core';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})

export class LivreComponent implements OnInit {
isDisplay=true ;
  constructor(public livser:LivresServiceService ,private router : Router) { }
  @Input() livre: Livres;
  livs: Livres[] = [];

  ngOnInit(): void {

  /*  this.livser.getAll().subscribe((data: Livres[])=>{
      console.log(data);
      this.livs = data;
    })*/

  }

toggle()
{
  this.isDisplay= !this.isDisplay;
}


}






