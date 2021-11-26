import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
    private jwtToken: String;
    constructor (
    ) { }

    ngOnInit() {
        this.userId = sessionStorage.getItem('Id');
    }
}