import faker from 'faker';

export const up = (queryInterface) => queryInterface.bulkInsert('Accommodation', [
  {
    name: faker.company.companyName(),
    typeId: faker.random.number(),
    rating: faker.random.number({ min: 1, max: 5 }),
    locationId: faker.random.number({ min: 1, max: 9 }),
    numberOfPeople: faker.random.number({ min: 1, max: 1000 }),
    numberOfRooms: faker.random.number({ min: 1, max: 1000 }),
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    name: faker.company.companyName(),
    typeId: faker.random.number(),
    rating: faker.random.number({ min: 1, max: 5 }),
    locationId: faker.random.number({ min: 1, max: 9 }),
    numberOfPeople: faker.random.number({ min: 1, max: 1000 }),
    numberOfRooms: faker.random.number({ min: 1, max: 1000 }),
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    name: faker.company.companyName(),
    typeId: faker.random.number(),
    rating: faker.random.number({ min: 1, max: 5 }),
    locationId: faker.random.number({ min: 1, max: 9 }),
    numberOfPeople: faker.random.number({ min: 1, max: 1000 }),
    numberOfRooms: faker.random.number({ min: 1, max: 1000 }),
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    name: faker.company.companyName(),
    typeId: faker.random.number(),
    rating: faker.random.number({ min: 1, max: 5 }),
    locationId: faker.random.number({ min: 1, max: 9 }),
    numberOfPeople: faker.random.number({ min: 1, max: 1000 }),
    numberOfRooms: faker.random.number({ min: 1, max: 1000 }),
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    name: faker.company.companyName(),
    typeId: faker.random.number(),
    rating: faker.random.number({ min: 1, max: 5 }),
    locationId: faker.random.number({ min: 1, max: 9 }),
    numberOfPeople: faker.random.number({ min: 1, max: 1000 }),
    numberOfRooms: faker.random.number({ min: 1, max: 1000 }),
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    name: faker.company.companyName(),
    typeId: faker.random.number(),
    rating: faker.random.number({ min: 1, max: 5 }),
    locationId: faker.random.number({ min: 1, max: 9 }),
    numberOfPeople: faker.random.number({ min: 1, max: 1000 }),
    numberOfRooms: faker.random.number({ min: 1, max: 1000 }),
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    name: faker.company.companyName(),
    typeId: faker.random.number(),
    rating: faker.random.number({ min: 1, max: 5 }),
    locationId: faker.random.number({ min: 1, max: 9 }),
    numberOfPeople: faker.random.number({ min: 1, max: 1000 }),
    numberOfRooms: faker.random.number({ min: 1, max: 1000 }),
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    name: faker.company.companyName(),
    typeId: faker.random.number(),
    rating: faker.random.number({ min: 1, max: 5 }),
    locationId: faker.random.number({ min: 1, max: 9 }),
    numberOfPeople: faker.random.number({ min: 1, max: 1000 }),
    numberOfRooms: faker.random.number({ min: 1, max: 1000 }),
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    name: faker.company.companyName(),
    typeId: faker.random.number(),
    rating: faker.random.number({ min: 1, max: 5 }),
    locationId: faker.random.number({ min: 1, max: 9 }),
    numberOfPeople: faker.random.number({ min: 1, max: 1000 }),
    numberOfRooms: faker.random.number({ min: 1, max: 1000 }),
    isAvailable: false,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    name: faker.company.companyName(),
    typeId: faker.random.number(),
    rating: faker.random.number({ min: 1, max: 5 }),
    locationId: faker.random.number({ min: 1, max: 9 }),
    numberOfPeople: faker.random.number({ min: 1, max: 1000 }),
    numberOfRooms: faker.random.number({ min: 1, max: 1000 }),
    isAvailable: false,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    name: faker.company.companyName(),
    typeId: faker.random.number(),
    rating: faker.random.number({ min: 1, max: 5 }),
    locationId: faker.random.number({ min: 1, max: 9 }),
    numberOfPeople: faker.random.number({ min: 1, max: 1000 }),
    numberOfRooms: faker.random.number({ min: 1, max: 1000 }),
    isAvailable: false,
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    name: faker.company.companyName(),
    typeId: faker.random.number(),
    rating: faker.random.number({ min: 1, max: 5 }),
    locationId: faker.random.number({ min: 1, max: 9 }),
    numberOfPeople: faker.random.number({ min: 1, max: 1000 }),
    numberOfRooms: faker.random.number({ min: 1, max: 1000 }),
    isAvailable: false,
    createdAt: new Date(),
    updatedAt: new Date()

  }
], {});
export const down = () => {
  /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkDelete('People', null, {});
  */
};