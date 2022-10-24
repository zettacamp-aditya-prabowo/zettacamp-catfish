import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Card-app';

  data = [{
    title: "Title 1",
    desc: "Desc 1",
    status: "active",
  },{
    title: "Title 2",
    desc: "Desc 2",
    status: "active",
  }]
  
  addData(data: {title: string, desc: string, status: string}) {
    this.data.push({
      title: data.title,
      desc: data.desc,
      status: data.status
    })
  }
}
