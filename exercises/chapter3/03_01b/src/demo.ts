type ContactName = string;

type ContactStatus = "active" | "inactive" | "new" // a way to use enums with only type declaration

type ContactBirthDate = Date | number | string; // pipe sintax to accept more than 1 type

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate
    status?: ContactStatus;
}
type AddressableContact = Contact & Address // combining 2 interfaces into one type

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}
// here we make 3 types of function to handle every type of data
function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        return contact.birthDate
    }
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}
