describe('create post form', function(){
  it('should trigger a create:post event on the document with the title and body', function(done){
    $(document).addEventListener('create:post', function(event, data){
      expect(data).to.have.property('title');
      expect(data).to.have.property('body');
      done();
    });
  });
});
