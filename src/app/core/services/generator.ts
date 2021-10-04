import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { genID } from './gen-id.generator';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService extends genID {
  private AZ_Array: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  private az_Array: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  private zeroNine_Array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() {
    super();
  }

  generate(n: number) {
    let str = '';
    const allChars = [
      ...this.AZ_Array,
      ...this.az_Array,
      ...this.zeroNine_Array,
    ];
    for (let i = 0; i < n; i++) {
      let randomIndex = Math.floor(Math.random() * (allChars.length - 1));
      str += allChars[randomIndex];
    }

    return str;
  }

  getNewID() {
    return this.getID();
  }
}
