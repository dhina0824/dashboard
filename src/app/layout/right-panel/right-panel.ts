import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface NotificationItem {
  text: string;
  time: string;
  icon: 'bug' | 'user' | 'mail';
}

interface ActivityItem {
  text: string;
  time: string;
  avatar: string;
}
@Component({
  selector: 'app-right-panel',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './right-panel.html',
  styleUrl: './right-panel.css',
})
export class RightPanel {
  notifications = [
    { text: 'You fixed a bug.', time: 'Just now', icon: 'bug' },
    { text: 'New user registered.', time: '59 minutes ago', icon: 'user' },
    { text: 'You fixed a bug.', time: '12 hours ago', icon: 'bug' },
    { text: 'Andi Lane subscribed to you.', time: 'Today, 11:59 AM', icon: 'mail' }
  ];

  activities = [
    { text: 'Changed the style.', time: 'Just now', avatar: 'https://i.pravatar.cc/40?img=11' },
    { text: 'Released a new version.', time: '59 minutes ago', avatar: 'https://i.pravatar.cc/40?img=12' },
    { text: 'Submitted a bug.', time: '12 hours ago', avatar: 'https://i.pravatar.cc/40?img=13' },
    { text: 'Modified A data in Page X.', time: 'Today, 11:59 AM', avatar: 'https://i.pravatar.cc/40?img=14' },
    { text: 'Deleted a page in Project X.', time: 'Feb 2, 2024', avatar: 'https://i.pravatar.cc/40?img=15' }
  ];


  contacts = [
    'Natali Craig',
    'Drew Cano',
    'Andi Lane',
    'Koray Okumus',
    'Kate Morrison',
    'Melody Macy'
  ];
}
