import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrl: './app-search.component.scss',
  imports: [CommonModule],
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
