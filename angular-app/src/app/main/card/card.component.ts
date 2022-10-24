import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  serverID:number=1;
  serverStatus:string='online';

  NewServer:boolean =false;
  serverCreationStatus:string = 'No server created...';
  server:string='anonymous';
  serverCreated:boolean=false;

  titles =['Title 1', 'Title 2', 'Title 3', 'Title 4','Title 5']
  

  constructor() {
    setTimeout(()=>{this.NewServer = true;}, 200);
    this.serverStatus=Math.random()>0.1? 'online':'offline';
   }

   
    getServerStatus(){
      return this.serverStatus;
    }

    Create(){
      this.serverCreationStatus = this.server + ' server created...';
      this.serverCreated  = true;
    }
    getColor(){
      this.serverStatus==='online'?'green' : 'red';
    }
    onUpdateNameServer(event:Event){
      this.server=(<HTMLInputElement>event.target).value
    }
}
