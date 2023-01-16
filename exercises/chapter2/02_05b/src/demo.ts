interface Contact {
    id: number;
    name: string;
}
interface UserContact <TExternalID> {
    id: number;
    name: string;
    username: string
    externalId: TExternalID
    loadExternalID(): Task <TExternalID>
}

function clone<T1, T2 extends T1> (source: T1 ): T2 {
    return Object.apply({}, source);
}

const a: Contact ={ id:123, name:'Homer Simpson'}
const b = clone<Contact, UserContact>(a)

const dateRange = { startDate: Date.now(), endDate:Date.now() }
const dateRangeCopy = clone(dateRange)