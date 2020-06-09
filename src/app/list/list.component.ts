import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent {
	data: any = [];
	rows: any = [];
	header_rows: any = [];
	header_rows2: any = [];

	constructor() { }

	ngOnInit() {

		this.header_rows2 = [
		  { val: "Title" },
		  { val: "Employee Name", colspan: 1, rowspan: 2, head_foot: "header" },
		  { val: "DOB", colspan: 1, rowspan: 1 },
		  { val: "Designation", colspan: 2, rowspan: 1 },
		  { val: "Actions", colspan: 2, rowspan: 1, head_foot: "footer" },
		];

		// this.header_rows = [
		// 	{ val: "Title" },
		// 	{ val: "Employee Name", colspan: 1, rowspan: 2 },
		// 	{ val: "DOB", colspan: 1, rowspan: 1 },
		// 	{ val: "Designation", colspan: 2, rowspan: 1 },
		// 	{ val: "Actions", colspan: 2, rowspan: 1 },
		// ];

		this.header_rows = [
			{ val: "Title" },
			{ val: "Employee Name" },
			{ val: "DOB" },
			{ val: "Designation "},
			{ val: "Actions ", colspan:"2"},
		];
		this.data = [
			{ id: 1, title: "Ms", first_name: "Riya", last_name: "Sharma", address1: "Plot No: 34/C, RTO", address2: "Bhuj", dob: "01-07-1989", designation: 'Senior Software Engineer' },
			{ id: 2, title: "Mr", first_name: "Dennis", last_name: "Sharma", address1: "Plot No: 78/C, RTO", address2: "Goa", dob: "27-01-1997", designation: 'Project Lead' },
			{ id: 3, title: "Mrs", f1irst_name: "Henny", last_name: "Verrma", address1: "Plot No: 99/C, RTO", address2: "Anjar", dob: "05-09-1979", designation: 'Software Trainee' },
		];

		Object.entries(this.data).forEach(([key, val]) => {
			this.rows.push(
				{ val: val['title'] },
				{ val: val['first_name']+' '+ val['last_name']},
				{ val: val['dob']},
				{ val: val['designation']},
				{ val: "Add", button:"true", icon:"edit", color:"primary", link:'/list'},
				{ val: "Delete", button:"true", color:"warn"}
			);
		});
	}

	onDelete(id) {
		// if (confirm('Are you sure?')) {
		// 	for (let i = 0; i < this.rows.length; i++) {
		// 		if (this.rows[i].id == id) {
		// 			this.rows.splice(i, 1);
		// 			localStorage.setItem('emp', JSON.stringify(this.rows));
		// 		}
		// 	}
		// }
	}
}
