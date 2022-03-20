export const activeStyle = {
	cardStyle: { maxHeight: "999vh" },
	maskStyle: {
		WebkitMaskImage: "none",
		maxHeight: "999vh",
	},
	moreText: "LESS",
};

export const inactiveStyle = {
	cardStyle: { maxHeight: "35vh" },
	maskStyle: {
		WebkitMaskImage: "linear-gradient(180deg, #000 0%, transparent)",
		maxHeight: "7vh",
	},
	moreText: "MORE",
};

export const smallDesc = {
	cardStyle: { maxHeight: "35vh" },
	maskStyle: {
		WebkitMaskImage: "none",
	},
	buttonDisplay: {
		display: "none",
	},
};

export const optionActiveStyle = { display: "flex" };
export const optionInactiveStyle = { display: "none" };
