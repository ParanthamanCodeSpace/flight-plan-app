import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTicketsComponent } from './available-tickets.component';

describe('AvailableTicketsComponent', () => {
  let component: AvailableTicketsComponent;
  let fixture: ComponentFixture<AvailableTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvailableTicketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
