import { Injectable, OnInit } from '@angular/core';
import { Notes } from '../data/note.modal';
import { Subject } from 'rxjs';
import { DataService } from '../data/data.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EditorService implements OnInit{

  private notes:Notes[] = []
  public updateNotes = new Subject<Notes[]>()

  constructor(private dataService:DataService) { }

  ngOnInit(): void {

 
  }

  saveNotes(note:Notes){
    this.notes.push(note)
    this.updateNotes.next(this.notes.slice())    
    this.dataService.saveNotes(note).subscribe(res => console.log(res)
    )
  }

  getNotes(){
       this.dataService.getNotes().subscribe((notes) => {
         this.notes = notes;
         this.updateNotes.next(this.notes);
       },err => {
        console.log(err)
        this.notes = []
      }
       );
    return this.notes.slice() 
  }
}
