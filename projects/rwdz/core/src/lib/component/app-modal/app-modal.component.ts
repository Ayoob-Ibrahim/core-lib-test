import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppIconComponent } from '../app-icon/app-icon.component';
import { AppTextComponent } from '../app-text/app-text.component';

@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrl: './app-modal.component.scss',
  imports: [CommonModule,AppIconComponent,AppTextComponent],
})
export class AppModalComponent {
  @Input() title: string = '';
  @Input() isCloseIcon: boolean = true;
  @Input() closeButton: boolean = true;
  @Input() component: any;
  @Input() isTopBox: boolean = true;
  customStyles: { [key: string]: any } = {};

  constructor(
    private dialogRef: MatDialogRef<AppModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: string,
    @Inject(MAT_DIALOG_DATA) maxHeight: string,
    @Inject(MAT_DIALOG_DATA) maxWidth: string
  ) {
    this.customStyles = { height: maxHeight, weight: maxWidth };
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
