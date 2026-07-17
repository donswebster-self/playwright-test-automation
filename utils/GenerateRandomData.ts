import { faker } from '@faker-js/faker';
import { DateTime } from "luxon";

export class GenerateRandomData {

    static getFirstName(): string {
        return faker.person.firstName();
    }

    static getLastName(): string {
        return faker.person.lastName();
    }

    static getDateOfBirth(): string {
        return DateTime.fromJSDate(faker.date.birthdate()).toFormat("yyyy-MM-dd");
    }

    static getCountry(): string {
        return 'United States of America (the)'; // Fixed country to match ISO dropdown values
    }

    static getPostalCode(): string {
        return faker.location.zipCode();
    }

    static getHouseNumber(): string {
        return faker.location.buildingNumber();
    }

    static getStreet(): string {
        return faker.location.streetAddress();
    }

    static getCity(): string {
        return faker.location.city();
    }

    static getState(): string {
        return faker.location.state();
    }

    static getPhone(): string {
        return faker.string.numeric(10); // Using string.numeric() to generate 10-digit only values for phone numbers (excluding extensions)
    }

    static getEmailAddress(): string {
        return faker.internet.email();
    }

    static getPassword(): string {
        return faker.internet.password({length: 6}) + '1!'; // Appends digit and symbol to satisfy site's password complexity rules
    }
}