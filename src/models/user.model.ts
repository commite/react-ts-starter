export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public avatar: string;

  constructor(user: User) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.avatar = user.avatar;
  }
}