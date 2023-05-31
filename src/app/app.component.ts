import { Component } from '@angular/core';
import { DataShareService } from './services/data-share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  
  constructor(private dataShareService: DataShareService) { }

}
