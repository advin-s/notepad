import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notes } from './note.modal';
import { DashboardService } from '../dashboard/dashboard.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dbConnectionString: string =
    'https://notes-99feb-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json';

  constructor(
    private http: HttpClient,
  ) {}

  saveNotes(note: Notes) {
    return this.http.post(this.dbConnectionString, note);
  }

  getNotes() {
   return this.http.get(this.dbConnectionString).pipe(
     map((res) => {
       const notes = Object.values(res);
       return notes;
     })
   );
  }
}
