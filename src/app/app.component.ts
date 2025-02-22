import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./Home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, AboutComponent, ContactComponent, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp';
}

