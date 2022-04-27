import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalhaoCreateComponent } from './talhao-create.component';

describe('TalhaoCreateComponent', () => {
  let component: TalhaoCreateComponent;
  let fixture: ComponentFixture<TalhaoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalhaoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalhaoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
