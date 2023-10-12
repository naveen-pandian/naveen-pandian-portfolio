import { Component } from "@angular/core";
import {MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'dialog-component',
    templateUrl: './dialog.component.html'
  })
  export class dialogComponent{
    constructor(public dialogRef: MatDialogRef<dialogComponent>) {}
  }