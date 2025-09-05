import { faker } from "@faker-js/faker";

const name = faker.person.fullName();
const email = faker.internet.email();

const users: { id: string; name: string; email: string }[] = Array.from({
  length: 5,
}).map(() => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
}));

export const Faker = () => {
  return (
    <div>
      <h1>Faker Test</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
