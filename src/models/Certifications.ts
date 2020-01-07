export class Certifications {
    introduction: string;
    certificationsArray: {
        period: {
            startDate: Date;
            endDate: Date;
        },
        label: string;
        company: string;
        description: string;
    }[];
}