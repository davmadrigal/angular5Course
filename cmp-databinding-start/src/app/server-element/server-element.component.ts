import { Component, OnInit, OnChanges, Input, ViewEncapsulation } from '@angular/core';
import { SimpleChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagrah') paragrah: ElementRef;
  constructor() { 
    console.log('constructor called');
  }

  ngOnChanges(changes : SimpleChanges) {
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text content ' + this.header.nativeElement.textContent);
    console.log('Text paragrah content: ' + this.paragrah.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Text paragrah content: ' + this.paragrah.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text content ' + this.header.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }

}
