export class Personne {
  constructor(
    public id: number = 0,
    public name: string = '',
    public firstname: string = '',
    public job: string = '',
    public path: string = '',
    public age: number = 0,
    public cin: number = 0
  ) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.age = age;
    this.path = path;
    this.job = job;
    this.cin = cin;
  }
}
