const profile = {
  name: 'jason',
  age: 10,
  coords: {
    lat: 200,
    long: 150,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
