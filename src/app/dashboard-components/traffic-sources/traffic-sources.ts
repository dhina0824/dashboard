import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic-sources',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-sources.html',
  styleUrl: './traffic-sources.css',
})
export class TrafficSources {


  sources = [
    { name: 'Google', black: 22, grey1: 14, grey2: 18 },
    { name: 'YouTube', black: 32, grey1: 24, grey2: 28 },
    { name: 'Instagram', black: 26, grey1: 18, grey2: 22 },
    { name: 'Pinterest', black: 38, grey1: 30, grey2: 34 },
    { name: 'Facebook', black: 18, grey1: 12, grey2: 16 },
    { name: 'Twitter', black: 28, grey1: 20, grey2: 24 }
  ];

}
