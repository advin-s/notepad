import { Injectable, OnInit } from '@angular/core';
import { EditorService } from '../editor/editor.service';
import { DataService } from '../data/data.service';
import { Subject } from 'rxjs';
import { Notes } from '../data/note.modal';

@Injectable({
  providedIn: 'root',
})
export class DashboardService implements OnInit {
  public notesUpdated = new Subject<Notes[]>();
  public notes:Notes[] = []

  constructor(private dataService:DataService, private editorService:EditorService) {}

  ngOnInit(): void {
  }

  getNotes(){
    return this.notes
  }
}
