import { Component, OnInit } from '@angular/core';
import {AnimationController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-emisor',
  templateUrl: './emisor.page.html',
  styleUrls: ['./emisor.page.scss'],
})
export class EmisorPage implements OnInit {

  constructor(private animationCtrl: AnimationController, private router:Router) { }

  goToReceptor(){
    let navigationExtras:NavigationExtras = {
      queryParams:{
          mensaje: 'Emisor!!!'
      }
    }
    this.router.navigate(['/receptor'],navigationExtras)
  }

  ngAfterViewInit(){
    const animation = this.animationCtrl.create()
      .addElement(document.querySelector(".animacion"))
      .duration(2000)
      .iterations(Infinity)
      .fromTo('opacity', '1', '0');

    animation.play()
  }
  

  goToReceptorSinVariable(){
    this.router.navigate(['/receptor'])
  }

  goToHome(){
    this.router.navigate(['/home'])
  }

  ngOnInit() {
  }

}