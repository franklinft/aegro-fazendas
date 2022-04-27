import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazendaInfoComponent } from './fazenda-info.component';

describe('FazendaInfoComponent', () => {
  let component: FazendaInfoComponent;
  let fixture: ComponentFixture<FazendaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazendaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FazendaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
