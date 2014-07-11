// function legacyStuff(){
//   var querySelector = document.querySelector.bind(document);

//   var navdrawerContainer = querySelector('.navdrawer-container');
//   var appbarElement = querySelector('.app-bar');
//   var menuBtn = querySelector('.menu');
//   var main = querySelector('main');
//   console.log(main);


//   function closeMenu() {
//     appbarElement.classList.remove('open');
//     navdrawerContainer.classList.remove('open');
//   }

//   function toggleMenu() {
//     appbarElement.classList.toggle('open');
//     navdrawerContainer.classList.toggle('open');
//   }

//   main.addEventListener('click', closeMenu);
//   menuBtn.addEventListener('click', toggleMenu);
//   navdrawerContainer.addEventListener('click', function (event) {
//     if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
//       closeMenu();
//     }
//   });
// };

var app = angular.module('cth', []);

app.controller('PostCtrl', function($scope, $http){
  $http.get('api/posts.json').success(function(response){
    console.log(response.posts);
    $scope.posts = response.posts;
  });
});
