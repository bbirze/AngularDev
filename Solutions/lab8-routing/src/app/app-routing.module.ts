import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  {path: '', component: HomeComponent},             // default rout
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'detail/:id', component: ProductDetailComponent },
  {path: '**', redirectTo: '/home' }               // wildcard error route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
