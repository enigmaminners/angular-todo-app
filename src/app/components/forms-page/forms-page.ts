import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-page',
  standalone: false,
  templateUrl: './forms-page.html',
  styleUrl: './forms-page.css'
})
export class FormsPage {
form = new FormGroup({
  firstName: new FormControl(""),
  lastName: new FormControl(""),
  age: new FormControl("45")
})

submit() {
  alert(JSON.stringify(this.form.getRawValue()));
}
}
