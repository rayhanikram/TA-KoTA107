import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {Subscription} from 'rxjs/Subscription';
import {ApiService} from '../../containers/default-layout/api.service';
import {DataTweets} from '../../containers/default-layout/datatweets.model';
import {Enrichments} from '../../containers/default-layout/enrichments.model';
import {Rekapitulasi} from '../../containers/default-layout/rekapitulasi.model';


@Component({
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {

 constructor(private tweetsApi: ApiService) {
  }
  
  year: number = 2020;
  enrichmentsListSubs: Subscription;
  tweetsListSubs: Subscription;
  enrichmentsList: any;
  tweetsList: DataTweets[];
  rekapList: any;
  jumlah_event : number;
  jumlah_tempat : number;
  jumlah_fasilitas : number;
  jumlah_penyebab : number;


to2017(value: any){
  this.year = 2017;
}
to2018(value: any){
  this.year = 2018;
}
to2019(value: any){
  this.year = 2019;
}
to2020(value: any){
  this.year = 2020;
}

  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value: any) {
            return value.charAt(0);
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

    public radarChartType = 'radar';

    public pieChartLabels: string[] = ['Pasteur', 'Kiaracondong', 'Riau'];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType = 'pie';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit(): void {


    this.tweetsApi
      .getRekap()
      .subscribe(res => {
        this.rekapList = res;
      },
      console.error
      );

    this.tweetsListSubs = this.tweetsApi
      .getTweets()
      .subscribe(res => {
          this.tweetsList = res;
        },
        console.error
      );

        this.enrichmentsListSubs = this.tweetsApi
      .getEnrichments()
      .subscribe(res => {
          this.enrichmentsList = res;
        },
        console.error
      );

  }
}
