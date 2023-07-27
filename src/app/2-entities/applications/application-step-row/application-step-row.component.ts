import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Menu, MenuModule } from 'primeng/menu';
import { StepBrief } from '../models/step-brief';

@Component({
  selector: 'app-application-step-row',
  standalone: true,
  imports: [
    CommonModule,
    MenuModule,
  ],
  templateUrl: './application-step-row.component.html',
  styleUrls: ['./application-step-row.component.scss']
})
export class ApplicationStepRowComponent {
  @Input({ required: true }) step!: StepBrief;
  @ViewChild(Menu, { read: Menu, static: true }) menuRef!: Menu;
  @Output() onRemove = new EventEmitter<void>();

  items: MenuItem[] = [
    {
      label: 'Remove',
      icon: PrimeIcons.TRASH,
      command: e => {
        console.log('REMOVE', this.step);
        this.onRemove.emit();
        // this.mediator.removeStep(this.step.id);
      },
    }
  ];

  // constructor(private mediator: ApplicationDetailsMediator) { }

  toggle(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.menuRef.show(e)
  }
}
