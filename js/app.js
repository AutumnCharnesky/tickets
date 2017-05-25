var app = angular.module("ticketKiosk", ["ui.bootstrap"]);

app.controller('kioskController', function($scope) {

  $scope.master = {name: "", ticketNum: 1};
  $scope.purchase = function() {

    $scope.order = angular.copy($scope.master);
  };

$scope.purchaser = [];
// $scope.order.ticketNum = 1;

  $scope.purchase = function(order) {
    console.log(order);
    if(order.ticketNum === 1) {
    $scope.purchaser.unshift(order.name +" purchased " + order.ticketNum + " ticket.")
    console.log($scope.purchaser);
  } else {
    $scope.purchaser.unshift(order.name +" purchased " + order.ticketNum + " tickets.")
    console.log($scope.purchaser);
  }
    $scope.order.ticketNum = 1;
    $scope.order.name = '';
  }

});


// $scope.purchase();
//

//
// $scope.newsFeed = function() {
//   console.log(newsFeed);
//   $scope.purchaser.push({name: newsFeed.nsme});
//   console.log($scope.purchaser)
// }
