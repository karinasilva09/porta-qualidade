import { Component, OnInit } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-detalhes-defeitos',
  templateUrl: './detalhes-defeitos.component.html',
  styleUrls: ['./detalhes-defeitos.component.scss'],
  animations   : fuseAnimations
})
export class DetalhesDefeitosComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
