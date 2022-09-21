import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  memoList: any[] = [];

  createMemo(input: string) {
    const currentDate = new Date();
    const memo = {id: currentDate.getTime(), text: input, date: currentDate, finished: false}
    this.memoList.push(memo);
  }

  deleteMemo(memoToDelete: any) {
    this.memoList = this.memoList.filter(memo => memo.id !== memoToDelete.id);
  }

  debug() {
    console.log(this.memoList)
  }

}
