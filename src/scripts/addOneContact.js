import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => { 
    try {
        // const contactsArr = await readContacts();
        // const newContact = createFakeContact(); 
        // const updatedContacts = [...contactsArr, newContact];
        // await writeContacts(updatedContacts);
        const updatedContacts = await readContacts();
        const newContact = createFakeContact(); 
        updatedContacts.push(newContact);
        await writeContacts(updatedContacts);
    } catch (error) {
        console.log(error); 
    }
};

addOneContact();



