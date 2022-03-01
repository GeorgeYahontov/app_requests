import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "../item";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  item: Item = new Item(null,null)
  items: Item[] = [];
  itemsUrl = '/items'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  getData():void{
    this.http.get<Item[]>(this.itemsUrl).subscribe(
      res => this.items = res,
      err => console.log('error',err)
    )
  }
  postData():void{
    this.http.post<Item>(this.itemsUrl, this.item).subscribe(
      res => this.items.push(res),
      err => console.log(err)
    )
  }


  clearAndGet(): void {
    this.items.length = 0
    this.getData()
  }

}





