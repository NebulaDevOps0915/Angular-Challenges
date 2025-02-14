import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-city-card',
  standalone: true,  // Important for standalone components
  imports:[CommonModule, CardComponent],
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent {
  cityName: string = 'Tokyo';
  population: number = 14000000;
}
