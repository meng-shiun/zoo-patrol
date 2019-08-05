import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  tabs: string[] = ['Clients', 'Supplier', 'Ratecard', '+ New Client'];
  constructor() { }

  ngOnInit() {
  }

}
