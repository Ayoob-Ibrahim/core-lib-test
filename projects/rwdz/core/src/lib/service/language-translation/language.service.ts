import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>(
    this.getSavedLanguage() || 'en'
  );
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor(private translate: TranslateService) {
    const defaultLang = this.currentLanguageSubject.value;
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
  }

  changeLanguage(language: string): void {
    this.translate.use(language).subscribe({
      next: () => {
        this.currentLanguageSubject.next(language);
        this.saveLanguage(language);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      error: (err) => {
        // console.error(`Failed to load translations for ${language}:`, err);
      },
    });
  }

  private saveLanguage(language: string): void {
    localStorage.setItem('$LANG', language);
  }

  private getSavedLanguage(): string | null {
    try {
      return localStorage.getItem('$LANG');
    } catch (e) {
      return 'en';
    }
  }
}
