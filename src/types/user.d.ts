interface User extends Resource
{
  email?: string;
  password?: string | null;
  username: string;
}
