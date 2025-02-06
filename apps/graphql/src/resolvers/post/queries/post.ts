import { builder } from '../../../builder';
import { Post } from '../../../schema/Post';

builder.queryField('post', (t) =>
  t.field({
    type: Post,
    args: {
      id: t.arg({ type: 'ID' }),
    },
    authScopes: async (_parent, args, _ctx) => ({
      accessPolicy: 'authenticated',
      userHasAccessOnAccount: true,
      modelItemsBelongToAccount: { model: 'post', id: args.id },
    }),
    resolve: async (_parent, args, ctx) => {
      const post = ctx.prisma.post.findFirstOrThrow({
        where: {
          id: args.id,
        },
      });

      return post;
    },
  }),
);
