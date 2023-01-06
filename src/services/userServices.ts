export interface User {
  id: number;
  email: string;
  name: string;
  status: "active" | "inActive";
  phoneNumbers: string[];
}

export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">;

// await 'coder'
export class UserCreation {
  public get(id: number, name?: string): User {
    return {
      id,
      name: name ?? "Nabin",
      email: "nabin@gmail.com",
      status: "inActive",
      phoneNumbers: [],
    };
  }

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000),
      status: "inActive",
      ...userCreationParams,
    };
  }
}
