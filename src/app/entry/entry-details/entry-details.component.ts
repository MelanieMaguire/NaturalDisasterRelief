import {Component, Input, OnInit} from '@angular/core';
import { EntryService } from '../entry.service';
import { Entry } from '../entry';

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {
  @Input() entry: Entry;

  constructor(private entryService: EntryService) { }

  ngOnInit() {
  }
  deleteEntry() {
    this.entryService.deleteEntry(this.entry.key).catch(err => console.log(err)); // produces an error if delete is unsuccessful
  }

}
