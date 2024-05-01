import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisDetailsComponent } from './pais-details.component';

describe('PaisDetailsComponent', () => {
  let component: PaisDetailsComponent;
  let fixture: ComponentFixture<PaisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaisDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
