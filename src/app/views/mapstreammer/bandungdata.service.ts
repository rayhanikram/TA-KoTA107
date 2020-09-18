import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http,Response } from '@angular/http';
 
@Injectable()
export class BandungDataService {
 
  // location of GeoJSON file in server
  private _url: string[] = ['assets/Sukasari.json','assets/Coblong.json','assets/Babakan-Ciparay.json','assets/Bojongloa-Kaler.json','assets/Andir.json','assets/Cicendo.json','assets/Sukajadi.json','assets/Cidadap.json','assets/Bandung-Wetan.json','assets/Astanaanyar.json','assets/Regol.json','assets/Batununggal.json','assets/Lengkong.json','assets/Cibeunying-Kidul.json','assets/Bandung-Kulon.json','assets/Kiaracondong.json','assets/Bojongloa-Kidul.json','assets/Cibeunying-Kaler.json','assets/Sumur-Bandung.json','assets/Antapani.json','assets/Bandung-Kidul.json','assets/Buahbatu.json','assets/Rancasari.json','assets/Arcamanik.json','assets/Cibiru.json','assets/Ujungberung.json','assets/Gedebage.json','assets/Panyileukan.json','assets/Mandalajati.json','assets/Cinambo.json'];
 
  constructor(private _http: HttpClient ) {}
 

  getSukasariGeoJson() {
     return this._http.get(this._url[0]);
  }
  getCoblongGeoJson() {
     return this._http.get(this._url[1]);
  }
  getCiparayGeoJson() {
     return this._http.get(this._url[2]);
  }
  getBojongloaKalerGeoJson() {
     return this._http.get(this._url[3]);
  }
    getAndirGeoJson() {
     return this._http.get(this._url[4]);
  }
    getCicendoGeoJson() {
     return this._http.get(this._url[5]);
  }
    getSukajadiGeoJson() {
     return this._http.get(this._url[6]);
  }
    getCidadapGeoJson() {
     return this._http.get(this._url[7]);
  }
    getBandungWetanGeoJson() {
     return this._http.get(this._url[8]);
  }
    getAstanaanyarGeoJson() {
     return this._http.get(this._url[9]);
  }
  getRegolGeoJson() {
     return this._http.get(this._url[10]);
  }
    getBatununggalGeoJson() {
     return this._http.get(this._url[11]);
  }
    getLengkongGeoJson() {
     return this._http.get(this._url[12]);
  }
    getCibeunyingKidulGeoJson() {
     return this._http.get(this._url[13]);
  }
    getBandungKulonGeoJson() {
     return this._http.get(this._url[14]);
  }
    getKiaracondongGeoJson() {
     return this._http.get(this._url[15]);
  }
    getBojongloaKidulGeoJson() {
     return this._http.get(this._url[16]);
  }
    getCibeunyingKalerGeoJson() {
     return this._http.get(this._url[17]);
  }
    getSumurBandungGeoJson() {
     return this._http.get(this._url[18]);
  }
    getAntapaniGeoJson() {
     return this._http.get(this._url[19]);
  }
  getBandungKidulGeoJson() {
     return this._http.get(this._url[20]);
  }
  getBuahbatuGeoJson() {
     return this._http.get(this._url[21]);
  }
  getRancasariGeoJson() {
     return this._http.get(this._url[22]);
  }
  getArcamanikGeoJson() {
     return this._http.get(this._url[23]);
  }
  getCibiruGeoJson() {
     return this._http.get(this._url[24]);
  }
  getUjungberungGeoJson() {
     return this._http.get(this._url[25]);
  }
  getGedebageGeoJson() {
     return this._http.get(this._url[26]);
  }
  getPanyileukanGeoJson() {
     return this._http.get(this._url[27]);
  }
  getMandalajatiGeoJson() {
     return this._http.get(this._url[28]);
  }
  getCinamboGeoJson() {
     return this._http.get(this._url[29]);
  }
}