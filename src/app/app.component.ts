import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 
})
export class AppComponent  { name = 'Angular'; 
 

message = 'Click on a button';
  textBtnConfig = {
    styles: {
      position: 'relative',
      width: '50px',
      height: '40px',
      backgroundColor: '#f92672',
      color: '#fff',
      fontFamily: 'sans-serif',
      fontSize: '20px',
      borderRadius: '10px',
      marginTop: '30px'
    },
    text: 'click here'
  };

  

  imgBtnConfig = {
    styles: {
      position: 'relative',
      width: '100px',
      height: '100px'
    },
    src: './assets/conversation.png'
  };

  onClickEventReceived(event: string) {
    this.message = event;
  }
}

