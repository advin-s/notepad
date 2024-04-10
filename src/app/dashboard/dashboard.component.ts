import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Notes } from '../data/note.modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public notes:Notes[] = []

  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    // this.notes = this.dashboardService.getNotes();
  
  }

}
