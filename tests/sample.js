var chai = require('chai');
var expect = chai.expect;
var $ = require('jquery');
var hello = require('../app/scripts/index').hello;
// require('index');

describe('hello', function(){
  it('should say hello', function(){
    expect(hello()).to.be.equal('hello world');
  });

  describe("Post", function(){
    describe("fetch", function(){
      it("should return a promise", function(){
        var promise = Post.fetch();
        expect(promise).to.respondTo('then');
      });

      it("should resolve with an array of posts", function(done){
        Post.fetch().then(function(posts){
          var firstPost = posts[0];
          expect(firstPost).to.have.property('title');
          expect(firstPost).to.have.property('body');
          expect(firstPost).to.have.property('_id');
          done();
        });
      });

      it("should trigger a posts:fetched event", function(done){

        $(document).on('posts:fetched', function(event, posts){
          expect(posts).to.be.an.instanceof(Array);
          done();
        });

        Post.fetch();
      });

    });
  });

  describe("PostView", function(){
    var view, posts;

    beforeEach(function(){
      posts = [{title: "Title", body: "Body"}];
      // view = new PostView();
    });

    describe("showPosts", function(){
      it("should take a post array and list them", function(){
        expect($('.posts li').first().length).to.equal(1);
        expect($('.posts li h1').first().text()).to.equal("hey");
        expect($('.posts li p').first().text()).to.equal("there");
      });
    });
  });

  describe("Create post", function(){
    it('should trigger a create:post event on the document with the title and body', function(done){
      $(document).on('create:post', function(event, data){
        expect(data).to.have.property('title');
        expect(data).to.have.property('body');
        done();
      });
      $('#input-create-post-title').val("Title");
      $('#input-create-post-body').val("Body Text");
      $('#create-post-submit').trigger('click');
    });
  });
});
