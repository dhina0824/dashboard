import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './layout/sidebar/sidebar';
import { Header } from './layout/header/header';
import { RightPanel } from './layout/right-panel/right-panel';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Sidebar,
    Header,
    RightPanel,

    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dashboard-ui');
  panelOpen = false;

  openPanel() {
    this.panelOpen = true;
  }

  togglePanel() {
    this.panelOpen = !this.panelOpen;
  }
}
