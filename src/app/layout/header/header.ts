import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Output() togglePanel = new EventEmitter<void>();
  @Output() notifyClick = new EventEmitter<void>();
  @Output() boxClick = new EventEmitter<void>();
}
