import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, NgZone, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-best-products',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './best-products.html',
  styleUrls: ['./best-products.css'],
})
export class BestProducts implements AfterViewInit, OnDestroy {

  constructor(private cdr: ChangeDetectorRef) { }

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
    return Math.max(0, this.products.length - this.visibleCards);
  }

  ngAfterViewInit() {
    this.startAutoSlide();
  }

  next() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex += 1;
      this.updatePosition();
      this.cdr.markForCheck();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
      this.updatePosition();
      this.cdr.markForCheck();
    }
  }

 
  private autoNext() {
    if (this.currentIndex >= this.maxIndex) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
    }
    this.updatePosition();
    this.cdr.markForCheck();
  }

  updatePosition() {
    this.translateX = this.currentIndex * this.cardWidth;
  }

  startAutoSlide() {
    this.clearAutoSlide();
    this.autoSlideInterval = setInterval(() => {
      this.autoNext();
    }, 3000);
  }

  clearAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  ngOnDestroy() {
    this.clearAutoSlide();
  }

}
