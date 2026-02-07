import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Tooltip,
  Legend
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './line-chart.html',
  styleUrls: ['./line-chart.css']
})
export class LineChart {
  activeTab: 'users' | 'projects' | 'status' = 'users';

  setTab(tab: 'users' | 'projects' | 'status') {
    this.activeTab = tab;

    if (tab === 'users') {
      this.loadUsersChart();
    }

    if (tab === 'projects') {
      this.loadProjectsChart();
    }

    if (tab === 'status') {
      this.loadStatusChart();
    }
  }
  loadUsersChart() {
   
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let gradient: CanvasGradient | string = 'rgba(17,24,39,0.04)';
    if (ctx) {
      const g = ctx.createLinearGradient(0, 0, 0, 300);
      g.addColorStop(0, 'rgba(17,24,39,0.08)');
      g.addColorStop(0.6, 'rgba(17,24,39,0.04)');
      g.addColorStop(1, 'rgba(17,24,39,0.00)');
      gradient = g;
    }


    this.lineChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'This year',
          data: [9, 1, 10, 22, 26, 18, 20],
          borderColor: '#111827',
          borderWidth: 3,
          borderCapStyle: 'round',
          borderJoinStyle: 'round',
          tension: 0.45,
          pointRadius: 0,
          fill: true,
          backgroundColor: gradient,
          cubicInterpolationMode: 'monotone'
        },
        {
          label: 'Last year',
          data: [2, 9, 18, 8, 7, 22, 26],
          borderColor: '#93c5fd',
          borderWidth: 3,
          borderDash: [6, 6],
          tension: 0.45,
          pointRadius: 0,
          fill: false,
          cubicInterpolationMode: 'monotone'
        }
      ]
    };
  }
  loadProjectsChart() {
    this.lineChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'This year',
          data: [5, 8, 14, 18, 23, 21, 26],
          borderColor: '#111827',
          borderWidth: 3,
          tension: 0.45,
          pointRadius: 0,
          fill: false,
          cubicInterpolationMode: 'monotone'
        },
        {
          label: 'Last year',
          data: [3, 6, 10, 12, 17, 19, 22],
          borderColor: '#93c5fd',
          borderWidth: 3,
          borderDash: [6, 6],
          tension: 0.45,
          pointRadius: 0,
          fill: false,
          cubicInterpolationMode: 'monotone'
        }
      ]
    };
  }

  loadStatusChart() {
    this.lineChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Active',
          data: [20, 22, 25, 24, 26, 28, 30],
          borderColor: '#22c55e',
          backgroundColor: 'rgba(34,197,94,0.15)',
          fill: true,
          tension: 0.45,
          pointRadius: 0
        }
      ]
    };
  }
  ngOnInit() {
    this.loadUsersChart();
  }


  lineChartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'This year',
        data: [9, 6, 10, 22, 21, 17, 19],
        borderColor: '#111827',
        borderWidth: 3,
        tension: 0.45,
        pointRadius: 0,
        fill: false,
        cubicInterpolationMode: 'monotone'
      },
      {
        label: 'Last year',
        data: [2, 9, 17, 6, 10, 20, 26],
        borderColor: '#93c5fd',
        borderWidth: 3,
        borderDash: [6, 6],
        tension: 0.45,
        pointRadius: 0,
        fill: false,
        cubicInterpolationMode: 'monotone'
      }
    ]




  };

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#111',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 10,
        displayColors: false
      }
    },

    layout: {
      padding: { top: 10, left: 10, right: 20, bottom: 0 }
    },

    elements: {
      line: {
        borderCapStyle: 'round',
        borderJoinStyle: 'round'
      }
    },

    scales: {
      y: {
        min: 0,
        max: 30,
        ticks: {
          stepSize: 10,
          color: '#9ca3af',
          font: { size: 12 },
          callback: (value: any) => (Number(value) === 0 ? '0' : value + 'K')
        },
        grid: {
          color: '#f1f5f9',
          lineWidth: 1
        },
        border: {
          display: false
        }
      },


      x: {
        grid: { display: false },
        ticks: {
          color: '#9ca3af',
          font: { size: 12 }
        },
        border: {
          display: false
        }
      }

    }
  };

}
