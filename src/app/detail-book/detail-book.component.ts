import { Observable } from 'rxjs';
import { Livres } from './../model/livres';
import { LivresServiceService } from './../shared/livre-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {

  constructor(private serviceRoute: ActivatedRoute, private service: LivresServiceService) { }
  livres:any;
  livre: Livres = new Livres();
  id :number ;
  ngOnInit(): void {
    this.id = this.serviceRoute.snapshot.params.id;

    this.service.getLivres().subscribe(
      (data: Livres[]) => this.livres = data
    );
  }

}
