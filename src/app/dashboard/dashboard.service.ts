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
  this.notes = this.editorService.getNotes() 
  this.editorService.updateNotes.subscribe(note => {

    this.notes.push(...note)
    this.notesUpdated.next(this.notes)
    console.log(this.notes, '---------');
    
  })
  }

  getNotes(){
    return this.notes
  }
}
