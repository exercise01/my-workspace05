import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentEffectComponent } from './parent-effect.component';

describe('ParentEffectComponent', () => {
  let component: ParentEffectComponent;
  let fixture: ComponentFixture<ParentEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentEffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
