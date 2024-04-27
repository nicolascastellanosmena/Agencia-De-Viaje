import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracasComponent } from './caracas.component';

describe('CaracasComponent', () => {
  let component: CaracasComponent;
  let fixture: ComponentFixture<CaracasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaracasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaracasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
