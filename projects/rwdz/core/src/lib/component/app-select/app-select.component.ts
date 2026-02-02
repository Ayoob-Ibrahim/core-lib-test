import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select',
  templateUrl: './app-select.component.html',
  styleUrl: './app-select.component.scss',
  imports: [CommonModule],
})
export class AppSelectComponent {
  @Input() label: string = '';
  @Input() searchLabel: string = '';
  @Input() selectAllLabel!: string;
  @Input() showLabel: boolean = false;
  @Input() showSearchBox: boolean = true;
  @Input() showAddBtn: boolean = false;
  @Input() addBtnDetails: any;
  @Input() resetFlag: boolean = false;
  @Input() getOption!: (option: any) => string;
  @Input() control!: FormControl;
  @Input() loading: boolean | any = false;
  @Input() hintStart: string | undefined = undefined;
  @Input() hintEnd: string | undefined = undefined;
  @Input() noOptions: string = 'No data found';
  // Fixed Options & Local Search
  @Input() dynamicOptions: boolean = true;
  @Input() compareKey: 'pk' | 'value' | 'id' | string = 'pk';

  @Output() onOptionSelect = new EventEmitter<any>();
  @Output() searchKey = new EventEmitter<string>();

  @Output() addBtnClicked = new EventEmitter<boolean>();

  @Input() optionsList: any[] = [];

  @ViewChild(MatSelect) matSelect: MatSelect | undefined;

  @Input() searchQuery: string = '';
  customStyles = {
    width: '100%',
  };
  isAddBtnClicked: boolean = false;

  constructor(private translate: TranslateService) {
    this.searchLabel = this.translate.instant(this.searchLabel || 'search');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resetFlag'] && this.resetFlag) {
      this.resetSelection();
    }
  }

  ngOnInit(): void {
    if (!this.getOption) {
      this.getOption = (option) => option.name;
    }
  }

  get btnIcon() {
    return this.addBtnDetails?.icon || 'add';
  }

  originalList: any[] = [];
  updateSearchQuery(query: string) {
    if (this.dynamicOptions) {
      this.searchKey?.emit(query);
    } else {
      if (this.originalList.length === 0) {
        this.originalList = this.optionsList;
      }
      this.optionsList = this.originalList.filter((option) => {
        return this.getOption(option)
          .toLowerCase()
          .includes(query.toLowerCase());
      });
    }
  }

  onChangeSelection(event: any) {
    this.onOptionSelect.emit(event.value);
  }

  resetSelection() {
    // this.selectedOption = null;
  }

  onAddBtnClicked() {
    this.isAddBtnClicked = !this.isAddBtnClicked;
    // this.selectedOption = null;
    this.matSelect?.close();
    this.addBtnClicked.emit(this.isAddBtnClicked);
  }

  compareOptions = (a: any, b: any) => {
    if (!a || !b) return false;
    return a[this.compareKey] === b[this.compareKey];
  };
}
