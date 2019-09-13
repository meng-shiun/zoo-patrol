import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  constructor(
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  close(): void {
    const parentUrl = this.router.url.split('/').slice(0, -1).join('/');
    this.router.navigate([parentUrl, { outlets: { popup: null }}]);
  }

}
