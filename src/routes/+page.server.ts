// src/routes/+page.server.ts

import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  // 1.
  const response = await prisma.brand.findMany({
      include: {
			persons: {
				select: {
					name: true,
					email: true
				}
			},
      posts: {
        select: {
          title: true,
          content: true,
          image:true
        }
      }
		}
   /*  select: {
      id: true,
      artistName: true,
      title: true,
      description: true,
      users: {
        select: {
          name: true,
          email: true,
        },
      },
      posts: {
        select: {
          title: true,
          content: true
        }
      }
    }, */
  });
console.log('artist from frontpage:', response);
  // 2.
  return { response };
}) satisfies PageServerLoad;
