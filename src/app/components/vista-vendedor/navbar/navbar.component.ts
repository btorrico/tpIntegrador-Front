import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { Vendedor } from 'src/app/services/Vendedor';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  constructor(private vendedorServicio: MenuService, private router:Router) {}

  ngOnInit(): void {
  }


}

