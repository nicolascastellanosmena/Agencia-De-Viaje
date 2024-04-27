import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaHabanaComponent } from './la-habana.component';

describe('LaHabanaComponent', () => {
  let component: LaHabanaComponent;
  let fixture: ComponentFixture<LaHabanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaHabanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaHabanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
