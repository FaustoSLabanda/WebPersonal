import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(content, tipo?: number) {
    if (tipo && tipo === 1) {
      const dataPdf = 'data:application/pdf;base64,' + content;
      return this.sanitizer.bypassSecurityTrustResourceUrl(dataPdf);
    } else if (tipo && tipo === 2) {
      const imgData = 'data:image/jpg;base64,' + content;
      return this.sanitizer.bypassSecurityTrustUrl(imgData);
    } else {
      return this.sanitizer.bypassSecurityTrustHtml(content);
    }
  }

}

