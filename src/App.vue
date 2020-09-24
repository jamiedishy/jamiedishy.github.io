<template>
	<div id="app">
		<rbc-layout 
			:side-nav="sideNavLinks" 
			:top-nav="topNav" 
			:router="false"
			:current-page="sideNavLinks[0]"
			logo="https://rbcwm-styleguide.azurewebsites.net/src/assets/rbc-wm-logo-en.svg" 
		>
			<div 
				class="container" 
				slot="content"
			>
				<div class="row">
					<div class="col-md-12">
						<h1>That's my h1</h1>
						<p>
							And a paragraph for the fun.
						</p>
					</div>
				</div>
			</div>
		</rbc-layout>
	</div>
</template>

<script>
import 'rbc-wm-framework-vuejs/dist/wm/vendors/';
import HelloWorld from './components/HelloWorld';
import { Layout } from 'rbc-wm-framework-vuejs/dist/wm/components';
export default {
	name: 'App',
	components: {
		'rbc-layout': Layout
	},
	data() {
		return {
			sideNavLinks: [
				{
					name: 'Home',
					displayName: 'Home',
					showInMenu: true,
					icon: 'home',
					meta: {
						order: 1
					},
					children: [
						{
							name: 'Get started',
							displayName: 'Get started',
							showInMenu: true,
							link: '#'
						},
						{
							name: 'Changelog',
							displayName: 'Changelog',
							showInMenu: true,
							link: '/components/HelloWorld'
						}
					]
				},
				{
					name: 'Development',
					displayName: 'Development',
					showInMenu: true,
					icon: 'code',
					meta: {
						order: 2
					},
					children: [
						{
							name: 'Introduction',
							displayName: 'Introduction',
							showInMenu: true,
							link: '#'
						},
						{
							name: 'Installation',
							displayName: 'Installation',
							showInMenu: true,
							link: '#'
						},
						{
							name: 'Best practices',
							displayName: 'Best practices',
							showInMenu: true,
							link: '#'
						},
						{
							name: 'Utilities',
							displayName: 'Utilities',
							showInMenu: true,
							link: '#'
						}
					]
				},
				{
					name: 'Design',
					displayName: 'Design',
					showInMenu: true,
					icon: 'paint-brush',
					meta: {
						order: 3
					},
					children: [
						{
							name: 'Introduction',
							displayName: 'Introduction',
							showInMenu: true,
							link: '#'
						},
						{
							name: 'Templates',
							displayName: 'Templates',
							showInMenu: true,
							link: '#'
						},
						{
							name: 'Colours',
							displayName: 'Colours',
							showInMenu: true,
							link: '#'
						},
						{
							name: 'Typography',
							displayName: 'Typography',
							showInMenu: true,
							link: '#'
						}
					]
				},
				{
					name: 'Components',
					displayName: 'Components',
					showInMenu: true,
					icon: 'th-large',
					meta: {
						order: 4
					},
					children: [
						{
							name: 'Alert',
							displayName: 'Alert',
							showInMenu: true,
							link: '#'
						},
						{
							name: 'Buttons',
							displayName: 'Buttons',
							showInMenu: true,
							link: '#'
						},
						{
							name: 'Card',
							displayName: 'Card',
							showInMenu: true,
							link: '#'
						},
						{
							name: 'Expand',
							displayName: 'Expand',
							showInMenu: true,
							link: '#'
						},
						{
							name: 'Input',
							displayName: 'Input',
							showInMenu: true,
							link: '#'
						},
						{
							name: 'Modal',
							displayName: 'Modal',
							showInMenu: true,
							link: '#'
						},
						{
							name: 'Snackbar',
							displayName: 'Snackbar',
							showInMenu: true,
							link: '#'
						},
						{
							name: 'Stepper',
							displayName: 'Stepper',
							showInMenu: true,
							link: '#'
						},
						{
							name: 'Tab',
							displayName: 'Tab',
							showInMenu: true,
							link: '#'
						},
						{
							name: 'Tooltip',
							displayName: 'Tooltip',
							showInMenu: true,
							link: '#'
						}
					]
				}
			],
			topNav: [
				{
					name: 'Login',
					link: '#'
				}
			]
		};
	}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,400i,500,700|Roboto:300,400,400i,500,700');
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-grid.min.css');
@import 'rbc-wm-framework-vuejs/dist/wm/style.css';
</style>
