export interface TodoModel {
    id : number;
    title : string;
}

export let todos:TodoModel[] = [
    {
        id : 1,
        title : 'Meditate 1 hour'
    },
    {
        id : 2,
        title : 'Sport 30 minutes'
    },
    {
        id : 3,
        title : 'Read a book'
    }
]