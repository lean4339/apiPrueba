const turneraSchema = {
	schema: {
		body: {
			type: "object",
			properties: {
				idProfesional: { type: "number" },
				cantidad: { type: "number" },
			},
			required: ["idProfesional", "cantidad"],
		},
	},
};

module.exports = turneraSchema;
