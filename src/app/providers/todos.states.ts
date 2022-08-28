export interface TodoModel {
    id : number;
    title : string;
}

export let todos:TodoModel[] = [
    {
        id : 1,
        title : 'medidate 1 hour'
    },
    {
        id : 2,
        title : 'sport 30 minutes'
    },
    {
        id : 3,
        title : 'read a book'
    }
]