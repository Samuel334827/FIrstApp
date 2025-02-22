import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'



@Component({
  selector: 'app-home',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    
  username:string='Samuel';
  userAge:number=21;
  image:string="/images/angular.png"
  calcsalary():number{
    let days=5;
    let salary=20000;
    return (days*salary);
  }



}
