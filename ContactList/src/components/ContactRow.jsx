import { useState } from "react";

function ContactRow({contact}) {

  const [contactList , setSelectedContactId] = useState('')

  return (
    <>
    <tr onClick={() => {
      setSelectedContactId(contact.id);
    }}
>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
    </>
  );
}


export default ContactRow