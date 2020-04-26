import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from "rxjs";

import { SubnavItem } from "./subnav-item";

@Injectable({
  providedIn: 'root'
})
export class SubnavService implements OnDestroy {

  private _subnavEntryAdded = new Subject<SubnavItem>();
  get subnavEntryAdded(): Observable<SubnavItem> {
    return this._subnavEntryAdded.asObservable();
  }

  private _subnavEntries: SubnavItem[] = [];
  get subnavEntries(): SubnavItem[] {
    return this._subnavEntries;
  }

  public registerItem(item: SubnavItem) {
    this.subnavEntries.push(item);
    this._subnavEntryAdded.next(item);
  }

  ngOnDestroy(): void {
    this._subnavEntryAdded.unsubscribe();
  }

}
