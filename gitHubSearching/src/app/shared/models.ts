export interface Repository {
  id: number;
  name: string;
  fullName: string;
  description: string;
  stars: number;
  openIssuesCount: number;
  url: string;
  programmingLanguage: string;
  owner: string;
}


export interface Contribution {
  author: Author;
  contributionsCount: number;
}

export interface Author {
  userName: string;
  avatarUrl: string;
  profileUrl: string;
}
