export class Rekapitulasi {

  constructor(
    public id : number,
    public jenis_rekap : string,
    public lable : string[],
    public datas : number[],
    public Tahun : Date[]
  ) { }
}