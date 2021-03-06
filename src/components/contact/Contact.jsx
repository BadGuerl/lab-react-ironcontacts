function Contact(props) {
    const { contact, deleteContact } = props;

    return (
        <div className="m-5 d-flex justify-content-center">
            <tr className="border border-dark border-2 p-3">
                <td><img className="img-responsive m-2 rounded-2" style={{ 'max-width' : '200px' }} src={ contact.pictureUrl } alt={ contact.pictureUrl }  /></td>
                <td className="p-5"><h2>{ contact.name }</h2></td>
                <td className="pe-5"><h6>{ contact.popularity }</h6></td>
                <td><button className="btn btn-dark" onClick={() => deleteContact(contact.id)} ><i className="fa fa-trash"></i></button></td>
            </tr>
        </div>
    );
}

export default Contact