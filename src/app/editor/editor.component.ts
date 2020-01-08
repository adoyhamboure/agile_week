import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  private appSelector: number;
  clickEvent: Subject<void> = new Subject<void>();
  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    this.appSelector = 0;
  }

  nextComponent(): void{
    this.appSelector++;
    if(this.appSelector === 9){
      this._router.navigate(['/generated'])
    }
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
