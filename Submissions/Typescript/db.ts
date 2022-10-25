enum UserRole {
  User,
  Admin,
  SuperAdmin,
}

// type Myrole="user"|"admin"|"super-admin";

// another use
type Myrole = "user" | "admin" | "super-admin" | string;

// creating array interface to implement in another interface
interface Todo {
  id: number;
  title: string;
  desc?: string; // optional
}

// creating interface with extends
interface ArchieveTodo extends Partial<Todo> {
  deletedAt: Date;
  deletedBy: string;
}

// how to omit certain key
interface Draft extends Omit<Todo, "id"> {
  createdAt: Date;
}

interface User {
  // role:UserRole
  // role:"user"|"admin"|"super-admin"
  // role: Myrole
  role: Myrole | string;
  id: number;
  firstName: string;
  lastName: string;
  age: string;
  todos: Todo[];
  archives: ArchieveTodo[];
  draft: Draft[]; // no id, child of to do
}

const createUser = (): User => {
  return {
    id: 1,
    firstName: "absyar",
    lastName: "fahimi",
    age: "23",
    // role: UserRole.Admin
    role: "not user",
    todos: [
      {
        id: 2,
        title: "my todo",
        desc: "new todo",
      },
      {
        id: 3,
        title: "my wowowo",
      },
    ],
    archives: [
      {
        id: 5,
        title: "archieve",
        desc: "hello archieve",
        deletedAt: new Date(),
        deletedBy: "me",
      },
    ],
    draft: [
      {
        title: "my draft",
        desc: "testing",
        createdAt: new Date(),
      },
    ],
  };
};

console.log(createUser());
