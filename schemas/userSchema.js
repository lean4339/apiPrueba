

const userSchema = {
	type: "objet",
	properties: {
		name: {type: 'string'},
		username: {type: 'string'},
		email: {type: 'string'},
        password: {type: 'string'},
        image_url: {type: 'string'},
	},
	required: ['name','username','email','password'],
};
module.exports = userSchema;
