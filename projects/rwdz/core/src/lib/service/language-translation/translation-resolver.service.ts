import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../../service/language-translation/language.service';

@Injectable({ providedIn: 'root' })
export class TranslationResolverService implements Resolve<any> {
  constructor(
    private translate: TranslateService,
    private http: HttpClient,
    private languageService: LanguageService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.languageService.currentLanguage$.pipe(
      switchMap((language) => {
        const appLoader = new TranslateHttpLoader(
          this.http,
          '/assets/i18n/',
          '.json'
        );
        const modulePath = route.data['translationPath'];
        const moduleLoader = new TranslateHttpLoader(
          this.http,
          `/assets/i18n/${modulePath}/`,
          '.json'
        );

        const appTranslation = appLoader.getTranslation(language);
        const moduleTranslation = moduleLoader.getTranslation(language);

        return forkJoin([appTranslation, moduleTranslation]).pipe(
          map(([appTranslations, moduleTranslations]) => {
            const allTranslations = deepMerge(
              appTranslations,
              moduleTranslations
            );

            this.translate.setTranslation(language, allTranslations, true);
            this.translate.use(language);

            return true;
          })
        );
      })
    );
  }
}

function deepMerge<T>(target: T, source: Partial<T>): T {
  // Iterate over all keys in the source object
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const targetValue = (target as any)[key];
      const sourceValue = (source as any)[key];

      // Check if both target and source values are objects and not null
      if (
        typeof targetValue === 'object' &&
        targetValue !== null &&
        typeof sourceValue === 'object' &&
        sourceValue !== null
      ) {
        // Recursively merge nested objects
        (target as any)[key] = deepMerge(targetValue, sourceValue);
      } else {
        // Otherwise, assign the source value directly
        (target as any)[key] = sourceValue;
      }
    }
  }

  return target;
}
