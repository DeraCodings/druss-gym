import './styles/footer.css';

export function Footer(props) {
    const { contacts } = props;
    return (
        <div className='footer'>
            <div className='footer-bg'>
                <h2>GET IN TOUCH <br />TODAY</h2>
            </div>
            <div className='contact'>
                {contacts.map((contact, idx) => (
                    <div key={idx}>
                        <h3>{ contact.heading }</h3>
                        <p>{ contact.address }</p>
                    </div>
                ))}
            </div>
        </div>
    )
}