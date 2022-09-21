import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {

  @Input() memo: any;
  @Output() onDelete = new EventEmitter<any>;
  isUpdating: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick() {
    this.onDelete.emit(this.memo);
    this.onDelete.emit(this.memo);
  }

  onUpdateClick() {
    this.isUpdating = true;
    console.log('update')
  }

  onSaveClick() {
    this.isUpdating = false;
    console.log('save changes')
  }

}
