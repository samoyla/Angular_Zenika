import { computed, Directive, input } from '@angular/core';

@Directive({
  selector: '[appHighlightPrice]',
  host: {
    '[class]': 'highlightClass',
  },
})
export class HighlightPrice {
  price = input(0, { alias: 'appHighlightPrice' });

  highlightClass = computed(() => {
    if (!this.price()) {
      return 'text-body-tertiary fst-italic';
    }
    if (this.price() < 50) {
      return 'text-body-secondary';
    }
    return 'text-body-emphasis';
  });
}
