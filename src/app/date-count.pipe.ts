import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
 })
 export class DateCountPipe implements PipeTransform {
  transform(value: any): number {
    let today:Date = new Date();
    let todayJustDate:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayJustDate)
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/secondsInDay;
    if (dateCounter < 1){
      return 0;
    }
    else {
      return dateCounter;
    }
  }
 }