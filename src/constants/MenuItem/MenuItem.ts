import { Routes } from '../types';

export const STUDENT_ACL: Routes[] = [
	{
		title: 'Dashboard',
		route: '/dashboard',
		key: 'dashboard',
	},
	{
		title: 'Game Level',
		route: '/game',
		key: 'gameLevel',
	},
];

export const ADMIN_ACL: Routes[] = [
	{
		title: 'Dashboard',
		route: '/dashboard',
		key: 'dashboard',
	},
	{
		title: 'Tabulation/Results',
		route: '/results',
		key: 'tabResults',
	},
	{
		title: 'User Management',
		route: '/user-management',
		key: 'userMgmt',
	},
];
