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
				body,
				link2){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
					this.link2 = link2;
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
				'National Aeronautics and Space Administration', // this is the BODY place in the class
				'https://images.nasa.gov/#/' //this is the LINK2 place in the class
				),

			new Post(
				'SpaceX',
				'https://spacex.com',
				'Ben Fields',
				'https://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/042015/spacerx-logo_0.png?itok=zDp18XZT', // this is a local image in the same folder as the js script
				'SpaceX launches reusable rockets to deliver cargo to the ISS, as well as launching independant satellites.',
				'https://www.flickr.com/photos/spacex/'
				),

			new Post(
				'Boeing',
				'https://boeing.com',
				'Ben Fields',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWCHM_hMveLdwlJalFF66cE6dBQiL_6tKXUgCbSU7-jb47Ym0mw',
				'Boeing has been in the aircraft industry for over 100 years, but they also work in the aerospace industry.',
				'https://hiveminer.com/Tags/boeing,cst100'
				),

			new Post(
				'Sierra Nevada Corporation',
				'https://sncorp.com',
				'Ben Fields',
				'https://media.glassdoor.com/sqll/18700/sierra-nevada-corporation-squarelogo-1415752975094.png',
				'SNC is developing a lifting-body space plane to deliver cargo and possibly people to the ISS.',
				'https://www.sncorp.com/news-resources/media-resources/'
				),

			new Post(
				'Roscosmos',
				'http://en.roscosmos.ru',
				'Ben Fields',
				'https://rlv.zcache.com/russian_federal_space_agency_roscosmos_Роскосмос_square_sticker-r1a6bb52aa6504ed981c2835f74e16f5e_v9wf3_8byvr_324.jpg',
				'Roscosmos is the Russian space agency.',
				'https://www.flickr.com/photos/roscosmos/'
				),
				
			new Post(
				'ULA', 		// this is the TITLE place in the class
				'http://www.ulalaunch.com',	// this is the LINK place in the class
				'Ben Fields',			// this is the AUTHOR place in the class
				'https://www.seeklogo.net/wp-content/uploads/2015/09/ula-logo-vector-download.jpg',	// this is the IMAGE place in the class
				'United Launch Alliance',
				'http://www.gettyimages.com/photos/united-launch-alliance?excludenudity=true&sort=mostpopular&mediatype=photography&phrase=united%20launch%20alliance'
				),
				
			new Post(
				'Blue Origin', 		// this is the TITLE place in the class
				'https://www.blueorigin.com',	// this is the LINK place in the class
				'Ben Fields',			// this is the AUTHOR place in the class
				'https://upload.wikimedia.org/wikipedia/commons/4/49/Blue_Origin_updated_logo_2015.jpg',	// this is the IMAGE place in the class
				'Blue Origin launches small, reusable rockets on suborbital trajectories.  They are also working on a much larger reusable orbital launch vehicle.',
				'https://www.blueorigin.com/gallery'
				),

			new Post(
				'Orbital ATK', 		// this is the TITLE place in the class
				'http://www.orbitalatk.com',	// this is the LINK place in the class
				'Ben Fields',			// this is the AUTHOR place in the class
				'http://sdv2.uk.w3pcloud.com/SSI/wp-content/uploads/2016/10/Orbital-ATK.jpg',	// this is the IMAGE place in the class
				'Orbital ATK launches cargo to the ISS, and manufacture rocket and spacecraft components, as well as weapon systems.',
				'http://www.gettyimages.com/photos/orbital-atk?excludenudity=true&mediatype=photography&phrase=orbital%20atk&sort=mostpopular'
				),
				
			new Post(
				'Copenhagen Suborbitals', 		// this is the TITLE place in the class
				'https://copenhagensuborbitals.com',	// this is the LINK place in the class
				'Ben Fields',			// this is the AUTHOR place in the class
				'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Copenhagen_Suborbitals_logo.png/220px-Copenhagen_Suborbitals_logo.png',	// this is the IMAGE place in the class
				'CS is a fully flushed amateur space program.  They launch the most advanced amateur rockets in the world.',
				'https://copenhagensuborbitals.com/roadmap/'
				),
				
			new Post(
				'Masten', 		// this is the TITLE place in the class
				'http://masten.aero',	// this is the LINK place in the class
				'Ben Fields',			// this is the AUTHOR place in the class
				'http://masten.aero/wp-content/uploads/2016/10/cropped-512masten-270x270.jpg',	// this is the IMAGE place in the class
				'Masten Space Systems builds technology demonstrators for autonomous landing vehicles.',
				'https://www.flickr.com/photos/mastenspace/'
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



