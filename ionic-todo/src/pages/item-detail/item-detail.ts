import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
 
  title;
  priority;
  description;
  
 
  constructor(public navParams: NavParams){
 
  }
 
  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.priority = this.navParams.get('item').priority;
    this.description = this.navParams.get('item').description;
    
  }
 
}
