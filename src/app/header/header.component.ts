import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
        styleClass: 'menu-item'
      },
      {
        label: 'About Me',
        icon: 'pi pi-user',
        routerLink: '/about',
        styleClass: 'menu-item'
      },
      {
        label: 'Services',
        icon: 'pi pi-cog',
        routerLink: '/services',
        items: [
          { label: 'Small Business Websites', icon: 'pi pi-briefcase', routerLink: '/services/small-business' },
          { label: 'Freelancer Websites', icon: 'pi pi-users', routerLink: '/services/freelancers' },
          { label: 'SEO Optimization', icon: 'pi pi-chart-line', routerLink: '/services/seo' }
        ],
        styleClass: 'menu-item'
      },
      {
        label: 'Portfolio',
        icon: 'pi pi-images',
        routerLink: '/portfolio',
        styleClass: 'menu-item'
      },
      {
        label: 'Blog',
        icon: 'pi pi-pencil',
        routerLink: '/blog',
        styleClass: 'menu-item'
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: '/contact',
        styleClass: 'menu-item'
      },
      {
        label: 'FAQ',
        icon: 'pi pi-question',
        routerLink: '/faq',
        styleClass: 'menu-item'
      }
    ];
  }
}
