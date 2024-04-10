import { Injectable } from '@angular/core';
import { EditorService } from '../editor/editor.service';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private dataService:DataService) { }

  getNotes(){
    this.dataService.getNotes().subscribe(res => console.log(res)
    )
  }
}
