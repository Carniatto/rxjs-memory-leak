import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LuckyComponent } from './lucky/lucky.component';
import { ReallyComponent } from './really/really.component';

const routes: Routes = [
  { path: '', redirectTo: 'lucky', pathMatch: 'full' },
  { path: 'lucky', component: LuckyComponent },
  { path: 'really', component: ReallyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
