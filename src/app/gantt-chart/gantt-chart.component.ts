import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.css']
})
export class GanttChartComponent implements OnInit {

  dispDates = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
  plans = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];

  constructor() { }

  ngOnInit() {
  }

  /*
    計画がある日かどうか判定
  */
  hasPlan()　{
    return true;
  }

  /*
    計画がある日の初日かどうか
    塗りつぶし領域の左側を削る
  */
  isPlanEdgeS(items: string) {
    if (items === '1') {
      return true;
    }
  }

　 /*
    計画がある日の最終日かどうか
    塗りつぶし領域の右側を削る
  */
  isPlanEdgeE(items: string) {
    if (items === this.dispDates.length.toString() ) {
      return true;
    }
  }

}
