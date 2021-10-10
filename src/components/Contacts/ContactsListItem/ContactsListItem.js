const ContactsListItem = ({contacts}) => {
    return (
        contacts.map(({name, number, id})=>
            <li key={id}>
                {name}: {number}
            </li>
        )
    );
}

export default ContactsListItem;