import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products-table',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './products-table.html',
  styleUrl: './products-table.css',
})
export class ProductsTable {
  orders = [
    { name: 'ByeWind', date: 'Jun 24, 2022', amount: '$942.00', status: 'In Progress', color: 'purple' },
    { name: 'Natali Craig', date: 'Mar 10, 2022', amount: '$881.00', status: 'Complete', color: 'green' },
    { name: 'Drew Cano', date: 'Nov 10, 2022', amount: '$409.00', status: 'Pending', color: 'blue' },
    { name: 'Orlando Diggs', date: 'Dec 20, 2022', amount: '$953.00', status: 'Approved', color: 'orange' },
    { name: 'Andi Lane', date: 'Jul 25, 2022', amount: '$907.00', status: 'Rejected', color: 'gray' },

    { name: 'Courtney Henry', date: 'Jan 12, 2022', amount: '$799.00', status: 'Complete', color: 'green' },
    { name: 'Jerome Bell', date: 'Feb 18, 2022', amount: '$615.00', status: 'Pending', color: 'blue' },
    { name: 'Cody Fisher', date: 'Apr 02, 2022', amount: '$1,020.00', status: 'Approved', color: 'orange' },
    { name: 'Theresa Webb', date: 'May 30, 2022', amount: '$733.00', status: 'In Progress', color: 'purple' },
    { name: 'Brooklyn Simmons', date: 'Aug 11, 2022', amount: '$689.00', status: 'Complete', color: 'green' },

    { name: 'Savannah Nguyen', date: 'Sep 09, 2022', amount: '$845.00', status: 'Pending', color: 'blue' },
    { name: 'Wade Warren', date: 'Oct 14, 2022', amount: '$910.00', status: 'Approved', color: 'orange' },
    { name: 'Bessie Cooper', date: 'Nov 22, 2022', amount: '$502.00', status: 'Rejected', color: 'gray' },
    { name: 'Guy Hawkins', date: 'Dec 01, 2022', amount: '$1,140.00', status: 'Complete', color: 'green' },
    { name: 'Floyd Miles', date: 'Jan 05, 2023', amount: '$777.00', status: 'In Progress', color: 'purple' },

    { name: 'Ronald Richards', date: 'Feb 16, 2023', amount: '$860.00', status: 'Pending', color: 'blue' },
    { name: 'Darlene Robertson', date: 'Mar 08, 2023', amount: '$690.00', status: 'Approved', color: 'orange' },
    { name: 'Jacob Jones', date: 'Apr 19, 2023', amount: '$955.00', status: 'Complete', color: 'green' },
    { name: 'Kristin Watson', date: 'May 27, 2023', amount: '$810.00', status: 'Rejected', color: 'gray' },
    { name: 'Esther Howard', date: 'Jun 03, 2023', amount: '$1,050.00', status: 'In Progress', color: 'purple' }
  ];

}
