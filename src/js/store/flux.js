const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			events: [
				{
					ID: 1,
					post_Description: "Event description",
					post_title: "1st Event for Meetup 2",
					meta_keys: {
						day: "20200731",
						time: "09:00 AM",
						_groupId: 2
					}
				},
				{
					ID: 2,
					post_Description: "Event description",
					post_title: "1st Event for Meetup 1",
					meta_keys: {
						day: "20200930",
						time: "07:12 AM",
						_groupId: 1
					}
				},
				{
					ID: 3,
					post_Description: "Event description",
					post_title: "2nd Event for Meetup 1",
					meta_keys: {
						day: "20201028",
						time: "02:00 PM",
						_groupId: 1
					}
				},
				{
					ID: 4,
					post_Description: "Event description",
					post_title: "2nd Event for Meetup 2",
					meta_keys: {
						day: "20210130",
						time: "08:00 AM",
						_groupId: 2
					}
				}
			],
			groups: [
				{
					ID: 1,
					post_content: "Meetup 1",
					post_title: "Group 1",
					members: ["liam", "freddy", "anita", "heidys"]
				},
				{
					ID: 2,
					post_content: "Meetup 2",
					post_title: "TGroup 2",
					members: ["leandro", "magaly", "dinky", "nala"]
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
