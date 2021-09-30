import { Component } from '@angular/core';
import {AnimationController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private animationCtrl: AnimationController, private router:Router) { 
    
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

  goToReceptor(){
    let navigationExtras:NavigationExtras = {
      queryParams:{
          mensaje: 'Emisor!!!'
      }
    }
    this.router.navigate(['/receptor'],navigationExtras)
  }

  goToLogin(){
    this.router.navigate(['/login'])
  }
  
}