import { Test } from "./Test";
export type User = {
  id: string;
  firstName: string;
  username: string;
  photoUrl?: string | null;
  tests?: Test[]
};