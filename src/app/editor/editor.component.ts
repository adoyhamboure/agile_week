import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass']
})
export class EditorComponent implements OnInit {
  private appSelector: number;
  constructor() { }

  ngOnInit() {
    this.appSelector = 0;
  }

  nextComponent(): void{
    this.appSelector++;
  }

  previousComponent(): void{
    this.appSelector--;
  }
}
