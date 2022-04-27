import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazendaListComponent } from './fazenda-list.component';

describe('FazendaListComponent', () => {
  let component: FazendaListComponent;
  let fixture: ComponentFixture<FazendaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazendaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FazendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
