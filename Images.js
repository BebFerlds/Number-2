class Post {


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

	el: '#root',

	data: {

		keyword: '',

		postlist: [
			new Post(
				'NASA', 
				'https://nasa.gov',	
				'Ben Fields',
				'https://images-na.ssl-images-amazon.com/images/I/610vGGEqfvL._SY355_.jpg',
				'National Aeronautics and Space Administration',
				'https://images.nasa.gov/#/'
				)
		]
	},

	computed: {

		filterlist(){

			return this.postlist.filter((post)=>{

				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});

