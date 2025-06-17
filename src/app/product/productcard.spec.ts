import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productcard } from './productcard';
import { Product } from './product-types';

fdescribe('Productcard', () => {
  let component: Productcard;
  let fixture: ComponentFixture<Productcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productcard],
    }).compileComponents();

    fixture = TestBed.createComponent(Productcard);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('product', {
      id: 'welsch',
      title: 'Coding the welsch',
      description: 'Tee-shirt col rond - Homme',
      photo: '/assets/coding-the-welsch.jpg',
      price: 20,
      stock: 2,
    } satisfies Product);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the product photo as image url', () => {
    const img = (fixture.nativeElement as HTMLElement).querySelector('img');

    expect(img?.src).toContain('/assets/coding-the-welsch.jpg');
  });

  it('should display the product description', () => {
    const desc = (fixture.nativeElement as HTMLElement).querySelector('small');

    expect(desc?.textContent).toContain('Tee-shirt col rond - Homme');
  });

  it('should display the product title', () => {
    const title = (fixture.nativeElement as HTMLElement).querySelector('a');

    expect(title?.textContent).toContain('Coding the welsch');
  });

  it('should display the product price', () => {
    const price = (fixture.nativeElement as HTMLElement).querySelector('p');

    expect(price?.textContent).toContain('20');
  });

  it('should emit addToBasket event with the given product when the button is clicked', () => {
    const emit = spyOn(fixture.componentInstance.addToBasket, 'emit');

    const button = (fixture.nativeElement as HTMLElement).querySelector('button');
    button?.click();

    expect(emit).toHaveBeenCalledOnceWith(component.product());
  });
});
