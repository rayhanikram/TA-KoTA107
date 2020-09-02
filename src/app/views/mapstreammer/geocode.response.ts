export class GeocodeResponse {
 constructor (
  public place_id: string,
  public licence: string,
  public osm_type: string,
  public osm_id: string,
  public boundingbox: string[],
  public lat: number,
  public lon: number,
  public display_name: string,
  public place_rank: string,
  public category: string,
  public type: string,
  public importance: number){}
}