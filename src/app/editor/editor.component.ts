import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Notes } from '../data/note.modal';
import { EditorService } from './editor.service';

declare var bootstrap: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit, AfterViewInit {
  @ViewChild('editorModal') editorModal!: ElementRef;
  public notesForm!:FormGroup;
  private modal!:any
  public addTitle:boolean = false;
  public savedNotes:Notes[] = []

  constructor(private router: Router, private editorService:EditorService) {}

  ngOnInit(): void {
    this.notesForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'content': new FormControl(null, Validators.required)
    })
  }

  ngAfterViewInit(): void {
    const options = {
      backdrop: 'static',
      keyboard: false,
      focus:true
    };
    if (this.router.url === '/editor') {
       this.modal = new bootstrap.Modal(this.editorModal.nativeElement, options);
      this.modal.show()
    }
  }

  saveEditor(){
    console.log(this.notesForm.value);
    const createdOn = new Date()
    const newNote = new Notes(this.notesForm.value.title, this.notesForm.value.content, createdOn)
    this.editorService.saveNotes(newNote)
    this.modal.hide();
    this.router.navigate(['dashboard']);
    this.notesForm.reset()
    
  }

  closeEditor(){
    this.router.navigate(['dashboard'])
    this.modal.hide()
  }
}
