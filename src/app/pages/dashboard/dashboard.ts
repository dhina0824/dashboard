import { Component } from '@angular/core';
import { StatCards } from '../../dashboard-components/stat-cards/stat-cards';
import { LineChart } from '../../dashboard-components/line-chart/line-chart';
import { TrafficSources } from '../../dashboard-components/traffic-sources/traffic-sources';
import { CustomerReviews } from '../../dashboard-components/customer-reviews/customer-reviews';
import { SpendingChart } from '../../dashboard-components/spending-chart/spending-chart';
import { Tasks } from '../../dashboard-components/tasks/tasks';
import { Conversations } from '../../dashboard-components/conversations/conversations';
import { BestProducts } from '../../dashboard-components/best-products/best-products';
import { ProductsTable } from '../../dashboard-components/products-table/products-table';

@Component({
  selector: 'app-dashboard',

  imports: [
    StatCards,
    LineChart,
    TrafficSources,
    CustomerReviews,
    SpendingChart,
    Tasks,
    Conversations,
    BestProducts,
    ProductsTable
  ],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
