import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LuckyService {
  private luckyGenerator$: Observable<number>;
  private subscribersCount = 0;

  constructor() {}

  public getLuckyNumber(): Observable<number> {
    this.subscribersCount++;

    if (!this.luckyGenerator$) {
      this.luckyGenerator$ = interval(3000).pipe(map(() => Math.floor(Math.random() * 10)));
    }

    return this.luckyGenerator$;
  }

  public getSubscribersCount(): number {
    return this.subscribersCount;
  }
}
