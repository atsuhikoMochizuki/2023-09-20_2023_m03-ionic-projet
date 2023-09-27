import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Session } from '../models/session';
import { CurrencyPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FolderServiceService {

  public ACCUEIL: string = "ACCUEIL";
  public LISTE_SESSIONS: string = "SESSIONS";
  public LISTE_INTERVENANTS: string = "INTERVENANTS";

  public currentPageSubject = new BehaviorSubject<string>("");
  currentPage = this.currentPageSubject.asObservable();

  constructor(

  ) {
    this.currentPageSubject.next(this.ACCUEIL);
  }
}
