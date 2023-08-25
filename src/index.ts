const message: string = "Hello world";
const numbers: Array<number> = [1, 2];
const person: PersonType = { name: "Saulo", age: 27 };
console.log(message, numbers, person);

type SafeNumber = number | `${number}`;

enum Height {
  NONE,
  SHORT = "SHORT",
  AVG = "AVG",
  LONG = "LONG",
}

console.log(Height.NONE);
console.log(Height.SHORT);
console.log(Height.AVG);
console.log(Height.LONG);

type PersonType = {
  name: string;
  age: SafeNumber;
  email?: string;
  height?: Height;
};

const anotherPerson: PersonType = {
  name: "Tarso",
  age: 27,
  email: "tarso@email.com",
  height: 0,
  // cpf: '12345678909'
};

const anotherPerson1: PersonType = {
  name: "Tarso",
  age: 27,
  email: "tarso@email.com",
  // height: "NONE",
};
const anotherPerson2: PersonType = {
  name: "Tarso",
  age: 27,
  email: "tarso@email.com",
  height: Height.NONE,
};

type GroupType = {
  members: PersonType[];
};

const myGroups: GroupType = {
  members: [
    {
      name: "Saulo",
      age: 27,
    },
    {
      name: "Saulo",
      age: "27",
    },
  ],
};

interface NamedGroupInterface extends GroupType {
  name: string;
}

const namedGroup: NamedGroupInterface = {
  name: "React Training Group",
  members: [],
};

type FocusedGroupType = GroupType & { focus: string; count?: number };

const focusedGroup: FocusedGroupType = {
  members: [],
  focus: "React",
};

const createGroup = (
  people: PersonType[],
  name: string = null
): GroupType | NamedGroupInterface => {
  if (!name) {
    return {
      members: people,
    };
  }

  return {
    name,
    members: people,
  };
};

const newGroup = createGroup([person], "new");
console.log(newGroup);
