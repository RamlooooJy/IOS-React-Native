export const todoModel:todoModelType = {
  apiGetNew: null
}


type todoModelType = {
  apiGetNew: ((num?: number)=>void) | null
}
