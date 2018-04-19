import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DojoMailsComponent } from './dojo-mails.component';

describe('DojoMailsComponent', () => {
  let component: DojoMailsComponent;
  let fixture: ComponentFixture<DojoMailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DojoMailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DojoMailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
