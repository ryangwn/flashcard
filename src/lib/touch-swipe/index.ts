export class TouchSwipeCard {
  private element: HTMLElement;
  private startX: number = 0;
  private distX: number = 0;

  constructor(element: HTMLElement) {
    this.element = element;
    
    this.element.addEventListener('touchstart', this.handleTouchStart.bind(this));
    this.element.addEventListener('touchmove', this.handleTouchMove.bind(this));
    this.element.addEventListener('touchend', this.handleTouchEnd.bind(this));
  }

  private handleTouchStart(e: TouchEvent): void {
    this.startX = e.touches[0].clientX;
  }

  private handleTouchMove(e: TouchEvent): void {
    if (!this.startX) return;
    this.distX = e.touches[0].clientX - this.startX;
  }

  private handleTouchEnd(): void {
    const threshold: number = 50; // Minimum distance to be considered a swipe
    
    if (this.distX > threshold) {
      this.onSwipeRight();
    } else if (this.distX < -threshold) {
      this.onSwipeLeft();
    }

    // Reset values
    this.startX = 0;
    this.distX = 0;
  }

  public onSwipeLeft() {
    
  }

  public onSwipeRight() {

  }
}
