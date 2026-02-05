import { HttpErrorResponse } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class ErrorHandlerService {
    private translate;
    constructor(translate: TranslateService);
    handleError(error: HttpErrorResponse): string;
    private parseToString;
    handleUnauthorized(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorHandlerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ErrorHandlerService>;
}
