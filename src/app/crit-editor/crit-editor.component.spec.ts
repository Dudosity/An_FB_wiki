import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritEditorComponent } from './crit-editor.component';

describe('CritEditorComponent', () => {
  let component: CritEditorComponent;
  let fixture: ComponentFixture<CritEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
