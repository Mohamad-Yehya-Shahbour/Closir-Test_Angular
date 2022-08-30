import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-xy-chart',
  templateUrl: './xy-chart.component.html',
  styleUrls: ['./xy-chart.component.css']
})
export class XyChartComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    let chart = am4core.create("xy-chart", am4charts.XYChart);
      let title = chart.titles.create();
      title.text = "Product Sales by Area";

      let data = [
        {"area": "Florida", "computers": 10, "cars":54, "boats": 10},
        {"area": "LA", "computers": 50, "cars":100, "boats": 25},
        {"area": "NY", "computers": 20, "cars":70, "boats": 12},
        {"area": "CA", "computers": 70, "cars":40, "boats": 10},
      ];
      chart.data = data;

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.title.text = "Area";
      categoryAxis.dataFields.category = "area";

      let valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxisY.title.text = "Sales";
      valueAxisY.renderer.minWidth = 20;

      let seriesNames = ["computers", "cars", "boats"];
      for (let i=0; i<3; i++){
        let series = chart.series.push(new am4charts.LineSeries()) ;
        series.dataFields.categoryX = "area";
        series.dataFields.valueY = seriesNames[i];
        series.name = seriesNames[i];

        let bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.strokeWidth = 2;
        bullet.circle.radius = 4;
        bullet.tooltipText = "Area: {categoryX} \n Sales: {valueY} {name}";
      }
      
      chart.legend = new am4charts.Legend();

  }

}
