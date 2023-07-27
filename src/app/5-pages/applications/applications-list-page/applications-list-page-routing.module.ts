import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsListPageComponent } from './applications-list-page/applications-list-page.component';

const routes: Routes = [
  { path: '', component: ApplicationsListPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsListPageRoutingModule { }
