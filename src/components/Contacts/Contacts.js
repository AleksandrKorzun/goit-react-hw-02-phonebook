import ContactsListItem from "./ContactsListItem/ContactsListItem";

const Contacts = ({contacts}) => {
    return (
        <>
            <h2>Contacts</h2>
            <ul>
                <ContactsListItem contacts={contacts}/>
            </ul>
        </>
    );
}

export default Contacts;