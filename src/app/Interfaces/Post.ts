export interface Post{
    createdAt?:string,
    title:string,
    image:string | null,
    body:string,
    id?:number
}