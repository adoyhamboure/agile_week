import { Injectable } from '@angular/core';
import { Presentation } from 'src/models/Presentation';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Profile } from 'src/models/Profile';

@Injectable({
  providedIn: 'root'
})
export class DataObservableService {
  private presentation$: BehaviorSubject<Presentation> = new BehaviorSubject<Presentation>(undefined);
  private profile$: BehaviorSubject<Profile> = new BehaviorSubject<Profile>(undefined);
  constructor() {}

  setPresentation(interests: string, description: string, qualifications: string): void {
    let presentation = new Presentation();
    presentation.interests = interests;
    presentation.description = description;
    presentation.qualifications = qualifications;
    this.presentation$.next(presentation);
  }

  setProfile(lastName: string, firstName: string){
    let profile = new Profile();
    profile.lastName = lastName;
    profile.firstName = firstName;
    this.profile$.next(profile);
  }

  SubscribeToPresentation(): Observable<Presentation>{
    return this.presentation$.asObservable();
  }

  SubscribeToProfile(): Observable<Profile>{
    return this.profile$.asObservable();
  }

}
