import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrl: './app-search.component.scss',
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
})
export class AppSearchComponent {
  @Input() searchLabel: string = 'Search';
  @Output() search = new EventEmitter<string>();
  @Input() searchKey: string = '';
  searchSubject = new Subject<string>();

  ngOnInit() {
    this.searchSubject.pipe(debounceTime(1000)).subscribe((query) => {
      this.search.emit(query);
    });
  }

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const query = inputElement?.value ?? '';
    this.searchSubject.next(query);
  }
}
