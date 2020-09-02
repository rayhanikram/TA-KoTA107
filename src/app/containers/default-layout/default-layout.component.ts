import {Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import {Subscription} from 'rxjs/Subscription';
import {DataTweetsApiService} from './datatweets-api.service';
import {DataTweets} from './datatweets.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {

 constructor(private tweetsApi: DataTweetsApiService) {
  }

  tweetsListSubs: Subscription;
  tweetsList: DataTweets[];
  tweetdeck: any
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

// Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

 // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = false;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  ngOnInit() {

this.tweetsListSubs = this.tweetsApi
      .getTweets()
      .subscribe(res => {
          this.tweetsList = res;
        },
        console.error
      );
 
  var data = {
  "data_tweet" : [{ "type": "Feature", "properties": { "tweet": "Jl raya garut-bandung terjadi kemacetan d karenakan penumpukan kendaraan yg telah liburan dan perbaikan jalan tol d Cileunyi  @ClickBandung @infobandung #BesokSenin pictwittercom/PZiOTdpW98 – di Kawasan Industri Dwipapuri Abadi", "username": "@rudyromdiany", "time": "18:30" }},
  { "type": "Feature", "properties": { "tweet": "Barangkali arah ke RSHS dari timur pas turunan fly over perempatan jl pasteur & jl cipaganti dstnya memang sering padat tersendat akibat volume kendaraan dan kebijakan satu arah..", "username": "@ikadarrusman","time": "17:52" }},
  { "type": "Feature", "properties": { "tweet": "#BANDUNG #MACET Jl Bojongsoang - Jl Dayeuhkolot #PRFMBandung", "username": "@dimanamacetid","time": "16:40" }},
  { "type": "Feature", "properties": { "tweet": "Hadew cancel gara2 telat jemput, jalannya dari Dago, cipaganti sampe Cihampelas macet… (at Eight Fully) [pic] —  https://pathcom/p/1LML8H ", "username": "@irwandh","time": "16:15" }},
  ]
  
  }

  this.tweetdeck = data.data_tweet;
  }

  ngOnDestroy() {
    this.tweetsListSubs.unsubscribe();
  }
}
