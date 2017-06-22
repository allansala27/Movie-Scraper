var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Saved = new Schema ({
	title: {
		type: String,
    	unique: true
	},
	year: {
		type: String
	},
	rating: {
		type: String
	},
	synopsis: {
		type: String
	},
	notes: [{
   		type: Schema.Types.ObjectId,
    	ref: "notes"
 	}]
});

var Saved = mongoose.model("Saved", Saved);

module.exports = Saved; 