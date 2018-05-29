export class RoadtripStop {

 id: number;

 city: String;

 state: String;

milesDriven: number;

time: Date;

timeElapsed: String;

constructor (id?: number, city?: string, state?: string, milesDriven?: number, time?: Date, timeElapsed?: string) {
  this.id = id;
  this.city = city;
  this.state = state;
  this.milesDriven = milesDriven;
  this.time = time;
  this.timeElapsed = timeElapsed;
}
}
