import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
	id = 0
	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			this.id = params.id || 0;
		});

	}

}
