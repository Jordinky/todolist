module.exports = class Todo {

  public id: string;
  public description: string;
  public completed: boolean;
  public createdAt: string;
  public updatedAt: string;

  public constructor(id: string, description: string, completed: boolean, createdAt: string, updatedAt: string){
    this.id = id;
    this.description = description;
    this.completed = completed;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getTodo(): any{
    return this.description + this.completed;
  }
}

