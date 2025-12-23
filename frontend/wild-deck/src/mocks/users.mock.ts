export type MockUser = {
  id: number;
  name: string;
  email: string;
  password: string;
  //level
};

export const mockUsers: MockUser[] = [
  {
    id: 1,
    name: "Josito",
    email: "admin@wilddeck.com",
    password: "12345678A*",
  },
  {
    id: 2,
    name: "Explorador",
    email: "user@wilddeck.com",
    password: "123456",
  },
];
