import {Pipe,PipeTransform} from '@angular/core';
import { Text } from '@angular/compiler/src/i18n/i18n_ast';

@Pipe({
    name: 'btwDates'
  })
export class BtwDatesPipe implements PipeTransform {
  transform(records: Array<any>, _fromDate?: string, _toDate?: string): any {

    var fromDate = new Date(_fromDate);
    var toDate = new Date(_toDate);
    
    var recDate :Date;

    if((_fromDate==null)||(_toDate==null)) return records;
    if((_fromDate=="")||(_toDate=="")) return records;
    return records.filter(function(rec){
     recDate = new Date(rec.dateofEntry);
     return ((recDate>=fromDate)&&(recDate<=toDate));
    })   
  } 

  toExcel(records, fDate, tDate)
  {

  }
}
  