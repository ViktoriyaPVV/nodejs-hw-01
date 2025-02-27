import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => { 
    try {
        const allContacts = await readContacts();
        if (allContacts.length > 0)
             await writeContacts([]);
    } catch (error) {
        console.error(error); 
    }
};

removeAllContacts();
