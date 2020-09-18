import { Component, OnInit, ElementRef, ViewChild, NgZone, Output } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import { BandungDataService } from "../mapstreammer/bandungdata.service";
import { NominatimService } from '../mapstreammer/nominatim.service';
import { GeocodeResponse } from "../mapstreammer/geocode.response";
import {Subscription} from 'rxjs/Subscription';
declare let L;
import 'leaflet';
declare var google;
declare var features;

@Component({
  selector: 'app-map',
  templateUrl: './mapsummarize.component.html',
   styleUrls: ['./mapsummarize.component.css'],
    providers: [BandungDataService, GoogleMapsAPIWrapper]
})


export class MapsummarizeComponent {
 @ViewChild('mapControl') mapControl: Component;
 filters = document.getElementById('filters');
 check_GeoJSON: boolean= false;
 check_Markerall: boolean= false;
 check_Penyebab: boolean= false;
  title: string = 'Peta Mapsummarize';
  lat: number = -6.914744;
  lng: number = 107.609810;
  zoom: number = 12;
  iterasi: number;
  SukasariObject: any;
  CoblongObject: any;
  CiparayObject: any;
  BojongloaKalerObject: any;
  AndirObject: any;
  CicendoObject: any;
  SukajadiObject: any;
  CidadapObject: any;
  BandungWetanObject: any;
  AstanaanyarObject: any;
  RegolObject: any;
  BatununggalObject: any;
  LengkongObject: any;
  CibeunyingKidulObject: any;
  BandungKulonObject: any;
  KiaracondongObject: any;
  BojongloaKidulObject: any;
  CibeunyingKalerObject: any;
  SumurBandungObject: any;
  AntapaniObject: any;
  BandungKidulObject: any;
  BuahbatuObject: any;
  RancasariObject: any;
  ArcamanikObject: any;
  CibiruObject: any;
  UjungberungObject: any;
  GedebageObject: any;
  PanyileukanObject: any;
  MandalajatiObject: any;
  CinamboObject: any;
  geocodeSubs: Subscription;
  geocode: any;
  map: any;
  Andir: number;
  Antapani: number;
  Arcamanik: number;
  Astana_Anyar: number;
  Babakan_Ciparay: number;
  Bandung_Kidul: number;
  Bandung_Kulon: number;
  Bandung_Wetan: number;
  Batununggal: number;
  Bojongloa_Kaler: number;
  Bojongloa_Kidul : number;
  Buahbatu : number;
  Cibeunying_Kaler: number;
  Cibeunying_Kidul: number;
  Cibiru: number;
  Cicendo: number;
  Cidadap: number;
  Cinambo: number;
  Coblong: number;
  Gedebage: number;
  Kiara_Condong: number;
  Lengkong: number;
  Mandalajati: number;
  Panyileukan: number;
  Rancasari: number;
  Regol: number;
  Sukajadi: number;
  Sukasari: number;
  Sumur_Bandung: number;
  Ujung_Berung: number;

  constructor(private _bandungDataService: BandungDataService,private nominatim: NominatimService, private _wrapper:GoogleMapsAPIWrapper, private _zone: NgZone, loader: MapsAPILoader) {}

clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

FieldsChange(values:any){
 this.check_GeoJSON = values.currentTarget.checked;
}

MarkerallChange(values:any){
 this.check_Markerall = values.currentTarget.checked;
}

PenyebabChange(values:any){
  this.check_Penyebab = values.currentTarget.checked;
}

   buildMap() {
    this._wrapper.getNativeMap().then((theMap)=>{
      this.map = theMap;
      console.log(theMap);
    }).catch((e)=>console.log(e));
  }


  ngOnInit() : void {

    this._bandungDataService.getSukasariGeoJson()
      .subscribe(resGeoJsonData => this.SukasariObject = resGeoJsonData);
    this._bandungDataService.getBandungWetanGeoJson()
      .subscribe(resGeoJsonData => this.BandungWetanObject = resGeoJsonData);
    this._bandungDataService.getCoblongGeoJson()
      .subscribe(resGeoJsonData => this.CoblongObject = resGeoJsonData);
    this._bandungDataService.getCiparayGeoJson()
      .subscribe(resGeoJsonData => this.CiparayObject = resGeoJsonData);
    this._bandungDataService.getBojongloaKalerGeoJson()
      .subscribe(resGeoJsonData => this.BojongloaKalerObject = resGeoJsonData);
    this._bandungDataService.getAndirGeoJson()
      .subscribe(resGeoJsonData => this.AndirObject = resGeoJsonData);
    this._bandungDataService.getCicendoGeoJson()
      .subscribe(resGeoJsonData => this.CicendoObject = resGeoJsonData);
    this._bandungDataService.getSukajadiGeoJson()
      .subscribe(resGeoJsonData => this.SukajadiObject = resGeoJsonData);
    this._bandungDataService.getCidadapGeoJson()
      .subscribe(resGeoJsonData => this.CidadapObject = resGeoJsonData);
    this._bandungDataService.getAstanaanyarGeoJson()
      .subscribe(resGeoJsonData => this.AstanaanyarObject = resGeoJsonData);
    this._bandungDataService.getRegolGeoJson()
      .subscribe(resGeoJsonData => this.RegolObject = resGeoJsonData);
    this._bandungDataService.getBatununggalGeoJson()
      .subscribe(resGeoJsonData => this.BatununggalObject = resGeoJsonData);
    this._bandungDataService.getLengkongGeoJson()
      .subscribe(resGeoJsonData => this.LengkongObject = resGeoJsonData);
    this._bandungDataService.getCibeunyingKidulGeoJson()
      .subscribe(resGeoJsonData => this.CibeunyingKidulObject = resGeoJsonData);
    this._bandungDataService.getBandungKulonGeoJson()
      .subscribe(resGeoJsonData => this.BandungKulonObject = resGeoJsonData);
    this._bandungDataService.getKiaracondongGeoJson()
      .subscribe(resGeoJsonData => this.KiaracondongObject = resGeoJsonData);
    this._bandungDataService.getBojongloaKidulGeoJson()
      .subscribe(resGeoJsonData => this.BojongloaKidulObject = resGeoJsonData);
    this._bandungDataService.getCibeunyingKalerGeoJson()
      .subscribe(resGeoJsonData => this.CibeunyingKalerObject = resGeoJsonData);
    this._bandungDataService.getSumurBandungGeoJson()
      .subscribe(resGeoJsonData => this.SumurBandungObject = resGeoJsonData);
    this._bandungDataService.getAntapaniGeoJson()
      .subscribe(resGeoJsonData => this.AntapaniObject = resGeoJsonData);
    this._bandungDataService.getBandungKidulGeoJson()
      .subscribe(resGeoJsonData => this.BandungKidulObject = resGeoJsonData);
    this._bandungDataService.getBuahbatuGeoJson()
      .subscribe(resGeoJsonData => this.BuahbatuObject = resGeoJsonData);
    this._bandungDataService.getRancasariGeoJson()
      .subscribe(resGeoJsonData => this.RancasariObject = resGeoJsonData);
    this._bandungDataService.getArcamanikGeoJson()
      .subscribe(resGeoJsonData => this.ArcamanikObject = resGeoJsonData);
    this._bandungDataService.getCibiruGeoJson()
      .subscribe(resGeoJsonData => this.CibiruObject = resGeoJsonData);
    this._bandungDataService.getUjungberungGeoJson()
      .subscribe(resGeoJsonData => this.UjungberungObject = resGeoJsonData);
    this._bandungDataService.getGedebageGeoJson()
      .subscribe(resGeoJsonData => this.GedebageObject = resGeoJsonData);
    this._bandungDataService.getPanyileukanGeoJson()
      .subscribe(resGeoJsonData => this.PanyileukanObject = resGeoJsonData);
    this._bandungDataService.getMandalajatiGeoJson()
      .subscribe(resGeoJsonData => this.MandalajatiObject = resGeoJsonData);
    this._bandungDataService.getCinamboGeoJson()
      .subscribe(resGeoJsonData => this.CinamboObject = resGeoJsonData);

 this.nominatim
      .getLocation()
      .subscribe((res) => {
          this.geocode = res;
          this.Andir = 0;
          this.Antapani = 0;
          this.Arcamanik = 0;
          this.Astana_Anyar = 0;
          this.Babakan_Ciparay = 0;
          this.Bandung_Kidul = 0;
          this.Bandung_Kulon = 0;
          this.Bandung_Wetan = 0;
          this.Batununggal = 0;
          this.Bojongloa_Kaler = 0;
          this.Bojongloa_Kidul  = 0;
          this.Buahbatu  = 0;
          this.Cibeunying_Kaler = 0;
          this.Cibeunying_Kidul = 0;
          this.Cibiru = 0;
          this.Cicendo = 0;
          this.Cidadap = 0;
          this.Cinambo = 0;
          this.Coblong = 0;
          this.Gedebage = 0;
          this.Kiara_Condong = 0;
          this.Lengkong = 0;
          this.Mandalajati = 0;
          this.Panyileukan = 0;
          this.Rancasari = 0;
          this.Regol = 0;
          this.Sukajadi = 0;
          this.Sukasari = 0;
          this.Sumur_Bandung = 0;
          this.Ujung_Berung = 0;
          for(var i = 0; i < this.geocode.length; i++){
            if(this.geocode[i].kecamatan == "Sukasari"){
                   this.Sukasari = this.Sukasari + 1;
          }
          if(this.geocode[i].kecamatan == "Babakan Ciparay"){
                   this.Babakan_Ciparay = this.Babakan_Ciparay + 1;
          }
          if(this.geocode[i].kecamatan == "Arcamanik" || this.geocode[i].kecamatan == "Kecamatan Arcamanik"){
                   this.Arcamanik = this.Arcamanik + 1;
          }
          if(this.geocode[i].kecamatan == "Bandung Kidul" || this.geocode[i].kecamatan == "Kecamatan Bandung Kidul"){
                   this.Bandung_Kidul = this.Bandung_Kidul + 1;
          }
          if(this.geocode[i].kecamatan == "Bojongloa Kidul" || this.geocode[i].kecamatan == "Kecamatan Bojongloa Kidul"){
                   this.Bojongloa_Kidul = this.Bojongloa_Kidul + 1;
          }
          if(this.geocode[i].kecamatan == "Cibeunying Kaler" || this.geocode[i].kecamatan == "Kecamatan Cibeunying Kaler"){
                   this.Cibeunying_Kaler = this.Cibeunying_Kaler + 1;
          }
          if(this.geocode[i].kecamatan == "Cibeunying Kidul" || this.geocode[i].kecamatan == "Kecamatan Cibeunying Kidul"){
                   this.Cibeunying_Kidul = this.Cibeunying_Kidul + 1;
          }
          if(this.geocode[i].kecamatan == "Cibiru" || this.geocode[i].kecamatan == "Kecamatan Cibiru"){
                   this.Cibiru = this.Cibiru + 1;
          }
          if(this.geocode[i].kecamatan == "Cinambo" || this.geocode[i].kecamatan == "Kecamatan Cinambo"){
                   this.Cinambo = this.Cinambo + 1;
          }
          if(this.geocode[i].kecamatan == "Coblong" || this.geocode[i].kecamatan == "Kecamatan Coblong"){
                   this.Coblong = this.Coblong + 1;
          }
          if(this.geocode[i].kecamatan == "Kiaracondong" || this.geocode[i].kecamatan == "Kecamatan Kiaracondong"){
                   this.Kiara_Condong = this.Kiara_Condong + 1;
          }
          if(this.geocode[i].kecamatan == "Mandalajati" || this.geocode[i].kecamatan == "Kecamatan Mandalajati"){
                   this.Mandalajati = this.Mandalajati + 1;
          }
          if(this.geocode[i].kecamatan == "Panyileukan" || this.geocode[i].kecamatan == "Kecamatan Panyileukan"){
                   this.Panyileukan = this.Panyileukan + 1;
          }
          if(this.geocode[i].kecamatan == "Rancasari" || this.geocode[i].kecamatan == "Kecamatan Rancasari"){
                   this.Rancasari = this.Rancasari + 1;
          }
          if(this.geocode[i].kecamatan == "Regol" || this.geocode[i].kecamatan == "Kecamatan Regol"){
                   this.Regol = this.Regol + 1;
          }
          if(this.geocode[i].kecamatan == "Sukajadi" || this.geocode[i].kecamatan == "Kecamatan Sukajadi"){
                   this.Sukajadi = this.Sukajadi + 1;
          }
          if(this.geocode[i].kecamatan == "Sumurbandung" || this.geocode[i].kecamatan == "Kecamatan Sumurbandung"){
                   this.Sumur_Bandung = this.Sumur_Bandung + 1;
          }
          if(this.geocode[i].kecamatan == "Ujung Berung" || this.geocode[i].kecamatan == "Kecamatan Ujung Berung"){
                   this.Ujung_Berung = this.Ujung_Berung + 1;
          }
          if(this.geocode[i].kecamatan == "Bandung Kulon" || this.geocode[i].kecamatan == "Kecamatan Bandung Kulon"){
                   this.Bandung_Kulon = this.Bandung_Kulon + 1;
          }
          if(this.geocode[i].kecamatan == "Andir" || this.geocode[i].kecamatan == "Kecamatan Andir"){
                   this.Andir = this.Andir + 1;
          }
          if(this.geocode[i].kecamatan == "Kecamatan Antapani"){
                   this.Antapani = this.Antapani + 1
          }
          if(this.geocode[i].kecamatan == "Kecamatan Batununggal"){
                   this.Batununggal = this.Batununggal + 1;
          }
          if(this.geocode[i].kecamatan == "Kecamatan Bojongloa Kaler"){
                   this.Bojongloa_Kaler = this.Bojongloa_Kaler + 1;
          }
          if(this.geocode[i].kecamatan == "Cidadap"){
                   this.Cidadap = this.Cidadap + 1;
          }
          if(this.geocode[i].kecamatan == "Kecamatan Bandung Wetan"){
                   this.Bandung_Wetan = this.Bandung_Wetan + 1;
          }
          if(this.geocode[i].kecamatan == "Kecamatan Buahbatu"){
                   this.Buahbatu = this.Buahbatu + 1;
          }
          if(this.geocode[i].kecamatan == "Lengkong"){
                   this.Lengkong = this.Lengkong + 1;
          }
          if(this.geocode[i].kecamatan == "Kecamatan Astanaanyar"){
                this.Astana_Anyar = this.Astana_Anyar + 1;
          }
          if(this.geocode[i].kecamatan == "Gegebage" || this.geocode[i].kecamatan == "Gedebage" || this.geocode[i].kecamatan == "Kecamatan Gegebage"){
                this.Gedebage = this.Gedebage + 1;
          }
          if(this.geocode[i].kecamatan == "Cicendo"){
                   this.Cicendo = this.Cicendo + 1;
          }
          if(this.geocode[i].kecamatan == "NULL"){
                   this.Cicendo = this.Cicendo + 0;
          }
          }

        },
        console.error
      );
     this.buildMap();
     


  }

  clicked(clickEvent) {
    //console.log(clickEvent);
    console.log(this.map);
  }
 
  styleFunc(feature: any): any {
    
    return {
      fillColor: '#A4C639',
      strokeColor: '#A4C639',
      strokeWeight: 1
    };
  }


}
