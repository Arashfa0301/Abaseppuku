export interface UserType {
  _id: string;
  username: string;
  hash: string;
  active: boolean;
  admin: boolean;
  moderator: boolean;
  cardKey: string;
}
