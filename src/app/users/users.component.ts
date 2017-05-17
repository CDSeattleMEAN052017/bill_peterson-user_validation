import { Component, OnInit } from '@angular/core';

import { User } from "./user";

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	users: User[] = [];
	newUser: User;
	confirm_password: string;

	constructor() { }

	ngOnInit() {
		this.newUser = new User;
	}

}
