export class Foo<T> {
  constructor(public bar: T) {}
  something() {
    return { ...this.bar };
  }
  another(thing: string) {
    return 'yes, ' + thing;
  }
}
