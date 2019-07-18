import { Component } from '@angular/core';
import { LoggerService } from './common/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab5-components';
  
  constructor(private log: LoggerService)  {
    this.log.log('AppComponent', 'coming up')
  }
}
