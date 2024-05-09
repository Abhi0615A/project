export interface IEmployee {
  id: string;
  firstname: string;
  mobileNum: number;
  email: string;
  gender:string;
  designation:string;
  course:string;
  image:string
}

export enum PageEnum {
  list,
  add,
  edit,
}
