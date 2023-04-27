export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  label: string;
  value: string | number;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
