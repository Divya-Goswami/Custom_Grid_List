import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'grid-list',
	templateUrl: './grid-list.component.html',
	styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {
	@Input() rows: [] = [];

	@Input() cols: number = 5 ;
	@Input() gutterSize: string = "1px";
	@Input() rowHeight: string | number = "1:1";



	ngOnInit(): void {
		console.log(this.cols)
	}
}
