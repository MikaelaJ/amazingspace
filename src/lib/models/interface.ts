export type Post = {
	id: number;
	title: string;
	content: string;
	published: boolean;
	brandId: number;
	image: string;
};

export type Person = {
	id: number;
	email: string;
	name: string;
};

export type Brand = {
	id: Number;
	users: Person[];
	artistName: string;
	title: string;
	posts: Post[];

};