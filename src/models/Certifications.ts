export class Certifications {
    introduction: string;
    certificationsArray: {
        period: {
            startDate: Date;
        },
        label: string;
        company: string;
        description: string;
    }[];
}