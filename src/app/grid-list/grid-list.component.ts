import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

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

	@Output() onSelectedItem: EventEmitter<any> = new EventEmitter<any>();



	ngOnInit(): void {
		console.log(this.cols)
	}

	onSelected(param) {
		this.onSelectedItem.emit(param);
		console.log('Child Class Get Param on Click Event '+param)
	}
}
