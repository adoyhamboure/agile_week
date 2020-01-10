import { Injectable } from '@angular/core';
import { Presentation } from 'src/models/Presentation';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Profile } from 'src/models/Profile';
import { Skills } from 'src/models/Skills';
import { Experiences } from 'src/models/Experiences';
import { Trainings } from 'src/models/Trainings';
import { Certifications } from 'src/models/Certifications';
import { Creations } from 'src/models/Creations';
import { References } from 'src/models/References';
import { Contacts } from 'src/models/Contacts';

@Injectable({
  providedIn: 'root'
})
export class DataObservableService {
  private presentation$: BehaviorSubject<Presentation> = new BehaviorSubject<Presentation>(undefined);
  private profile$: BehaviorSubject<Profile> = new BehaviorSubject<Profile>(undefined);
  private skills$: BehaviorSubject<Skills> = new BehaviorSubject<Skills>(undefined);
  private experiences$: BehaviorSubject<Experiences> = new BehaviorSubject<Experiences>(undefined);
  private trainings$: BehaviorSubject<Trainings> = new BehaviorSubject<Trainings>(undefined);
  private certifications$: BehaviorSubject<Certifications> = new BehaviorSubject<Certifications>(undefined);
  private creations$: BehaviorSubject<Creations> = new BehaviorSubject<Creations>(undefined);
  private references$: BehaviorSubject<References> = new BehaviorSubject<References>(undefined);
  private contacts$: BehaviorSubject<Contacts> = new BehaviorSubject<Contacts>(undefined);
  private colorBackground$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);
  private colorTitle$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);
  private font$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);
  private colorDiv$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);
  constructor() { }

  setPresentation(description: string): void {
    let presentation = new Presentation();
    presentation.description = description;
    this.presentation$.next(presentation);
  }

  setProfile(lastName: string, firstName: string, imageUrl: string, city: string, job: string, experience: number): void {
    let profile = new Profile();
    profile.lastName = lastName;
    profile.firstName = firstName;
    profile.imageUrl = imageUrl;
    profile.city = city;
    profile.job = job;
    profile.experience = experience;
    this.profile$.next(profile);
  }

  setSkills(introduction: string, skillsArray: any): void {
    let skills = new Skills();
    skills.introduction = introduction;
    skills.skillsArray = skillsArray;
    this.skills$.next(skills);
  }

  setExperiences(introduction: string, experiencesArray: any): void {
    let experiences = new Experiences();
    experiences.introduction = introduction;
    experiences.experiencesArray = experiencesArray;
    this.experiences$.next(experiences);
  }

  setTrainings(introduction: string, trainingsArray: any): void {
    let trainings = new Trainings();
    trainings.introduction = introduction;
    trainings.trainingsArray = trainingsArray;
    this.trainings$.next(trainings);
  }

  setCertifications(introduction: string, certificationsArray: any): void {
    let certifications = new Certifications();
    certifications.introduction = introduction;
    certifications.certificationsArray = certificationsArray;
    this.certifications$.next(certifications);
  }

  setCreations(introduction: string, imageList: any): void {
    let creations = new Creations();
    creations.introduction = introduction;
    creations.imageList = imageList;
    this.creations$.next(creations);
  }

  setReferences(comments: any): void {
    let references = new References();
    references.comments = comments;
    this.references$.next(references);
  }

  setContacts(phone: string, mail: string, linkedin: string, facebook: string, twitter: string, youtube: string, instagram: string, website: string): void {
    let contacts = new Contacts();
    contacts.phone = phone;
    contacts.mail = mail;
    contacts.linkedin = linkedin;
    contacts.facebook = facebook;
    contacts.twitter = twitter;
    contacts.youtube = youtube;
    contacts.instagram = instagram;
    contacts.website = website;
    this.contacts$.next(contacts);
  }

  setColorBackground(background: string): void {
    this.colorBackground$.next(background);
  }

  setColorTitle(title: string): void {
    this.colorTitle$.next(title);
  }

  setFont(fontName: string): void {
    this.font$.next(fontName);
  }

  setColorDiv(colorDiv: string): void {
    this.colorDiv$.next(colorDiv);
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

  SubscribeToExperiences(): Observable<Experiences> {
    return this.experiences$.asObservable();
  }

  SubscribeToTrainings(): Observable<Trainings> {
    return this.trainings$.asObservable();
  }

  SubscribeToCertifications(): Observable<Certifications> {
    return this.certifications$.asObservable();
  }

  SubscribeToCreations(): Observable<Creations> {
    return this.creations$.asObservable();
  }

  SubscribeToReferences(): Observable<References> {
    return this.references$.asObservable();
  }

  SubscribeToContacts(): Observable<Contacts> {
    return this.contacts$.asObservable();
  }

  SubscribeToColorBackground(): Observable<string> {
    return this.colorBackground$.asObservable();
  }

  SubscribeToColorTitle(): Observable<string> {
    return this.colorTitle$.asObservable();
  }

  SubscribeToFont(): Observable<string> {
    return this.font$.asObservable();
  }

  SuscribeToColorDiv(): Observable<string> {
    return this.colorDiv$.asObservable();
  }

}
