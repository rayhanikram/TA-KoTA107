import {Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import {Subscription} from 'rxjs/Subscription';
import {ApiService} from './api.service';
import {DataTweets} from './datatweets.model';
import {Enrichments} from './enrichments.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {

 constructor(private tweetsApi: ApiService) {
  }
  
  enrichmentsListSubs: Subscription;
  tweetsListSubs: Subscription;
  enrichmentsList: any;
  tweetsList: DataTweets[];
  public sidebarMinimized = false;
  public navItems = navItems;
  jumlah_event : number;
  jumlah_tempat : number;
  jumlah_fasilitas : number;
  jumlah_penyebab : number;
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
  public barChartLabels: string[] = ['2017', '2018', '2019', '2020'];
  public barChartType = 'bar';
  public barChartLegend = false;

  public barChartData: any[] = [
    {data: [0, 0, 0, 81], label: 'Data status Macet'},
    {data: [0, 0, 0, 19], label: 'Data status Padat'}
  ];



  ngOnInit() {

this.tweetsListSubs = this.tweetsApi
      .getTweets()
      .subscribe(res => {
          this.tweetsList = res;
        },
        console.error
      );

this.tweetsApi
      .getEnrichments().subscribe((res) => {
          this.enrichmentsList = res;
            this.jumlah_event =  0;
            this.jumlah_tempat = 0;
            this.jumlah_fasilitas = 0;
            this.jumlah_penyebab = 0;
  for (var i = 0; i < this.enrichmentsList.length; i++) {
  if ( this.enrichmentsList[i].atribut_event[0] == "NULL") {
  this.jumlah_event = this.jumlah_event + 0;
  }
   if ( this.enrichmentsList[i].atribut_event[0] != "NULL") {
  this.jumlah_event = this.jumlah_event + this.enrichmentsList[i].atribut_event.length
  }

  }

  for (var i = 0; i < this.enrichmentsList.length; i++) {
  if ( this.enrichmentsList[i].atribut_tempat[0] == "NULL") {
  this.jumlah_tempat = this.jumlah_tempat + 0;
  }
   if ( this.enrichmentsList[i].atribut_tempat[0] != "NULL") {
  this.jumlah_tempat = this.jumlah_tempat + this.enrichmentsList[i].atribut_tempat.length
  }

  }

  for (var i = 0; i < this.enrichmentsList.length; i++) {
  if ( this.enrichmentsList[i].atribut_fasilitas[0] == "NULL") {
  this.jumlah_fasilitas = this.jumlah_fasilitas + 0;
  }
   if ( this.enrichmentsList[i].atribut_fasilitas[0] != "NULL") {
  this.jumlah_fasilitas = this.jumlah_fasilitas + this.enrichmentsList[i].atribut_fasilitas.length
  }

  }

  for (var i = 0; i < this.enrichmentsList.length; i++) {
  if ( this.enrichmentsList[i].atribut_penyebab[0] == "NULL") {
  this.jumlah_penyebab = this.jumlah_penyebab + 0;
  }
   if ( this.enrichmentsList[i].atribut_penyebab[0] != "NULL") {
  this.jumlah_penyebab = this.jumlah_penyebab + this.enrichmentsList[i].atribut_penyebab.length
  }

  }
        }
      ,
        console.error
      );

 


  }

  ngOnDestroy() {
    this.tweetsListSubs.unsubscribe();
    this.enrichmentsListSubs.unsubscribe();
  }
}
