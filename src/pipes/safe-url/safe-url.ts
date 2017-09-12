import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the SafeUrlPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'safeurl',
  pure: false
})
export class SafeUrlPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
   constructor(private domSanitizer: DomSanitizer) {
    }
  transform(value: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(value);
  }
}
