import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IMemo} from "../interfaces/IMemo";

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {

  @Input() memo!: IMemo;
  @Output() onDelete = new EventEmitter<IMemo>;
  @Output() onUpdate = new EventEmitter<IMemo>;

  isUpdating: boolean = false;
  localMemo!: IMemo;


  constructor() {
  }

  ngOnInit(): void {
    this.localMemo = {...this.memo};
    console.log(this.localMemo)
  }

  onDeleteClick() {
    this.onDelete.emit(this.memo);
    this.onDelete.emit(this.memo);
  }

  onUpdateClick() {
    this.isUpdating = true;
  }

  onSaveClick() {
    this.onUpdate.emit(this.localMemo)
    this.isUpdating = false;
  }

  onCancelClick() {
    this.localMemo = {...this.memo};
    this.isUpdating = false;
  }

}
