import { faker } from "@faker-js/faker";

const createRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};

const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
});

export const Faker = () => {
  return (
    <div>
      <p>{faker.number.float({ min: 10, max: 100, fractionDigits: 3 })}</p>
      <p>{faker.number.int(100)}</p>
      <p>{faker.number.int({ min: 10, max: 100, multipleOf: 10 })}</p>
      <p className="whitespace-pre-line">{faker.lorem.lines(2)}</p>
      <p>{faker.lorem.paragraph({ min: 1, max: 3 })}</p>
      <p
        dangerouslySetInnerHTML={{
          __html: faker.lorem.paragraphs(2, "<br/>\n"),
        }}
      />
      <p>{faker.helpers.arrayElement(["cat", "dog", "mouse"])}</p>
      <p>{JSON.stringify(faker.helpers.arrayElements([1, 2, 3, 4, 5], 2))}</p>
      <p>{faker.helpers.rangeToNumber({ min: 1, max: 10 })}</p>
      {/* 過去（years指定） */}
      <p>
        {faker.date
          .past({ years: 10, refDate: "2025-01-01T00:00:00.000Z" })
          .toDateString()}
      </p>
      {/* 未来（years指定） */}
      <p>
        {faker.date
          .future({ years: 10, refDate: "2025-01-01T00:00:00.000Z" })
          .toDateString()}
      </p>
      {/* 近い過去（days指定） */}
      <p>
        {faker.date
          .recent({ days: 10, refDate: "2025-01-01T00:00:00.000Z" })
          .toDateString()}
      </p>
      {/* 近い未来（days指定） */}
      <p>
        {faker.date
          .soon({ days: 10, refDate: "2025-01-01T00:00:00.000Z" })
          .toDateString()}
      </p>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: faker.color.rgb(),
        }}
      />
      <div>
        {users.map((user) => (
          <ul key={user.userId}>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>
              <img src={user.avatar} width={120} alt="" />
            </li>
            <li>{user.username}</li>
            <li>{user.birthdate.toDateString()}</li>
            <li>{user.registeredAt.toDateString()}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
