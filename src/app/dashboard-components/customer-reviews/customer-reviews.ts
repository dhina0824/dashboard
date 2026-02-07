import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-reviews.html',
  styleUrls: ['./customer-reviews.css']
})
export class CustomerReviews {

reviews = [
  { name: 'Sally D.', time: '20m ago', text: 'It is over qualified and easy to use, thank you.', rating: 5 },
  { name: 'Michael K.', time: '1 day ago', text: 'An improvement is needed asap.', rating: 2 },
  { name: 'Deniz T.', time: '1 day ago', text: 'Works well!', rating: 5 },
  { name: 'Melissa', time: '3 day ago', text: 'Great service and useful interfaces.', rating: 5 },

  { name: 'Robert H.', time: '2h ago', text: 'Support team was very helpful.', rating: 4 },
  { name: 'Anita P.', time: '5h ago', text: 'Dashboard UI looks clean and modern.', rating: 5 },
  { name: 'Chris M.', time: 'Yesterday', text: 'Some minor bugs, but overall good.', rating: 3 },
  { name: 'Laura J.', time: '2 days ago', text: 'Performance is excellent.', rating: 5 },
  { name: 'Kevin L.', time: '2 days ago', text: 'Setup was quick and simple.', rating: 4 },
  { name: 'Sophia R.', time: '3 days ago', text: 'Really love the analytics section.', rating: 5 },

  { name: 'Daniel W.', time: '4 days ago', text: 'Mobile view can be improved.', rating: 3 },
  { name: 'Emma S.', time: '4 days ago', text: 'Very intuitive interface.', rating: 5 },
  { name: 'Olivia B.', time: '5 days ago', text: 'Customer support replied fast.', rating: 4 },
  { name: 'James C.', time: '6 days ago', text: 'Charts are very informative.', rating: 5 },
  { name: 'Isabella N.', time: '1 week ago', text: 'Loading speed is impressive.', rating: 5 },

  { name: 'William T.', time: '1 week ago', text: 'Would recommend to others.', rating: 4 },
  { name: 'Mia L.', time: '1 week ago', text: 'Needs more customization options.', rating: 3 },
  { name: 'Ethan G.', time: '8 days ago', text: 'Very reliable system.', rating: 5 },
  { name: 'Charlotte V.', time: '9 days ago', text: 'Clean layout and easy navigation.', rating: 5 },
  { name: 'Benjamin F.', time: '10 days ago', text: 'Good value for the features offered.', rating: 4 }
];


}
