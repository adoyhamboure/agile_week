import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Presentation } from 'src/models/Presentation';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.sass']
})
export class PresentationComponent implements OnInit {

  private presentation$: Observable<Presentation>;
  constructor() { }

  ngOnInit() {
  }

}
