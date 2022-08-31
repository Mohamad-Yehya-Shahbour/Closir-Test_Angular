import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let piechart = am4core.create("pie-chart", am4charts.PieChart);

    // Create pie series
    let series = piechart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";

    // Add data
    piechart.data = [{
      "country": "Lithuania",
      "litres": 501.9
    }, {
      "country": "Czech",
      "litres": 301.9
    }, {
      "country": "Ireland",
      "litres": 201.1
    }, {
      "country": "Germany",
      "litres": 165.8
    },
    //  {
    //   "country": "Australia",
    //   "litres": 139.9
    // },
    // {
    //   "country": "Austria",
    //   "litres": 128.3
    // }, {
    //   "country": "UK",
    //   "litres": 99
    // }, {
    //   "country": "Belgium",
    //   "litres": 60
    // }, {
    //   "country": "The Netherlands",
    //   "litres": 50
    // }
    ];

    // And, for a good measure, let's add a legend
    piechart.legend = new am4charts.Legend();
  }

}
