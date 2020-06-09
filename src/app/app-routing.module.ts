import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';


import { AddressComponent } from './address/address.component';



const routes: Routes = [
	{
		path: 'list',
		component: ListComponent,
		data: { pageTitle: 'Employee' },
	},
	{
		path: 'employee/add',
		component:AddressComponent,
		data: { pageTitle: 'Add Employee' },
	},
	{ path: '', redirectTo: 'list', pathMatch: 'full' },
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
