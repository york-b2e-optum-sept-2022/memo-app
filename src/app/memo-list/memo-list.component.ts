import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-memo-list',
  templateUrl: './memo-list.component.html',
  styleUrls: ['./memo-list.component.css']
})
export class MemoListComponent implements OnInit {

  @Input() list!: any[];
  @Output() onDelete = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onMemoDelete(memo: any) {
    this.onDelete.emit(memo);
  }

}
