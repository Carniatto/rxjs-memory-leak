import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: { class: 'mat-typography' },
})
export class AppComponent {
  title = 'rxjs-memory-leak';
}
