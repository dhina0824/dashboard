
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  tasks = [
    { title: 'iOS App home page', date: 'Due on 23 Aug, 2019' },
    { title: 'Write a release note for Shreyu', date: 'Due on 22 Aug, 2019' },
    { title: 'Invite Greya to project shreyu admin', date: 'Due on 21 Aug, 2019' },
    { title: 'Enable analytics tracking for main website', date: 'Due on 20 Aug, 2019' },
    { title: 'Invite user to a project', date: 'Due on 18 Aug, 2019' },
    { title: 'Write a release note', date: 'Due on 18 Aug, 2019' },

    { title: 'Design dashboard UI', date: 'Due on 17 Aug, 2019' },
    { title: 'Fix login page validation issue', date: 'Due on 16 Aug, 2019' },
    { title: 'Update API documentation', date: 'Due on 15 Aug, 2019' },
    { title: 'Deploy staging build', date: 'Due on 14 Aug, 2019' },
    { title: 'Review pull requests', date: 'Due on 13 Aug, 2019' },
    { title: 'Optimize database queries', date: 'Due on 12 Aug, 2019' },
    { title: 'Create marketing banner', date: 'Due on 11 Aug, 2019' },
    { title: 'Test payment gateway integration', date: 'Due on 10 Aug, 2019' },
    { title: 'Prepare sprint demo', date: 'Due on 09 Aug, 2019' },
    { title: 'Fix mobile responsiveness', date: 'Due on 08 Aug, 2019' },
    { title: 'Add user role permissions', date: 'Due on 07 Aug, 2019' },
    { title: 'Update privacy policy page', date: 'Due on 06 Aug, 2019' },
    { title: 'Bug fixes from QA team', date: 'Due on 05 Aug, 2019' },
    { title: 'Implement dark mode feature', date: 'Due on 04 Aug, 2019' }
  ];

}
