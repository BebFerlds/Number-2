// This is a comment

// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'NASA', 		// this is the TITLE place in the class
				'https://nasa.gov',	// this is the LINK place in the class
				'Ben Fields',			// this is the AUTHOR place in the class
				'https://images-na.ssl-images-amazon.com/images/I/610vGGEqfvL._SY355_.jpg',	// this is the IMAGE place in the class
				'National Aeronautics and Space Administration' // this is the BODY place in the class
				),

			new Post(
				'SpaceX',
				'https://spacex.com',
				'Ben Fields',
				'https://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/042015/spacerx-logo_0.png?itok=zDp18XZT', // this is a local image in the same folder as the js script
				'SpaceX launches reusable rockets to deliver cargo to the ISS, as well as launching independant satellites. '
				),

			new Post(
				'Boeing',
				'https://boeing.com',
				'Ben Fields',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWCHM_hMveLdwlJalFF66cE6dBQiL_6tKXUgCbSU7-jb47Ym0mw',
				'Boeing has been in the aircraft industry for over 100 years, but they also work in the aerospace industry.'
				),

			new Post(
				'Sierra Nevada Corporation',
				'https://sncorp.com',
				'Ben Fields',
				'https://media.glassdoor.com/sqll/18700/sierra-nevada-corporation-squarelogo-1415752975094.png',
				'SNC is developing a lifting-body space plane to deliver cargo and possibly people to the ISS.'
				),

			new Post(
				'Roscosmos',
				'http://en.roscosmos.ru',
				'Ben Fields',
				'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Roscosmos_logo_en.svg/1200px-Roscosmos_logo_en.svg.png',
				'Roscosmos is the Russian space agency.'
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});



