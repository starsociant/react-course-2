// Basic types
const peopleName: string = "Saulo";
const height: number = 173;
const isPresenting: boolean = true;

// Function & params
const arrowGreeting = (name: string): string => name;
function greeting(name: string) {
  return `Hello, ${name}`;
}

// Array & object type
const fruits: Array<string> = ["banana"];
const people: object = {};

// Type
interface PersonInterface {
  name: string;
  height: number;
}

type SafeNumber = number | `${number}`;

// Interfaces
type PersonType = {
  name: string;
  height: SafeNumber;
  devTime?: DevTime;
  group?: PersonInterface[];
};

// Enums
enum DevTime {
  BEGINNER = "BEGINNER",
  MIDLEVEL = "MIDLEVEL",
  EXPERT = "EXPERT",
}

const person: PersonType = {
  name: "Saulo",
  height: 173,
  devTime: DevTime.MIDLEVEL,
};

const person2: PersonType = {
  name: "Tarso",
  height: 173,
};

// Inheritance
interface GroupInterface {
  members: PersonType[];
}

const group1: GroupInterface = {
  members: [person],
};

interface NamedGroupInterface extends GroupInterface {
  name: string;
}

const namedGroup: NamedGroupInterface = {
  name: "React",
  members: [],
};

// Custom Functions
type UnnamedCountedInterface = Omit<NamedGroupInterface, "name"> & {
  count: number;
};

type PlainGroupInterface = Pick<NamedGroupInterface, "members">;

const countedGroup: UnnamedCountedInterface = {
  members: [],
  count: 0,
  // name: "string",
};

interface DevTeamInterface {
  BEGINNER: PersonType[];
  MIDLEVEL: PersonType[];
  EXPERT: PersonType[];
}

type DevTeamType = Record<DevTime, PersonType>;
