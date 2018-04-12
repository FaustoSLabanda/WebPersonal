import { NgModule } from '@angular/core';
import { DateFormatPipe } from '@pipes/date-format.pipe';
import { MoneyPipe } from './money.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';




@NgModule({
  declarations: [
      DateFormatPipe,
      MoneyPipe,
      SafeHtmlPipe
  ],

  imports: [ ],
  exports: [ DateFormatPipe,
    MoneyPipe,
    SafeHtmlPipe ],
  providers: [],
})
export class PipesModule { }
