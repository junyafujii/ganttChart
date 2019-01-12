import { Component, OnInit, ViewChild,ViewContainerRef,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.css']
})
export class GanttChartComponent implements OnInit {

  //表示月
  dispMonths = [
                  { 
                    'month_name':'2019/01',
                    'span': '25'
                  },
                  { 
                    'month_name':'2019/02',
                    'span': '15'
                  },
               ];
  //表示日数
  dispDates = ['7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];

  projectName = 'FIRST_PROJECT';
  projectStart = '20190107';
  projectEnd = '20190215';

  taskData = [
    {
      'project_no': '1'
      ,'task_no': '1'
      ,'task_name': 'TASK1'
      ,'seq': '1'
      ,'charge_id': '山田　太郎'
      ,'start_dt': '20190107'
      ,'end_dt': '20190109'
      ,'term': '2'
      ,'range': '0'
    },{
      'project_no': '1'
      ,'task_no': '2'
      ,'task_name': 'TASK2'
      ,'seq': '2'
      ,'charge_id': '井上　次郎'
      ,'start_dt': '20190110'
      ,'end_dt': '20190121'
      ,'term': '11'
      ,'range': '3'
    },{
      'project_no': '1'
      ,'task_no': '3'
      ,'task_name': 'TASK3'
      ,'seq': '3'
      ,'charge_id': '佐藤　A作'
      ,'start_dt': '20190121'
      ,'end_dt': '20190215'
      ,'term': '25'
      ,'range': '14'
    },
  ];0


  @ViewChild('chart', { read: ViewContainerRef })
   private chart: ViewContainerRef;

  constructor() {
   }

  ngOnInit() {
    setTimeout(() => {
      this.AdjustBars();
    }, 10);
  }

  AdjustBars(){
    let maxCount: number;
    let counter: number;
    let leftPosition: any;
    let selecter:any;
    let base: any;

    base = this.chart.element.nativeElement

    maxCount = this.taskData.length;
    for(counter=0; counter < maxCount; counter++){
      leftPosition = base.querySelector('#task_' + counter.toString());
      if ( leftPosition!==null ){
        selecter = base.querySelector('#bar_'  + counter.toString());
        selecter.style.left = (leftPosition.offsetLeft + 200 + 24 + parseInt(this.taskData[counter].range)*20).toString() + 'px';
        selecter.style.top = (leftPosition.getBoundingClientRect().top+1.5).toString() + 'px';
        selecter.style.width = (parseInt(this.taskData[counter].term)*20).toString() + 'px';
      }
    }
  }
}
