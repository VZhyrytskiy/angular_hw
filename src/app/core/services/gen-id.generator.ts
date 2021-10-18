import { InjectionToken } from '@angular/core';
import { interval, Observable } from 'rxjs';

export class genID {
  private sequence = interval(1000);
  private lastGeneratedNumber = this.sequence.pipe();

  lastNumber = 0;
  generatedNumber = new InjectionToken<Observable<number>>(
    'generatedNumber'
  );

  constructor() {
    // не очень понятно, почему нельзя подписаться на sequence
    // если есть подписка на бесконечный поток, то надо делать отписку
    this.lastGeneratedNumber.subscribe(num => this.lastNumber = num);
  }

  getID(): number {
    return this.lastNumber;
  }
}
