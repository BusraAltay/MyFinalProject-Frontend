import { Component } from '@angular/core'; /* componenti kullanabilmek için import etmeliyiz using gibi */

@Component({
  selector:
    'app-root' /* index.html sayfasındaki <app-root></app-root>'u tanır */,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'northwind';
  user = 'Büşra Altay';
  
}
