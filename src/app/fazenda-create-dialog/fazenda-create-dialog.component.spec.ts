import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazendaCreateDialogComponent } from './fazenda-create-dialog.component';

describe('FazendaCreateComponent', () => {
  let component: FazendaCreateDialogComponent;
  let fixture: ComponentFixture<FazendaCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazendaCreateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FazendaCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
