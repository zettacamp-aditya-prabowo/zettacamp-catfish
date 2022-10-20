import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-article1',
  templateUrl: './main-article1.component.html',
  styleUrls: ['./main-article1.component.css'],
  styles:['.online{font-weight:bold;}']
})
export class MainArticle1Component  {
  serverID:number=1;
  serverStatus:string='online';

  allowNewServer:boolean=false;
  serverCreationStatus: string = 'No server created...';
  serverName:string='anonymous';
  serverCreated:boolean=false;

  titles =['Title 1', 'Title 2', 'Title 3', 'Title 4']
  

  constructor() {
    setTimeout(()=>{this.allowNewServer = true;}, 200);
    this.serverStatus=Math.random()>0.1? 'online':'offline';
   }

   
    getServerStatus(){
      return this.serverStatus;
    }
    onServerCreate(){
      this.serverCreationStatus = this.serverName + ' server created...';
      this.serverCreated  = true;
    }
    getColor(){
      this.serverStatus==='online'?'green' : 'red';
    }
    onUpdateNameServer(event:Event){
      this.serverName=(<HTMLInputElement>event.target).value
    }
  
}
