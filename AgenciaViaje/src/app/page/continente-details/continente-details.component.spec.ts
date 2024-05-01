import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinenteDetailsComponent } from './continente-details.component';

describe('ContinenteDetailsComponent', () => {
  let component: ContinenteDetailsComponent;
  let fixture: ComponentFixture<ContinenteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinenteDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContinenteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
