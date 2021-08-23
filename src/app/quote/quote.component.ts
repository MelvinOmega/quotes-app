import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'Watch finding nemo', description:'Find an online version'},
    {id:2, name:'Watch finding nemo', description:'Find an online version'},
    {id:3, name:'Watch finding nemo', description:'Find an online version'},
    {id:4, name:'Watch finding nemo', description:'Find an online version'},
    {id:5, name:'Watch finding nemo', description:'Find an online version'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
