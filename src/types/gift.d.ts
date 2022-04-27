interface Gift extends Resource
{
  title: string;
  price: number;
  buyer: People;
  receiver: People;
  events: Event[];
  participants: People[];
}
