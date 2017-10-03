import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RadioPlayer} from '../../app/radio';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public btnplay = false;
    public btnpause =true;

  player:any;
  constructor(public navCtrl: NavController, player:RadioPlayer) {
    this.player=player;
  }

  play() {
  	this.player.play().then(() => {
  		console.log('Playing');
      });
        this.btnplay = true;
        this.btnpause = false;
        
    
  }
 
  pause() {
  	this.player.pause();
        this.btnplay =false;
        this.btnpause =true;
  }
  
}
