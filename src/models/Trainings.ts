export class Trainings {
    introduction: string;
    trainingsArray: {
        period: {
            startDate: Date;
            endDate: Date;
        },
        label: string;
        school: string;
        description: string;
    }[];
}