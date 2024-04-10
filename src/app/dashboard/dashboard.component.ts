import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Notes } from '../data/note.modal';
import { EditorService } from '../editor/editor.service';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public notes:Notes[] = []
  public notesLoading:boolean = false;

  constructor(private dashboardService:DashboardService, private editorService:EditorService) { }

  ngOnInit(): void {
    // this.dashboardService.getNotes()
    // this.dashboardService.notesUpdated.subscribe(notes => {
    //   console.log(notes, '-----------');
      
    //   this.notes = notes
    // })
    // this.editorService.updateNotes.subscribe(notes =>{
    //   this.notes.push(...notes)
    // })
  this.notes = this.editorService.getNotes();
  this.editorService.updateNotes.subscribe((note) => {
    this.notes = note
  });
    
}

}
