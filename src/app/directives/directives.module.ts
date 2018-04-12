import { NgModule } from '@angular/core';
import { NgTableFilteringDirective } from './ng-table-filtering.directive';
import { NgTableSortingDirective } from './ng-table-sorting.directive';




@NgModule({
  declarations: [    
  NgTableFilteringDirective,   
  NgTableSortingDirective],

  imports: [ ],
  exports: [
    NgTableFilteringDirective ,
    NgTableSortingDirective
       ],
  providers: [],
})
export class DirectivesModule { }
