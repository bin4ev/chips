import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css'],
})
export class ChipComponent {
  @Input() text: string = 'default'

  @Output() delete = new EventEmitter()

  constructor(private renderer: Renderer2) { }

  deleteChip() {
    this.delete.emit()
  }

}
