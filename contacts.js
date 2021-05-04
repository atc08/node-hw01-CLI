const fs = require("fs/promises");
const path = require("path");
// import path from "path";
const argv = process.argv;

const contactsPath = path.join(__dirname, "./db/contacts.json");

// (async () => {
//   const data = await fs.readFile(contactsPath);
//   const content = JSON.parse(data);
//   if (argv[2] === "--list") {
//     console.table(content);
//   } else {
//     const [_, __, name, email, phone] = argv;
//     content.push({ name, email, phone });
//     await fs.writeFile(contactsPath, JSON.stringify(content, null, 2));
//     console.table(content);
//   }
// })();

// function listContacts() {
//   const data = fs.readFile(contactsPath);
//   const content = JSON.parse(data);
//   if (argv[2] === "--list") {
//     console.table(content);
//   } else {
//     const [_, __, name, email, phone] = argv;
//     content.push({ name, email, phone });
//     fs.writeFile("db/contacts.json", JSON.stringify(content, null, 2));
//   }
// }
function listContacts() {
  const data = fs.readFile(contactsPath);
  const content = JSON.parse(data);
  // if (argv === "--list") {
  console.table(content);
  // }
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  try {
    const data = fs.readFile(contactsPath);
    const content = JSON.parse(data);
    content.push({ name, email, phone });
    fs.writeFile(contactsPath, JSON.stringify(content, null, 2));
    return console.table(content);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
