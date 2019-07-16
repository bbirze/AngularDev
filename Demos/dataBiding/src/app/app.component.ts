import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = "Kari Nordmann";
  skills = "";

  addSkill(newSkill) {
      this.skills += newSkill.value + " ";
      newSkill.value = "";
      newSkill.focus();
  }

}
