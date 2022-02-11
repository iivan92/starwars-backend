// users hardcoded for simplicity
const users = [
  {
    id: 1,
    email: "ivan@gmail.com",
    password: "test1234",
    firstName: "Test",
    lastName: "User",
  },
  {
    id: 2,
    email: "diego@gmail.com",
    password: "test1234",
    firstName: "TestD",
    lastName: "UserD",
  },
  {
    id: 3,
    email: "mateen@gmail.com",
    password: "test1234",
    firstName: "TestM",
    lastName: "UserM",
  },
];

module.exports = {
  authenticate,
  getAll,
};

async function authenticate({ email, password }) {
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}

async function getAll() {
  return users.map((u) => {
    const { password, ...userWithoutPassword } = u;
    return userWithoutPassword;
  });
}
