var app=angular.module('secapps',['ngMaterial','ngMessages']);

app.controller('angmat',function ($scope) 
{
 $scope.imagePath = 'grad.jpg';

})
 app.controller('appct' ,function()
 {
 	this.myDate = new Date();
 	this.isOpen = false;
 });