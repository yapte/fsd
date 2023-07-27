import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Application } from '../models/application';

@Component({
  selector: 'tr[applicationsListRow]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './applications-list-row.component.html',
  styleUrls: ['./applications-list-row.component.scss']
})
export class ApplicationsListRowComponent {
  @Input({ required: true }) application!: Application;
}
