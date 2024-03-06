import '../styles/Bottom.css'

function Bottom() {
    return (
        <div className="bottom_container" id='bottom'>
            <div className='bottom_inner_container'>
                {/* <div className='bottom_inner_left'>
                    <a href='a' className='bottom_txt'>LinkedIn</a>
                    <a href='a' className='bottom_txt'>Instagram</a>
                    <a href='a' className='bottom_txt'>App Store</a>
                </div> */}
                <div className='bottom_inner_left'>
                    {/* <a
                        className='bottom_txt'
                        href='www.com'
                    >Contact</a> */}
                    <text className='bottom_txt'>Based in Atlanta</text>
                    <text className='bottom_txt'>Copyright 2024 Little By Ticket LLC. All Rights Reserved</text>
                </div>
            </div>
        </div>
    );
}

export default Bottom;
