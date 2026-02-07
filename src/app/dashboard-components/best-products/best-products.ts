import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, NgZone, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-products',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './best-products.html',
  styleUrl: './best-products.css',
})
export class BestProducts implements AfterViewInit, OnDestroy {

  constructor(private zone: NgZone) { }

  products = [
    { name: 'Stylish Cricket & Walking Light Weight Shoes', oldPrice: '$280', price: '$140.00', sale: true },
    { name: 'Combo Pack of 2 Sports Shoes Running Shoes', oldPrice: '$320', price: '$280.00', sale: false },
    { name: 'Combo Pack of 2 Sports Shoes Running Shoes', oldPrice: '$320', price: '$280.00', sale: false },
    { name: 'Sports Sneaker Combo', oldPrice: '$200', price: '$120.00', sale: true },
    { name: 'Walking Shoes Light', oldPrice: '$240', price: '$160.00', sale: false },
    { name: 'Running Shoes Pro', oldPrice: '$300', price: '$220.00', sale: false }
  ];

  visibleCards = 3;
  cardWidth = 222;
  currentIndex = 0;
  translateX = 0;
  autoSlideInterval: any;

  get maxIndex() {
    return this.products.length - this.visibleCards;
  }

  ngAfterViewInit() {
    this.startAutoSlide();
  }

  next() {
    if (this.currentIndex + this.visibleCards > this.maxIndex) {

      this.currentIndex = 0;
    } else {
      this.currentIndex += this.visibleCards;
    }

    this.updatePosition();
  }

  prev() {
    if (this.currentIndex - this.visibleCards < 0) {
      this.currentIndex = this.maxIndex;
    } else {
      this.currentIndex -= this.visibleCards;
    }

    this.updatePosition();
  }


  updatePosition() {
    this.translateX = this.currentIndex * this.cardWidth;
  }

  startAutoSlide() {
    this.zone.runOutsideAngular(() => {
      this.autoSlideInterval = setInterval(() => {
        this.zone.run(() => {
          this.next();
        });
      }, 3000);
    });
  }


  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }

}
