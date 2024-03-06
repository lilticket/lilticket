import '../styles/Products.css'

function Products() {
    return (
        <div className="products_container" id='products'>
            <div className='items_container'>
                <div className='item'>
                    <text className='item_title_txt'>Rect!</text>
                    <text className='item_body_txt'>
                        Close your eyes for a moment and imagine the world of your dreams. Really focus on the details.
                        Really dig into all of the small, seemingly insignificant details that add together to make that world perfect.
                        <br />
                        <br />
                        Feel that warm breeze on your cheek? Feel the hot sand on your feet? Feel that cold drink in your hand?
                        Of course not!
                        The world you're imaging isn't some boring beach paradise, it's a white void full of rectangles!
                        Immerse yourself in a jaw dropping world of whizzing blocks and close calls, in a world of quick jumps and the occasional 'Yikes!',
                        in a world you've never known before, in Rect!
                    </text>
                    <a
                        className='item_link_txt'
                        href='https://apps.apple.com/us/app/rect/id1621862206'
                        target='_blank'
                    > View Store Page </a>
                </div>
                <div className='item'>
                    <text className='item_title_txt'>Pink Lotus</text>
                    <text className='item_body_txt'>
                        The classic game known by as many names as there are strategies to Win!
                        <br />
                        <br />
                        Whether you call it Karma, Palace, or Pink Lotus,
                        the game remains boundlessly playable and an all-time classic.
                        <ul>
                            <li>Real-time Multiplayer across Devices.</li>
                            <li>Live in-game Chat.</li>
                            <li>Consistent Stat Tracking.</li>
                        </ul>
                    </text>
                    <a
                        className='item_link_txt'
                        href='https://apps.apple.com/us/app/pink-lotus/id1638838463'
                        target='_blank'
                    > View Store Page </a>
                </div>
                <div className='item'>
                    <text className='item_title_txt'>Strawz</text>
                    <text className='item_body_txt'>
                        Share your opinion everyday and see the most popular answers from around the Globe!
                        <ul>
                            <li>Who are the most overrated artists?</li>
                            <li>Who are the best movie villains?</li>
                            <li>What is the best vacation spot?</li>
                        </ul>
                    </text>
                    <text
                        className='item_link_txt'
                        href='a'
                    > Coming Soon </text>
                </div>
            </div>
        </div>
    );
}

export default Products;
