import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stat-cards',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './stat-cards.html',
  styleUrl: './stat-cards.css',
})
export class StatCards {
  stats = [
    { type: 'orders', icon: 'ph ph-shopping-cart', bg: '#e8edff', growth: '+22%', value: '155k', label: 'Total Orders', period: 'Last 4 Month' },
    { type: 'sales', icon: 'ph ph-chart-bar', bg: '#dcfce7', growth: '+38%', value: '$13.4k', label: 'Total Sales', period: 'Last Six Month' },
    {
      type: 'profit',
      bg: '',
      growth: '-18%',
      value: '$8.5k',
      label: 'Total Profit',
      period: ''
    },
    {
      type: 'growth',
      bg: '',
      growth: '+16%',
      value: '$27.9k',
      label: 'Total Growth',
      period: ''
    }

  ];


}
