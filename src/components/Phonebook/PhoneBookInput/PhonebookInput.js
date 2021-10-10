const PhonebookInput = ({name, number, onSubmitContacts, onChangeInpuntName}) => {
    return (
        <form onSubmit={onSubmitContacts}>
            <h2>Phonebook</h2>
            <label>
                Name
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={onChangeInpuntName}
                value={name}
            />
            </label>
            <label>
                Number
                <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                onChange={onChangeInpuntName}
                value={number}
                />
            </label>
            <button type="submit">ADD contacts</button>
        </form>
    );
}

export default PhonebookInput;