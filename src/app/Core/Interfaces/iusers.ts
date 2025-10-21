export interface Details {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password?: string;
  birthDate?: string;
  image?: string;
}

export interface IUsers { //pagination
  limit: number;
  skip: number;
  total: number;
  users: Details[];
}
