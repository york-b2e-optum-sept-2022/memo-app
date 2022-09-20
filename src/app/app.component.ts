import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'adam';
  num: number = 123;
  color: string = 'yellow';
  inputType: string = 'text';

  arrAccount = [
    {name: 'adam', email: 'astreet@yorksolutions.net'},
    {name: 'bob', email: 'bob@yorksolutions.net'},
    {name: 'scott', email: 'scott@yorksolutions.net'},
  ]


  getName(): string {
    return 'scott';
  }

  onClick(): void {
    console.log('button was clicked')
  }

  onChange(event: any): void {
    console.log(event.target.value)
  }
}
