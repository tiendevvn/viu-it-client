export type History = {
  push(url: string): void;
  replace(url: string): void;
};

export type MatchParams = {
  student_id: string;
};
