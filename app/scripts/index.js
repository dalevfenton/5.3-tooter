var $ = require('jquery');
var models = require('./models');
var views = require('./views');

$(function(){
  var view = new PostView();

  $(document).on('posts:fetched', function(event, posts){
    view.showPosts(posts);
  });
  $('#create-post-submit').click(function(event, data){
    event.preventDefault();
    $(document).trigger('create:post', [{title: "Cool", body: "Cool"}]);
  });
  Post.fetch();
});

function hello(){
  return 'hello world';
}

module.exports = {"hello": hello, "models":models, "views":views};
