export interface Recommend {
  id: string;
  name: string;
  recommendedBy: string;
  recommendedAt: string;
  actioned: boolean;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  recommends: Recommend[];
  accessToken: string;
}
