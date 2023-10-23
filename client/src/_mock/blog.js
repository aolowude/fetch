import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Burn fat quickly',
  'Fruits that helped with my pregnancy',
  'Healthy desserts',
  'Vegan alternatives to Steak',
  'Burn fat quickly',
  'Fruits that helped with my pregnancy',
  'Healthy desserts',
  'Vegan alternatives to Steak',
  'Burn fat quickly',
  'Fruits that helped with my pregnancy',
  'Healthy desserts',
  'Vegan alternatives to Steak',
  'Burn fat quickly',
  'Fruits that helped with my pregnancy',
  'Healthy desserts',
  'Vegan alternatives to Steak',
];

const posts = [...Array(23)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));

export default posts;
