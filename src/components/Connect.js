import '../styles/Connect.css'

function Connect() {

    return (
        <div className="connect_container" id='connect'>
            <div className='connect_inner_container'>
                <text className='connect_title_txt'>Connect</text>
                <div className='connect_inner_body'>
                    <input className='connect_input' placeholder='Name' />
                    <input className='connect_input' placeholder='Email' />
                    <input className='connect_input' placeholder='Subject' />
                    <textarea className='connect_input' placeholder='Body' />
                    <button className='connect_button'>
                        <text className='connect_button_txt'>Submit</text>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Connect;
