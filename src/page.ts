type FocusedCountedGroupType = Omit<FocusedGroupType, "count"> & {
  count: number;
};

const group: FocusedCountedGroupType = {
  members: [],
  focus: "TS",
  count: 5,
};

type PlainGroupType = Pick<FocusedGroupType, "members">;

const plainGroup: PlainGroupType = {
  members: [],
};

type CountedGroupType = Omit<FocusedGroupType, "count" | "focus"> & {
  focus?: string;
  count: number;
};

const countedGroup: CountedGroupType = {
  members: [],
  focus: "TS",
  count: 5,
};

console.log(group, plainGroup, countedGroup);
