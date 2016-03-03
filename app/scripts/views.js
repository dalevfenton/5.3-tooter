var $ = require('jquery');

function PostView(){
  $('body').append('<ul class="posts">');
  $('body').prepend('<form><input type="text" id="input-create-post-title" value=""><input type="text" id="input-create-post-body" value=""><button type="submit" name="button" id="create-post-submit">Submit</button></form>');
}

PostView.prototype.showPosts = function(posts){
  posts.forEach(function(post){
    $('.posts').append('<li><h1>' + post.title + '</h1><p>' + post.body + '</p></li>');
  });
};

window.PostView = PostView;
