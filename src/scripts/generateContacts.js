import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";

const generateContacts = async (number) => {
    try {
        const contactsArr = await readContacts();
        const newContactsArr = [];
        
        for (let i = 0; i < number; i+=1) {
         newContactsArr.push(createFakeContact());
        } 

        const updatedContacts = [...contactsArr, ...newContactsArr];
        await writeContacts(updatedContacts);

    } catch (error) {
        console.error(error);
    }
};

generateContacts(4);




