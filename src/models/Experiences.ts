export class Experiences {
    introduction: string;
    experiencesArray: {
        period: {
            startDate: Date;
            endDate: Date;
        },
        label: string;
        company: string;
        description: string;
    }[];
}