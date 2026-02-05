import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AppSearchComponent {
    searchLabel: string;
    search: EventEmitter<string>;
    searchKey: string;
    searchSubject: Subject<string>;
    ngOnInit(): void;
    onSearch(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppSearchComponent, "app-search", never, { "searchLabel": { "alias": "searchLabel"; "required": false; }; "searchKey": { "alias": "searchKey"; "required": false; }; }, { "search": "search"; }, never, never, true, never>;
}
