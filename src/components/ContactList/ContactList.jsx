import s from "./ContactList.module.css"

const ContactList = ({ contacts, onDeleteContact }) => (
     <ul className={s.listContainer}>
        {contacts.length>0? contacts.map(({ id, name, number}) => (
            <li key={id} className={s.listItem}>  <div className={s.contactInfo}>
            <span className={s.contactName}> {name} </span> : {number} </div>
            <button type="button" onClick={() => onDeleteContact(id)} className={s.deleteButton}>
          Delete
                </button>
            </li>
        )
        ):<div></div>}
    </ul>

)
export default ContactList;