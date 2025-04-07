import {Component}from '@angular/core';

@Component({
    selector: 'app-header',//nome do componente
    standalone: true,//modern way of building an angular component
    templateUrl: './header.component.html',//conteúdo a ser mostrado
    styleUrl: './header.component.css'
})

export class HeaderComponent{}