export interface ITodo {
    id: number
    text: string
    status: boolean
};
export interface IAction {
  type:string,
  payload?:[]|number|string|ITodo[]
  id?:number,
};