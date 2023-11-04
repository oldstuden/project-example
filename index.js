import * as contactService from './contacts.js';
import yargs from 'yargs';

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContact = await contactService.listContacts();
      return console.table(allContact);
    case 'get':
      const oneContact = await contactService.getContactById(id);
      return console.log(oneContact);
    case 'add':
      const newContact = await contactService.addContact({
        name,
        email,
        phone,
      });
      return console.log(newContact);
    case 'remove':
      const deleteContact = await contactService.removeContact(id);
      return console.log(deleteContact);
    default:
      console.warn('\x1B[31m Unknow action type!');
  }
};
// invokeAction({ action: 'list' });
// invokeAction({ action: 'getById', id: 'vza2RIzNGIwutCVCs4mCL' });
// invokeAction({
//   action: 'add',
//   name: 'Robin Good',
//   email: 'robin@good.net',
//   phone: '(322) 223-3232',
// });
// invokeAction({ action: 'deleteById', id: 'lUCOoyM9gtOn7U7R5rHNt' });
const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);
