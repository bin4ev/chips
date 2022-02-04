import { Component, EventEmitter, Input, OnInit, Output, Renderer2, } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.css']
})
export class ChipListComponent implements OnInit {
  @Input() items!: Array<string>

  @Output() itemsChange = new EventEmitter()

  input = new FormControl()
  value!: any
  obs!: any
  removeKeyDown!: any
  inputElement!: any

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.obs = this.input.valueChanges.subscribe(val => this.value = val)
  }

  onFocus(e: any) {
    this.inputElement = e.target
    this.removeKeyDown = this.renderer.listen('body', 'keydown', this.onKeyDown.bind(this))
  }

  onKeyDown(e: any) {
    if (e.key == 'Enter') {
      this.items.push(this.value)
      this.inputElement.value = ''
      this.itemsChange.emit(this.items)
    }
  }

  onBlur() {
    this.removeKeyDown()
    this.inputElement.value = ''
  }

  deleteLabel(text: string) {
    let index = this.items.indexOf(text)
    this.items.splice(index, 1)
  }


  ngOnDestriy() {
    this.obs.unsubscribe()
  }

}
