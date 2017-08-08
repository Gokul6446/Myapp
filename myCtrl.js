app.controller("myCtrl",function($scope,$location,$timeout)
{
	$scope.firstName="John";
	$scope.lastName="Doe";
	$scope.price=60;
	$scope.today = new Date(); 
	$scope.customer= {
		"name" : "Gokul",
		"city"  :"Namakkal",
	}
	$scope.customer1= {	
		"name" : "Gokul",
		"city"  :"Namakkal",
		
	}
	$scope.names=[
	{name:'gokul',country:'India'},
	{name:'sathish',country:'USA'},
	{name:'senthil',country:'London'},
	{name:'kumar',country:'Canada'},
	{name:'Maniannan',country:'Australia'},
	{name:'Raja',country:'UAE'}
	];

	$scope.myUrl=$location.absUrl();
     
    
     $scope.myHeader="Good Morning";
     $timeout(function() {
     	$scope.myHeader="Welcome To My Company";
     }, 2000);

     $scope.name1="Gokul";
     $scope.name2="Sathish";
     $scope.changename=function() 
     {
     	$scope.name2="Ganesan";
     }
});
 
 app.controller("datacontroller",function($scope)
 {
   var listemployee=[
   {firstName:"John",lastName:"Joe",Gender:"Male",salary:30000},
   {firstName:"Gokul",lastName:"Ganesan",Gender:"Male",salary:35000},
   {firstName:"Sathish",lastName:"Ganesan",Gender:"Male",salary:40000},
   {firstName:"Ilamathi",lastName:"Ganesan",Gender:"Male",salary:50000}
   ]
$scope.employees=listemployee;
 });
 
 app.controller("myform",function($scope)
 {
 	$scope.reset=function(){
 	$scope.firstName="";
 	$scope.lastName="";
 	$scope.email="";

}
});
myApp.factory('Myservice',function()
{
	var factory={ };
	factory.multiply=function(a,b)
	{
return a*b;
	}
	return factory;
});
myApp.service('Mysecondservice',function(Myservice)
{
	this.square=function(a)
	{
		return Myservice.multiply(a,a);
	}
});
myApp.controller('myCtrl',function($scope,Mysecondservice)
{
	$scope.square=function()
	{
		$scope.result=Mysecondservice.square($scope.number);
	}
});

