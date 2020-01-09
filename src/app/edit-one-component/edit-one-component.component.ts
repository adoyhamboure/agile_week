import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-edit-one-component',
  templateUrl: './edit-one-component.component.html',
  styleUrls: ['./edit-one-component.component.scss']
})
export class EditOneComponentComponent implements OnInit {
  appSelector: number;
  clickEvent: Subject<void> = new Subject<void>();
  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.appSelector = parseInt(this.route.snapshot.params.id); 
  }

  updateDatas(): void {
    this.clickEvent.next(); 
  }

  updateAppSelector(id: number): void {
    this.appSelector = id;
  }
}
