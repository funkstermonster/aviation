export interface ResponseObject {
  response: Flight[]
}

export interface Flight {
  flight_number: number;
  status: string;
  duration: number;
}