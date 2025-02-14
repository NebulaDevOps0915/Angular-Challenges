import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// import { CardComponent } from './components/card/card.component';
import { CityCardComponent } from './components/city-card/city-card.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    CommonModule,
    // CardComponent,
    CityCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
