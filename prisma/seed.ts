import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	// Seed Brands
	const brandsData = [
		{
			brandName: 'YesButSure',
			title: 'Title - YesButSure',
			description: 'Yes But Sure består av två designintresserade syskon som kommer i från Dalarna. Det finns alltid något projekt på gång och just denna gången är det att göra om gamla skyltdockor till fina lampor. Dessa kan specialbeställas. Kontakt oss för mer information.',
			slug: 'yesbutsure'
		},
		{
			brandName: 'Bella & Rushe',
			title: 'Title - Bella & Rushe',
			description: 'Bella & Rushe... Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			slug: 'bellarushe'
		},
		{
			brandName: 'Rosanna',
			title: 'Title - Rosanna',
			description: 'Rosanna... Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			slug: 'rosanna'
		},
		{
			brandName: 'Adam',
			title: 'Title - Adam',
			description: 'Adam... Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			slug: 'adam'
		},
		{
			brandName: 'Josefin',
			title: 'Title - Josefin',
			description: 'Josefin... Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			slug: 'josefin'
		}
	];

	for (const brandData of brandsData) {
		const brand = await prisma.brand.upsert({
			where: { brandName: brandData.brandName }, // Must be unique in the schema.prisma
			update: {},
			create: brandData
		});
	}
	const brandsData2 = await prisma.brand.findMany()
	// Seed Persons
	const personsData = [
		{ email: 'mikaela@yesbutsure.com', name: 'Mikaela Johansson', brandId: brandsData2[0].id },
		{ email: 'casper@yesbutsure.com', name: 'Casper Karlsson', brandId:  brandsData2[0].id },
		{ email: 'rushe@bellarushe.com', name: 'Rushe Berisha', brandId:  brandsData2[1].id },
		{ email: 'isabell@bellarushe.com', name: 'Isabell Forslund', brandId:  brandsData2[1].id },
		{ email: 'jane4@example.com', name: 'Rosanna Tuvhag', brandId:  brandsData2[2].id },
		{ email: 'jane5@example.com', name: 'Josefine Schwamberg', brandId:  brandsData2[3].id },
		{ email: 'jane6@example.com', name: 'Adam Johansson', brandId:  brandsData2[4].id }
	];

	for (const personData of personsData) {
		await prisma.person.upsert({
			where: { email: personData.email }, // Must be unique in the schema.prisma
			update: {},
			create: personData
		});
	}

	// Seed Posts
	const postsData = [
		{
			title: 'Hector',
			content: 'This is Hector!',
			published: true,
			image: 'hector_1',
			brandId: brandsData2[0].id
		},
		{
			title: 'Hector 2',
			content: 'This is Hector 2',
			published: true,
			image: 'hector_2',
			brandId: brandsData2[0].id
		},
		{
			title: 'Keramik Bella & Rushe',
			content: 'Keramik vas 1',
			published: true,
			image: 'vase_1',
			brandId: brandsData2[1].id
		},
		{
			title: 'Keramik Serenity',
			content: 'Från kollektionen Serenity',
			published: true,
			image: 'vase_2',
			brandId: brandsData2[1].id
		},
		{
			title: 'Keramik Serenity 2',
			content: 'Från kollektionen Serenity 2',
			published: true,
			image: 'vase_3',
			brandId: brandsData2[1].id
		},
		{
			title: 'Rosanna Poster',
			content: 'Orka mallorca',
			published: true,
			image: 'mallis',
			brandId: brandsData2[2].id
		}
	];

	for (const postData of postsData) {
		await prisma.post.upsert({
			where: { title: postData.title }, 
			update: {},
			create: postData
		});
	}
	/* const mikaela = await prisma.artist.upsert({ //upsert = If no database record satisfies the where condition, it creates a new database record 
    where: { email: 'mikaela_johansson@hotmail.com' },
    update: {},
    create: {
      users: {
        create: {
          email: 'mikaela_johansson@hotmail.com', 
          name: 'Mikaela',
        }
      },
      artistName: 'YesButSure',
      title: 'Välkommen hit'
    }, */

	/* const casper = await prisma.artist.upsert({
    where: { email: 'casper@ybs.se' },
    update: {},
    create: {
      email: 'casper@ybs.se',
      name: ['Mikaela Johansson', 'Casper Karlsson'],
      artistName: 'YesButSure',
      title: 'Välkommen hit'
    },
  }) */
	/* console.log('alice, bob', { mikaela }) */
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
