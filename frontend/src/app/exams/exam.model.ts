export class Exam {
    constructor(
      public title: string,
      public description: string,
      public _id?: number,
      public updatedAt?: Date,
      public createdAt?: Date,
      public lastUpdatedBy?: string,
    ) { }
  }

export interface lExam{
    title: string,
    description: string
}

export const superman: lExam = {
    title: 'superman',
    description: 'il n y a pas de description qui tienne'
}
