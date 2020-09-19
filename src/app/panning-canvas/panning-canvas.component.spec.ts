import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanningCanvasComponent } from './panning-canvas.component';

describe('PanningCanvasComponent', () => {
  let component: PanningCanvasComponent;
  let fixture: ComponentFixture<PanningCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanningCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanningCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
