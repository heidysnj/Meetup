const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			event: [],
			group: []
		},
		actions: {
			getEvent: () => {
				fetch("https://api.jsonbin.io/b/6042fc4a5e29de07fcec3cfd")
					.then(res => res.json())
					.then(response => {
						setStore({ event: response });
					});
			},
			getGroup: () => {
				fetch("https://api.jsonbin.io/b/6042fcf85e29de07fcec3d53")
					.then(res => res.json())
					.then(response => {
						setStore({ group: response });
					});
			}
		}
	};
};

export default getState;
