export class Contact {
    id!: number;
    firstName!: string;
    lastName!: string;
    gender: string = "Male";
    email!: string;
    phone!: string;
    dob!: string;
    picture?: string;
    city?: string;
    state?: string;
    country?: string;
}
