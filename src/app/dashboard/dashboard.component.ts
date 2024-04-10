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
  this.notes = this.editorService.getNotes();
  this.editorService.updateNotes.subscribe((note) => {
    this.notes = note
  });
    
}

}
