import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  username:string = '';
  allowDisplayDetails: boolean = false;
  clicks: Array<Date> = [ ];

  onDisplayClick() {
    this.allowDisplayDetails = !this.allowDisplayDetails;
    // this.clicks.push(this.clicks.length + 1);
    this.clicks.push(new Date());
  }
}
