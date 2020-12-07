import { ContenuComponent } from './contenu/contenu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LivreComponent } from './livre/livre.component';
import { ListlivresComponent } from './listlivres/listlivres.component';
import { CreateBookComponent } from './create-book/create-book.component';


const routes: Routes = [

  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'contenu', component: ContenuComponent  },
  {path: 'livre', component: LivreComponent  },
  {path: 'list/:type', component: ListlivresComponent},
  {path: 'create', component: CreateBookComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
