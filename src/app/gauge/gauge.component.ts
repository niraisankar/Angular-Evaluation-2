import { Component, OnInit, NgZone } from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent {

  constructor(private zone: NgZone) { }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): any {
    this.zone.runOutsideAngular(() => {
        const GaugeChart = am4core.create('Gaugechartdiv', am4charts.GaugeChart);
        const axis = GaugeChart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
        const title = GaugeChart.titles.create();
        title.text = 'LIVE DAMAGE';
        title.fill = am4core.color('#000');
        axis.min = 0;
        axis.max = 100;
        axis.strictMinMax = true;
        axis.fill = am4core.color('#000');
        GaugeChart.innerRadius = -5;
        title.fill = am4core.color('white');
        const range = axis.axisRanges.create();
        range.value = 0;
        range.endValue = 30;
        range.axisFill.fillOpacity = 1;
        range.axisFill.fill = am4core.color('#5db2df');
        range.axisFill.zIndex = - 1;
        const range2 = axis.axisRanges.create();
        range2.value = 31;
        range2.endValue = 100;
        range2.axisFill.fillOpacity = 1;
        range2.axisFill.fill = am4core.color('purple');
        range2.axisFill.zIndex = - 1;
        const hand = GaugeChart.hands.push(new am4charts.ClockHand());
        hand.value = 30;
        hand.pin.disabled = true;
        hand.fill = am4core.color('#2D93AD');
        hand.stroke = am4core.color('#2D93AD');
        hand.radius = am4core.percent(80);
        hand.startWidth = 15;
    });
  }
}
