import '../styles/Middle.css'

function Middle() {
    return (
        <div className="middle_container">
            <div className='middle_scroll_container'>
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    );
}

function Item() {
    return (
        <div className='middle_item'>

        </div>
    )
}

export default Middle;
