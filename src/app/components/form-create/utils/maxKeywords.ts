import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function maxKeywords(max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const keywordsArray = control.value as string[];
    if (keywordsArray && keywordsArray.length > max) {
      return { maxKeywords: { value: control.value } };
    }
    return null;
  };
}

