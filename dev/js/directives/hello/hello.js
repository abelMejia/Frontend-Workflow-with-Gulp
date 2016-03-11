angular
.module('Hello', [])
.directive('helloWorld', () => {
	return {
		restrict: 'AE', 
		replace: true,

		scope: {
			fruit: '@'
		},

		template: '<div>{{fruit}}</div>'

	}
})