const profesionalSchema = {
	schema: {
		body: {
			type: "object",
			properties: {
				name: { type: "string" },
				username: { type: "string" },
				email: { type: "string" },
				password: { type: "string" },
				image_url: { type: "string" },
			},
			required: ["name", "username", "email", "password"],
		},
	},
};
module.exports = profesionalSchema;
