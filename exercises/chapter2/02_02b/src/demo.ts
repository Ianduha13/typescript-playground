type ContactName = string

interface Contact extends Address{
  id: number
  name: ContactName //alias type
  birthDate?: Date //optional chaining
  status: ContactStatus
}

enum ContactStatus{
  Active= "active",
  Inactive = "inactive",
  New = 'new'
}

interface Address{
  // line1: string
  // line2: string
  // province:string
  // region: string
  // postalCode: string
}

let primaryContact: Contact ={
  name: "james johnson",
  id:12345,
  // birthDate: '01-01-1980', // dont allow to have variables with other types being optional chaining too
  birthDate: new Date('01-01-1980'),
  status: ContactStatus.Inactive
}