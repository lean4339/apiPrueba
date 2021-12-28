const tokenSchema = {
	schema:{
		body:{
			type:"object",
			properties:{
				token: { type: "string" },
			},
			required: ["token"],
		},
	},
}
module.exports = tokenSchema;
