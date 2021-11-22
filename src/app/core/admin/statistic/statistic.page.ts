/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */
import {
  Component,
  Inject,
  NgZone,
  OnInit,
  PLATFORM_ID,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_material from '@amcharts/amcharts4/themes/material';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.page.html',
  styleUrls: ['./statistic.page.scss'],
})
export class StatisticPage implements OnInit, AfterViewInit, OnDestroy {
  isAdmin = false;
  isSuperAdmin = false;
  private chart: am4charts.XYChart;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private zone: NgZone,
    private authService: AuthService
  ) {
    const role = this.authService.userRole;
    console.log(role);
    if (role === 'admin') {
      this.isAdmin = true;
    } else if (role === 'super_admin') {
      this.isSuperAdmin = true;
    }
  }

  ngOnInit() {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }
  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      /* Chart code */
      // Themes begin
      am4core.useTheme(am4themes_material);
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      const chart = am4core.create('chartdiv', am4charts.PieChart);

      // Add and configure Series
      const pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'litres';
      pieSeries.dataFields.category = 'country';

      // Let's cut a hole in our Pie chart the size of 30% the radius
      chart.innerRadius = am4core.percent(30);

      // Put a thick white border around each Slice
      pieSeries.slices.template.stroke = am4core.color('#fff');
      pieSeries.slices.template.strokeWidth = 3;
      pieSeries.slices.template.strokeOpacity = 1;
      pieSeries.slices.template.propertyFields.fill = 'color';
      // change the cursor on hover to make it apparent the object can be interacted with
      pieSeries.slices.template.cursorOverStyle = [
        {
          property: 'cursor',
          value: 'pointer',
        },
      ];

      pieSeries.ticks.template.disabled = true;
      pieSeries.alignLabels = false;
      pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
      pieSeries.labels.template.radius = am4core.percent(-40);
      pieSeries.labels.template.relativeRotation = 90;
      pieSeries.labels.template.fill = am4core.color('white');

      // Create a base filter effect (as if it's not there) for the hover to return to
      const shadow = pieSeries.slices.template.filters.push(
        new am4core.DropShadowFilter()
      );
      shadow.opacity = 0;

      // Create hover state
      const hoverState = pieSeries.slices.template.states.getKey('hover'); // normally we have to create the hover state, in this case it already exists

      // Slightly shift the shadow and make it more prominent on hover
      const hoverShadow = hoverState.filters.push(
        new am4core.DropShadowFilter()
      );
      hoverShadow.opacity = 0.7;
      hoverShadow.blur = 5;

      // Add a legend
      chart.legend = new am4charts.Legend();
      chart.legend.position = 'top';
      chart.legend.labels.template.fill = am4core.color('#fff');
      chart.legend.valueLabels.template.disabled = true;

      chart.data = [
        {
          country: 'Selesai',
          litres: 201.9,
          color: am4core.color('#28EE00'),
        },
        {
          country: 'Ditolak',
          litres: 165.8,
          color: am4core.color('#FF3333'),
        },
      ];
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
