import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadtripStopComponent } from './roadtrip-stop.component';

describe('RoadtripStopComponent', () => {
  let component: RoadtripStopComponent;
  let fixture: ComponentFixture<RoadtripStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadtripStopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadtripStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
