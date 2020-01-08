import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  private appSelector: number;
  clickEvent: Subject<void> = new Subject<void>();
  constructor() { }

  ngOnInit() {
    this.appSelector = 0;
  }

  nextComponent(): void{
    this.appSelector++;
    this.clickEvent.next();
  }

  previousComponent(): void{
    this.appSelector--;
  }

  setAppSelector(num: number): void {
    this.clickEvent.next();
    this.appSelector = num;
  }
}
