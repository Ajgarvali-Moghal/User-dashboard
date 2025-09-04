// export interface User {
// role: any;
// name: any;
//   id?: number;
//   username: string;
//   email: string;
//   jobRole: 'tech' | 'id' | 'gd' | 'qa';
// }

export interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  role: 'tech' | 'id' | 'gd' | 'qa';
  jobRole: 'tech' | 'id' | 'gd' | 'qa';
}