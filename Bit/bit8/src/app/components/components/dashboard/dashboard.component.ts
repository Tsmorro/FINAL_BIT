import { Component, OnInit, ViewChild } from '@angular/core';
import { getFilesystem } from './files.service';
import { TreeNode } from '@bit/primefaces.primeng.internal.common.treenode';
import {MatDivider, MatCard} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export interface Metric {
  stat: any;
  change: any;
  indicator:  boolean;
  label: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class DashboardComponent implements OnInit {
  data1 : any;
  files: TreeNode[];
  data2: any;
  cols: any[];
  stats: Metric;
  imgOptions1: any;
  imgOptions2: any;

  constructor(){
    this.imgOptions1 = {
      url: './assets/images/download.jpeg',
      height: '150px',
      width: '33%',
      header: 'Placeholder Text',
      location: 'Atlanta, GA'
    }
    this.imgOptions2 = {
      url: './assets/images/download2.jpeg',
      height: '150px',
      width: '33%',
      header: 'Placeholder Text',
      location: 'Washington, D.C.'
    }
    this.data1 = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'First Dataset',
					data: [65, 59, 80, 81, 56, 55, 40],
					fill: false,
					borderColor: '#4bc0c0'
				},
				{
					label: 'Second Dataset',
					data: [28, 48, 40, 19, 86, 27, 90],
					fill: false,
					borderColor: '#565656'
				}
			]
    };
    this.data2 = {
			labels: ['A', 'B', 'C', 'D', 'E', 'F'],
			datasets: [
				{
					data: [300, 50, 100,300, 50, 100],
					backgroundColor: ['#FD7E14', '#FD7E14', '#FD7E14','#FD7E14', '#FD7E14'],
					hoverBackgroundColor: ['#FD7E14', '#FD7E14', '#FD7E14','#FD7E14', '#FD7E14']
				}
			]
    };
    this.stats = {
      stat: '$21K',
      change: '+4%',
      indicator: true,
      label: 'Account Balance'
    };
  }
  
  ngOnInit(){
    this.files = getFilesystem().data;
		this.cols = [
			{ field: 'name', header: 'Name' },
			{ field: 'size', header: 'Size' },
			{ field: 'type', header: 'Type' }
		]
  }
}