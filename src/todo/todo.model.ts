export class Todo{
   
    constructor(public id: number, public title: string, public description: string){
        this.id = id;
        this.title = title;
        this.description = description;
    }
}