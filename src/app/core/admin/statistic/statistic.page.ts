/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable no-var */
import { AduanService } from './../../../shared/services/aduan.service';
import { Aduan } from './../../../shared/model/aduan.model';
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */
import { Router } from '@angular/router';
import { Platform, ModalController } from '@ionic/angular';
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
import { AduanListPage } from '../../superadmin/list/aduan-list/aduan-list.page';
import { AduanTabsPage } from '../../superadmin/aduan-tabs/aduan-tabs.page';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.page.html',
  styleUrls: ['./statistic.page.scss'],
})
export class StatisticPage implements OnInit, OnDestroy {
  isAdmin = false;
  isSuperAdmin = false;
  aduans: Aduan[];
  aduanSelesai: Aduan[] = [];
  aduanDitolak: Aduan[] = [];
  aduanPerhatian: Aduan[] = [];
  aduanKKR: Aduan[] = [];
  aduanPBT: Aduan[] = [];
  aduanLLM: Aduan[] = [];
  aduanTotal: any;
  isJumlahAduan = true;
  isAduanAgensi = false;
  private chart: am4charts.XYChart;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private zone: NgZone,
    private authService: AuthService,
    private router: Router,
    private platform: Platform,
    private aduanService: AduanService,
    private modalCtrl: ModalController
  ) {
    const role = this.authService.userRole;

    this.platform.backButton.subscribeWithPriority(10, () => {
      if (role === 'admin') {
        this.router.navigate(['/admin/dashboard']);
      } else if (role === 'super_admin') {
        this.router.navigate(['/superadmin/dashboard']);
      }
    });

    if (role === 'admin') {
      this.isAdmin = true;
    } else if (role === 'super_admin') {
      this.isSuperAdmin = true;
    }
  }

  ngOnInit() {
    this.getAduanStats();
  }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }
  getChart() {
    // Chart code goes in here
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
      // Themes begin
      am4core.useTheme(am4themes_material);
      am4core.useTheme(am4themes_animated);
      am4core.addLicense('ch-custom-attribution');
      am4core.options.autoDispose = true;
      // Themes end

      // Create chart instance
      const chart = am4core.create('chartdiv', am4charts.PieChart);

      // Add and configure Series

      const pieSeries = chart.series.push(new am4charts.PieSeries());
      if (this.isJumlahAduan) {
        pieSeries.dataFields.value = 'jumlah';
        pieSeries.dataFields.category = 'status';
      } else if (this.isAduanAgensi) {
        pieSeries.dataFields.value = 'jumlah';
        pieSeries.dataFields.category = 'agensi';
      }

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

      if (this.isJumlahAduan) {
        chart.data = [
          {
            status: 'Dalam Perhatian',
            jumlah: this.aduanPerhatian.length,
            color: am4core.color('#3880ff'),
          },
          {
            status: 'Selesai',
            jumlah: this.aduanSelesai.length,
            color: am4core.color('#28EE00'),
          },
          {
            status: 'Ditolak',
            jumlah: this.aduanDitolak.length,
            color: am4core.color('#FF3333'),
          },
        ];
      } else if (this.isAduanAgensi) {
        chart.data = [
          {
            agensi: 'LLM',
            jumlah: this.aduanLLM.length,
            color: am4core.color('#34c0eb'),
          },
          {
            agensi: 'KKR/JKR',
            jumlah: this.aduanKKR.length,
            color: am4core.color('#28EE00'),
          },
          {
            agensi: 'PBT',
            jumlah: this.aduanPBT.length,
            color: am4core.color('#eb8634'),
          },
        ];
      }
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

  async openAduanList() {
    if (this.isAdmin) {
      this.router.navigate(['/admin/aduan-tabs/selesai']);
    } else if (this.isSuperAdmin) {
      this.router.navigate(['/superadmin/aduan-tabs/selesai']);
    }
  }

  selectAduan($event) {
    console.log($event.target.value);
    const sel = $event.target.value;

    if (sel === 'jumlah_aduan') {
      this.isJumlahAduan = true;
      this.isAduanAgensi = false;
      this.getAduanStats();
    } else if (sel === 'jumlah_aduan_bulan') {
    } else if (sel === 'jumlah_aduan_agensi') {
      this.isJumlahAduan = false;
      this.isAduanAgensi = true;
      this.getAduanByAgency();
    } else if (sel === 'jumlah_aduan_pengguna') {
    }
  }

  getAduanStats() {
    this.aduanSelesai = [];
    this.aduanDitolak = [];
    this.aduanPerhatian = [];
    this.aduanService.getAduans().subscribe((res) => {
      console.log(res.length);
      this.aduanTotal = res.length;
      this.aduans = res;
      res.forEach((e) => {
        // console.log(e.status_code);
        if (e.status_code === 'P') {
          this.aduanPerhatian.push(e);
        } else if (e.status_code === 'S') {
          this.aduanSelesai.push(e);
        } else if (e.status_code === 'R') {
          this.aduanDitolak.push(e);
        }
      });
      this.getChart();

      console.log(this.aduanSelesai.length, this.aduanDitolak.length);
    });
  }

  getAduanByAgency() {
    this.aduanKKR = [];
    this.aduanPBT = [];
    this.aduanLLM = [];
    this.aduanService.getAduans().subscribe((res) => {
      console.log(res.length);
      // this.aduanTotal = res.length;
      this.aduanTotal = this.nFormatter(res.length, 1);
      this.aduans = res;
      res.forEach((e) => {
        // console.log(e.complaint_category);
        if (e.complaint_category === '1') {
          this.aduanLLM.push(e);
        } else if (
          e.complaint_category === '2' ||
          e.complaint_category === '3' ||
          e.complaint_category === '99'
        ) {
          this.aduanKKR.push(e);
        } else if (e.complaint_category === '4') {
          this.aduanPBT.push(e);
        }
      });
      this.getChart();

      console.log(this.aduanLLM.length, this.aduanPBT.length);
    });
  }

  nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'k' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'G' },
      { value: 1e12, symbol: 'T' },
      { value: 1e15, symbol: 'P' },
      { value: 1e18, symbol: 'E' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find((item) => {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
      : '0';
  }
}
