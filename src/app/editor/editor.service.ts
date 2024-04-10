import { Injectable } from '@angular/core';
import { Notes } from '../data/note.modal';
import { Subject } from 'rxjs';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  private notes:Notes[] = []
  public updateNotes = new Subject<Notes[]>()

  constructor(private dataService:DataService) { }

  saveNotes(note:Notes){
    this.notes.push(note)
    this.updateNotes.next(this.notes.slice())    
    // this.dataService.saveNotes(note).subscribe(res => console.log(res)
    // )
  }

  getNotes(){
    return this.notes.slice() 
  }
}
