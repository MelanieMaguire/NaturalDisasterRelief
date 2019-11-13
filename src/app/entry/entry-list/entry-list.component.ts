import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries: any;

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.getEntryList();
  }
  getEntryList() {
    this.entryService.getEntryList().snapshotChanges().pipe(
      map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val() })))
    ).subscribe(entries => { this.entries = entries; });
  }


}
