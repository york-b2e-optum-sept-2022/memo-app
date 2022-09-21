import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {

  @Input() memo: any;

  constructor() { }

  ngOnInit(): void {
  }

}
