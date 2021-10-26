import React, { useState } from 'react';
import './sidebar.css';
import WidgetsIcon from '@material-ui/icons/Widgets';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    const links = [
        'Echo and Alexa',
        'Kindle',
        'Books',
        'Electronics',
        'Home and Garden',
        'Fashion',
        'Health and Beauty',
        'Automotive',
        'Sport and Tourism',
        'Games',
        'Film and Music',
        'Animals',
        'Hobby',
        'Gift Cards',
    ];

    const [click, setClick] = useState({
        categories: false,
        sellOnAmazon: false,
        help: false,
    });

    return (
        <div className='sidebar'>
            <ul className='list'>
                <li className='list__item'>
                    <div
                        className={`list__itemContainer list__button--click ${
                            click.categories && 'line'
                        }`}
                    >
                        <div
                            onClick={() => {
                                setClick({
                                    sellOnAmazon: false,
                                    help: false,
                                    categories: !click.categories,
                                });
                            }}
                            className={`list__button ${
                                click.categories && 'selected'
                            }`}
                        >
                            <WidgetsIcon />
                            <p className='list__link'>Categories</p>
                        </div>
                    </div>

                    <ul
                        className='list__show'
                        style={
                            click.categories
                                ? { height: '493px' }
                                : { height: '0px' }
                        }
                    >
                        {links.map((link) => (
                            <li className='list__inside' key={link}>
                                <a
                                    href='/'
                                    className='list__link list__link--inside'
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className='list__item'>
                    <div
                        className={`list__itemContainer ${
                            click.sellOnAmazon && 'line'
                        }`}
                    >
                        <div
                            onClick={() => {
                                setClick({
                                    sellOnAmazon: !click.sellOnAmazon,
                                    help: false,
                                    categories: false,
                                });
                            }}
                            className={`list__button ${
                                click.sellOnAmazon && 'selected'
                            }`}
                        >
                            <FontAwesomeIcon
                                icon={faPercent}
                                style={{
                                    marginLeft: '0.3rem',
                                    fontSize: '1.1rem',
                                }}
                            />
                            <a href='/' className='list__link'>
                                Sell on Amazon
                            </a>
                        </div>
                    </div>
                </li>
                <li className='list__item list__link__help'>
                    <div
                        className={`list__itemContainer ${
                            click.help && 'line'
                        }`}
                    >
                        <div
                            onClick={() => {
                                setClick({
                                    help: !click.help,
                                    categories: false,
                                    sellOnAmazon: false,
                                });
                            }}
                            className={`list__button ${
                                click.help && 'selected'
                            }`}
                        >
                            <HelpOutlineOutlinedIcon />
                            <a href='/' className='list__link'>
                                Help
                            </a>
                        </div>
                    </div>
                </li>
                <li className='list__item'>
                    <div className='list__itemContainer'>
                        <div className='list__button'>
                            <ExitToAppOutlinedIcon />
                            <a href='/' className='list__link'>
                                Log Out
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
