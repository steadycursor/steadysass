import { Prisma } from '@steadysass/prisma';
import { builder } from '../builder';
import { DateTime } from './DateTime';
import { Context } from '../context';

export const includeOnPost = {} satisfies Prisma.PostInclude;

export const Post = builder.loadableObject('Post', {
  load: (ids: string[], context: Context) => context.prisma.post.findMany({ where: { id: { in: ids } }, include: includeOnPost }),
  sort: (account) => account.id,
});

builder.objectType(Post, {
  fields: (t) => ({
    id: t.expose('id', { type: 'ID' }),
    name: t.expose('name', { type: 'String' }),
    createdAt: t.expose('createdAt', { type: DateTime }),
  }),
});
