export const mainProjects = [
	{
		id: 1,
		imgs: [
			'/img/projects-imgs/netflix-clone/desktop.png',
			'/img/projects-imgs/netflix-clone/register.png',
			'/img/projects-imgs/netflix-clone/movies.png',
		],
		title: 'Netflix Clone',
		desc: 'A React based movie app that mimics the netflix. Allows user to add profile image, change email address and username. Most importantly, user can watch trailers and get related data for movies and series.',
		builtWith: ['React', 'Firebase', 'MongoDB'],
	},
	{
		id: 2,
		imgs: [
			'/img/projects-imgs/manage-project/dashboard.png',
			'/img/projects-imgs/manage-project/create.png',
			'/img/projects-imgs/manage-project/comments.png',
		],
		title: 'Manage Project',
		desc: "A friendly, project managing website that can be used with teams. Assign projects to your teammates and mark as completed when it's done. Commenting to a project is available. Also, online users can be seen.",

		builtWith: ['React', 'Firebase'],
	},
	{
		id: 3,
		imgs: [
			'/img/projects-imgs/binterest/login.png',
			'/img/projects-imgs/binterest/dashboard.png',
			'/img/projects-imgs/binterest/create.png',
		],
		title: 'Binterest',
		desc: 'A photo sharing app just like Pinterest but it is called Binterest. Uses sanity for backend. Users can share, delete and save photos and also comment. Authentication is handled by Google OAuth system. ',

		builtWith: ['React', 'Sanity', 'Tailwind'],
	},
];

export const otherProjects = [
	{
		id: 1,
		img: '/img/projects-imgs/other-projects/blog.png',
		title: 'Personal Blog',
		desc: "Minimal looking blog app which I've built for myself to share some posts releated to web dev.",
		builtWith: ['Next.js', 'Markdown', 'MongoDB'],
		demo: 'https://burakorkmez.blog/',
	},
	{
		id: 2,
		img: '/img/projects-imgs/other-projects/github.png',
		title: 'Github User Finder',
		desc: 'A web app that helps to find the searched github account.',
		builtWith: ['React', 'Bootstrap'],
		demo: 'https://githubsusers.netlify.app/',
		github: 'https://github.com/burakorkmez/github-user-finder',
	},
	{
		id: 3,
		img: '/img/projects-imgs/other-projects/covid.png',
		title: 'Covid-19 Dashboard',
		desc: "Want to learn covid situation of the world? Then don't look any further.",
		builtWith: ['React', 'Covid Api'],
		demo: 'https://coronaanalyzer.netlify.app/',
		github: 'https://github.com/burakorkmez/covid-19-dashboard',
	},
];
