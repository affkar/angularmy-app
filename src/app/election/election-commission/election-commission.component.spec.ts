import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionCommissionComponent } from './election-commission.component';

describe('ElectionCommissionComponent', () => {
  let component: ElectionCommissionComponent;
  let fixture: ComponentFixture<ElectionCommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionCommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
