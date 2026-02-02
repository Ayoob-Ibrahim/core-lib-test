import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private translate: TranslateService) {}

  handleError(error: HttpErrorResponse): string {
    let errorMessage = this.translate.instant('error.unknownError');

    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage =
        this.translate.instant('error.clientSideError') + error.error.message;
    } else {
      // Server-side error
      switch (error.status) {
        case 400:
          try {
            errorMessage = error.error
              ? this.parseToString(error.error)
              : this.translate.instant('error.badRequest');
          } catch (_) {
            errorMessage = this.translate.instant('error.badRequest');
          }
          break;
        case 401:
          errorMessage = this.translate.instant('error.401');
          this.handleUnauthorized();
          break;
        case 404:
          errorMessage = this.translate.instant('error.404');
          break;
        case 500:
          errorMessage = this.translate.instant('error.500');
          break;
        default:
          errorMessage =
            this.translate.instant('error.serverError') + error.message;
      }
    }

    return errorMessage;
  }

  private parseToString(error: any): string {
    return typeof error === 'string' ? error : JSON.stringify(error);
  }

  async handleUnauthorized() {
    window.location.reload();
  }
}
