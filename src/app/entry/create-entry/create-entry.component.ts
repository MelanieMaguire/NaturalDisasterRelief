import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Entry } from '../entry';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css']
})
export class CreateEntryComponent implements OnInit {
  entry: Entry = new Entry();
  submitted = false;

  constructor(private entryService: EntryService) { }

  ngOnInit() {
  }
  newEntry(): void {
    this.submitted = false;
    this.entry = new Entry();
  }
  save() {
    this.entryService.createEntry(this.entry);
    this.entry = new Entry();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
