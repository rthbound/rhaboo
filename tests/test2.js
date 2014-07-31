
var _rhaboo_trace = function(s) { console.log(s); }

QUnit.test( "Simple restore", function( assert ) {

  assert.ok (Number(localStorage.getItem("nextPhase")) === 2, "Please run tests in sequence");
  localStorage.setItem("nextPhase", 3);

  var store1 = new Rhaboo("A Unique Name");
  assert.ok( typeof store1 === "object", "Store1 exists");

  assert.ok( store1.a_string === "perky", "String remembered" );
  assert.ok( store1.a_num === 543.21, "Number remembered" );
  assert.ok( store1.a_bool === false, "Bool remembered" );
  assert.ok( typeof store1.empty_ob === 'object', "Empty object still there ...");
  assert.ok( store1.empty_ob._rhaboo_size() === 1, "... and still empty" );

  var store2 = new Rhaboo("Another Unique Name");
  assert.ok( store2.colour === "red", "Colour remembered" );
  assert.ok( store2.lue === 42, "Lue remembered" );
  assert.ok( store2.too === true, "Too remembered" );
  assert.ok( store2.rhyme[1] === "man", "Rhyme's man remembered" );
  assert.ok( store2.rhyme.went[0] === 2, "Rhyme's 2 remembered" );
  assert.ok( store2.rhyme.went[1] === "mow", "Rhyme's mow remembered" );
  
  store2.write("lue", 43);
  store2.rhyme.write("went", undefined);

});

