import bcrypt from 'bcrypt';

import formatErrors from './formatErrors';

export default {
  Query: {
    getDispensary: (parent, { id }, { models }) => models.Dispensary.findOne({ where: { id } }),
    allDispensaries: (parent, args, { models }) => models.Dispensary.findAll(),
  },
  Mutation: {
    registerDispensary: async (parent, { password, ...otherArgs }, { models }) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const dispensary = await models.Dispensary.create({
          ...otherArgs,
          password: hashedPassword,
        });

        return {
          ok: true,
          dispensary,
        };
      } catch (err) {
        return {
          ok: false,
          errors: formatErrors(err, models),
        };
      }
    },
  },
};
