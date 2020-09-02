export class DataTweets {

  constructor(
    public conversation_id : number,
    public created_at : number,
    public likes_count : number,
    public link : string,
    public date : Date,
    public time : string,
    public timezone : string,
    public user_id : number,
    public username : string,
    public name : string,
    public place : string,
    public tweet : string,
    public replies_count : number,
    public retweets_count : number,
    public retweet : string,
    public quote_url : string,
    public video : number
  ) { }
}