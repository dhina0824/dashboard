import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-conversations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conversations.html',
  styleUrl: './conversations.css'
})
export class Conversations implements AfterViewInit {
  @ViewChild('chatBody') chatBody!: ElementRef;

  newMsg = '';

  chats = [
    { user: 'Geneva', msg: 'Hello!', time: '10:00', side: 'left' },
    { user: 'Dominic', msg: 'Hi, How are you? What about our next meeting?', time: '10:01', side: 'right' },
    { user: 'Geneva', msg: 'Yeah everything is fine', time: '10:01', side: 'left' },
    { user: 'Dominic', msg: 'Wow that’s great', time: '10:02', side: 'right' }
  ];

  sendMessage() {
    if (!this.newMsg.trim()) return;

    const now = new Date();
    const time = now.getHours() + ':' + now.getMinutes().toString().padStart(2, '0');

    this.chats.push({
      user: 'You',
      msg: this.newMsg,
      time,
      side: 'right'
    });

    this.newMsg = '';

    this.scrollToBottom();
  }


  scrollToBottom() {
    setTimeout(() => {
      this.chatBody.nativeElement.scrollTop =
        this.chatBody.nativeElement.scrollHeight;
    }, 50);
  }
  ngAfterViewInit() {
    this.scrollToBottom();
  }

}
