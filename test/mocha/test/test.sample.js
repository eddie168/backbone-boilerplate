/*global expect,describe,it,beforeEach,afterEach,sinon:true */
//var should = chai.should(); // Have problem with IE9

describe('test', function(){
  it('should work with objects', function(){
    var a = { name: 'tobi', age: 2, species: 'ferret' };
    var b = { name: 'jane', age: 8, species: 'ferret' };
    //a.should.eql(b);
    expect(a).to.be(b);
  });

  it('should work with arrays', function(){
    var a = [1,2,{ name: 'tobi' },4,5];
    var b = [1,2,{ name: 'jane' },4,4, 'extra stuff', 'more extra'];
    //a.should.eql(b);
    expect(a).to.be(b);
  });

  it('should work with strings', function(){
    //'some\nfoo\nbar'.should.equal('some\nbar\nbaz');
    expect('some\nfoo\nbar').to.be('some\nbar\nbaz');
  });
  
  it('should work with strings', function(){
    //'some\nfoo\nbar'.should.equal('some\nfoo\nbar');
    expect('some\nfoo\nbar').to.be('some\nfoo\nbar');
  });
});

describe('Sinon spy test', function () {
  beforeEach(function () {
    //sinon.spy($, 'ajax');
    sinon.stub($, 'ajax').yieldsTo('success', {
      count: '100',
      message: 'oh boy, 100 pickles!'
    });
  });

  afterEach(function () {
    $.ajax.restore();
  });

  it('should make an ajax call', function (done) {
    $.ajax({
      url: 'http://localhost:3000/pickles',
      dataType: 'json',
      success: function(data) {
        console.log(data);
      }
    });
    expect($.ajax.calledOnce).to.be.ok();
    done();
  });

});
