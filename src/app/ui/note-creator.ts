import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'note-creator',
    template: `
    <div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">
      <form class="row" (submit)="onCreateNote()">
        <input
          type="text"
          [(ngModel)]="newNote.title"
          name="newNoteTitle"
          placeholder="Title"
          class="col-xs-10 title"
          *ngIf="fullForm"
        >
        <input
          type="text"
          (focus)="toggle(true)"
          [(ngModel)]="newNote.value"
          name="newNoteValue"
          placeholder="Take a note..."
          class="col-xs-10"
        >
        <div class="actions col-xs-12 row between-xs">
            <div class="col-xs-3">
                <color-picker (selected)="onColorSelect($event)" [colors]="colors"></color-picker>
            </div>
          <button
            type="submit"
            class="btn-light"
            *ngIf="fullForm"
           >
            Done
          </button>
        </div>
      </form>
    </div>
    `,
    styles: [`
        .note-creator {
          padding: 20px;
          background-color: white;
          border-radius: 3px;
        }
        .title {
          font-weight: bold;
          color: rgba(0,0,0,0.8);
        }
        .full {
          height: 100px;
        }
    `]
})

export class NoteCreator {

    @Output() createNote = new EventEmitter();

    colors: string[] = ['salmon', 'lightblue', 'yellow', 'lightgrey', 'white', 'lightgreen', 'lightpink', 'orange'];

    newNote = {
        title: '',
        value: '',
        color: 'white'
    };

    fullForm: boolean = false;

    onCreateNote() {
        const { title, value, color } = this.newNote;

        if (title && value) {
            this.createNote.next({title, value, color});
            this.reset();
        }
    }

    reset() {
        this.newNote = {
            title: '',
            value: '',
            color: 'white'
        };

        this.toggle(false);
    }

    toggle(value: boolean) {
        this.fullForm = value;
    }

    onColorSelect(color: string) {
        this.newNote.color = color;
    }

}
