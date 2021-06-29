const mongoose = require( "mongoose" );

// create all models and register here
require( '../models/user'); 
require( '../models/donor' );
require( '../models/requester' );
const uri = "mongodb://localhost:27017/helpingHandDB";

// To ensure we get the updated document ( and not original document ) after update query
mongoose.set( 'useFindAndModify', false );
mongoose.set( 'returnOriginal', false );

mongoose.connect( uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on( 'open', () => {
    console.log( 'connection to DB has been established' );

});

mongoose.connection.on( 'error', ( err ) => {
    console.error( err.message );
    process.exit( 1 )
});


