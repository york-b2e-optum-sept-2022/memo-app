import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  memoList: any[] = [
    {text: 'test memo', date: new Date(), finished: false}
  ];

  createMemo(input: string) {
    console.log('create memo')
    console.log(input)

    this.memoList.push(
      {text: input, date: new Date(), finished: false}
    )


    console.log(this.memoList)
  }
}
