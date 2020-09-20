export class ClassificationResponse {
 constructor (
  public place_id: string,
  public data_text: string[],
  public atribut_event: string[],
  public atribut_tempat: string[],
  public atribut_tanggal: Date,
  public atribut_waktu: string[],
  public atribut_fasilitas: string[],
  public atribut_penyebab: string[],
  public lat: number,
  public lon: number,
  public kecamatan: string
){}
}