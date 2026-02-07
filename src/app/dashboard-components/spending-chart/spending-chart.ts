import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';
Chart.register(...registerables);


const variableThicknessPlugin = {
  id: 'variableThickness',
  afterDraw(chart: any) {
    const { ctx } = chart;
    const cx = chart.width / 2;
    const cy = chart.height / 2;

    const baseInnerRadius = 55;
    const arcs = [
      { value: 20, color: '#3b82f6', thickness: 45 },
      { value: 40, color: '#22c55e', thickness: 35 },
      { value: 15, color: '#f97316', thickness: 27 },
      { value: 15, color: '#e5e7eb', thickness: 20 }
    ];

    const total = arcs.reduce((s, a) => s + a.value, 0);
    let startAngle = -0.5 * Math.PI;

    arcs.forEach(arc => {
      const angle = (arc.value / total) * 2 * Math.PI;

      const innerRadius = baseInnerRadius;
      const outerRadius = baseInnerRadius + arc.thickness;

      ctx.beginPath();
      ctx.fillStyle = arc.color;

      ctx.arc(cx, cy, outerRadius, startAngle, startAngle + angle);
      ctx.arc(cx, cy, innerRadius, startAngle + angle, startAngle, true);

      ctx.closePath();
      ctx.fill();

      startAngle += angle;
    });
  }
};





@Component({
  selector: 'app-spending-chart',
  standalone: true,
  imports: [BaseChartDirective, CommonModule],
  templateUrl: './spending-chart.html',
  styleUrls: ['./spending-chart.css']
})
export class SpendingChart {
  tipVisible = false;
  tipX = 0;
  tipY = 0;

  tipData: any = {};

  public pieChartPlugins = [variableThicknessPlugin];
  pieChartData = {
    labels: ['Server', 'Hosting', 'Services', 'Others'],
    datasets: [{
      data: [1],
      backgroundColor: ['transparent'],
      borderWidth: 0
    }]
  };

  pieChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      variableThickness: {}
    }
  };

  hideTip() {
    this.tipVisible = false;
  }

  arcs = [
    { label: 'SERVER', value: 20, amount: '1,00,000', thickness: 45 },
    { label: 'HOSTING', value: 40, amount: '2,00,000', thickness: 35 },
    { label: 'SERVICES', value: 15, amount: '75,000', thickness: 27 },
    { label: 'OTHERS', value: 15, amount: '50,000', thickness: 20 }
  ];

  onHover(event: MouseEvent) {
    const wrapper = event.currentTarget as HTMLElement;
    const rect = wrapper.getBoundingClientRect();

    const canvas = wrapper.querySelector('canvas') as HTMLCanvasElement;
    const box = canvas.getBoundingClientRect();


    const cx = box.left + box.width / 2 - rect.left;
    const cy = box.top + box.height / 2 - rect.top;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const dx = x - cx;
    const dy = y - cy;

    const dist = Math.sqrt(dx * dx + dy * dy);


    let angle = Math.atan2(dy, dx);
    angle = angle + Math.PI / 2;
    if (angle < 0) angle += 2 * Math.PI;

    const inner = 55;
    let start = 0;

    for (let arc of this.arcs) {
      const slice = (arc.value / 100) * (2 * Math.PI);
      const end = start + slice;
      const outer = inner + arc.thickness;


      const inAngle =
        start <= end
          ? angle >= start && angle <= end
          : angle >= start || angle <= end - 2 * Math.PI;

      if (dist > inner && dist < outer && inAngle) {
        this.tipVisible = true;
        this.tipData = arc;
        this.tipX = x;
        this.tipY = y - 10;
        return;
      }

      start = end % (2 * Math.PI);
    }

    this.tipVisible = false;
  }





}
