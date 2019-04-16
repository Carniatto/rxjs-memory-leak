import { Component, OnInit } from '@angular/core';

import { LuckyService } from '../lucky.service';

@Component({
  selector: 'app-lucky',
  templateUrl: './lucky.component.html',
  styleUrls: ['./lucky.component.scss'],
  host: { class: 'mat-typography' },
})
export class LuckyComponent implements OnInit {
  subscribersCount = 0;
  public number: number;

  constructor(private luckyService: LuckyService) {}

  ngOnInit() {
    console.log(this.luckyService);

    this.luckyService.getLuckyNumber().subscribe((luckyNumber: number) => {
      this.number = luckyNumber;
      console.log(
        `Retrieved lucky number ${this.number} for subscription ${this.subscribersCount}`
      );
    });

    this.subscribersCount = this.luckyService.getSubscribersCount();
  }
}
