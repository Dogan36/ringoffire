import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerInfoComponent } from './add-player-info.component';

describe('AddPlayerInfoComponent', () => {
  let component: AddPlayerInfoComponent;
  let fixture: ComponentFixture<AddPlayerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlayerInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPlayerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
