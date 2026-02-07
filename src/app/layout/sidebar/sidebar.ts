import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
profileOpen = false;

  toggleProfile() {
    this.profileOpen = !this.profileOpen;
  }

}
