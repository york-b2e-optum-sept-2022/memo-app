import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IMemo} from "../interfaces/IMemo";

@Component({
  selector: 'app-memo-list',
  templateUrl: './memo-list.component.html',
  styleUrls: ['./memo-list.component.css']
})
export class MemoListComponent implements OnInit {

  @Input() list!: IMemo[];
  @Output() onDelete = new EventEmitter<IMemo>();
  @Output() onUpdate = new EventEmitter<IMemo>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onMemoDelete(memo: IMemo) {
    this.onDelete.emit(memo);
  }

  onMemoUpdate(memo: IMemo) {
    this.onUpdate.emit(memo);
  }

}
