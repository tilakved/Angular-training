import { DragDropModule } from '@angular/cdk/drag-drop';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MydropComponent } from './mydrop.component';

describe('MydropComponent', () => {
  let component: MydropComponent;
  let fixture: ComponentFixture<MydropComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MydropComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
