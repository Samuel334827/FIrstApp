
import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomeComponent,title:"home"},
    {path:"about",component:AboutComponent,title:"about"},
    {path:"Portfolio",component:PortfolioComponent,title:"Portfolio"},
    {path:"contact",component:ContactComponent,title:"contact"},
    {path:"**", component:NotfoundComponent,title:"Error"}
];
