interface Contact extends Address{
  id: number
  name: string
  birthDate?: Date //optional chaining
}
interface Address{
  line1: string
  line2: string
  province:string
  region: string
  postalCode: string
}
let primaryContact: Contact ={
  name: "james johnson",
  id:12345,
  // birthDate: '01-01-1980', // dont allow to have variables with other types being optional chaining too
  birthDate: new Date('01-01-1980')
}