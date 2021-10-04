import { InjectionToken } from '@angular/core';
import { interval, Observable } from 'rxjs';

export class genID {
  public lastNumber = 0;
  private sequence = interval(1000);

  private lastGeneratedNumber = this.sequence.pipe();

  public generatedNumber = new InjectionToken<Observable<number>>(
    'generatedNumber'
  );
  constructor() {
    this.lastGeneratedNumber.subscribe((num) => (this.lastNumber = num));
  }

  getID() {
    return this.lastNumber;
  }
}
