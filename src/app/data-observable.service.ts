import { Injectable } from '@angular/core';
import { Presentation } from 'src/models/Presentation';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Profile } from 'src/models/Profile';
import { Skills } from 'src/models/Skills';

@Injectable({
  providedIn: 'root'
})
export class DataObservableService {
  private presentation$: BehaviorSubject<Presentation> = new BehaviorSubject<Presentation>(undefined);
  private profile$: BehaviorSubject<Profile> = new BehaviorSubject<Profile>(undefined);
  private skills$: BehaviorSubject<Skills> = new BehaviorSubject<Skills>(undefined);
  constructor() {}

  setPresentation(interests: string, description: string, qualifications: string): void {
    let presentation = new Presentation();
    presentation.interests = interests;
    presentation.description = description;
    presentation.qualifications = qualifications;
    this.presentation$.next(presentation);
  }

  setProfile(lastName: string, firstName: string): void {
    let profile = new Profile();
    profile.lastName = lastName;
    profile.firstName = firstName;
    this.profile$.next(profile);
  }

  setSkills(introduction: string, skillsArray: any): void {
    let skills = new Skills();
    skills.introduction = introduction;
    skills.skillsArray = skillsArray;
    this.skills$.next(skills);
  }

  SubscribeToPresentation(): Observable<Presentation> {
    return this.presentation$.asObservable();
  }

  SubscribeToProfile(): Observable<Profile> {
    return this.profile$.asObservable();
  }

  SubscribeToSkills(): Observable<Skills> {
    return this.skills$.asObservable();
  }

}
