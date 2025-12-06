import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [Menubar, RouterOutlet],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      { label: 'Child', icon: 'pi  pi-home', routerLink: 'child' },
      { label: 'Parent', icon: 'pi pi-fw pi-info-circle' ,routerLink:'parent'},

    ];
  }
}
