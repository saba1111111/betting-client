export interface IEvent {
  id: number;
  event_id: number;
  event_name: string;
  odds: number;
}

export interface IUser {
  user_id?: number;
  email: string;
  password?: string;
  name: string;
}
