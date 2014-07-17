(function(){
  'use strict';

  angular.module('cth').controller('PostCtrl', ['Post', '$http', '$state', PostCtrl]);

  function PostCtrl(Post, $http, $state){

    var vm = this;
    console.log($state);

    Post.getAll().then(function(posts){
      var postsWithId = createPostIds(posts);
      vm.posts = postsWithId;
    });

    function createPostIds(posts){
      return posts.map(function(post){
        post.id = dasherize(post.title);
        return post;
      }); 
    }

    function dasherize(str){
      return str.replace(/\s+/g, '-').toLowerCase(); 
    }
  }
})();
