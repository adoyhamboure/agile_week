import { Injectable } from '@angular/core';
import { Presentation } from 'src/models/Presentation';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataObservableService {
  private presentation$: BehaviorSubject<Presentation> = new BehaviorSubject<Presentation>(undefined);
  constructor() {}

  setPresentation(interests: string, description: string, qualifications: string): void {
    let presentation = new Presentation();
    presentation.interests = interests;
    presentation.description = description;
    presentation.qualifications = qualifications;
    

    this.presentation$.next(presentation);
  }

  SubscribePresentation(): Observable<Presentation>{
    return this.presentation$.asObservable();
  }

}
