import './list.scss';
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import ListItem from '../listItem/ListItem';
import { useRef, useState } from 'react';

const List = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const listRef = useRef()
    const handleOnClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === 'left' && slideNumber > 0) {
            listRef.current.style.transform = `translateX(${distance + 240}px)`;
            setSlideNumber(slideNumber - 1);
            
        }
        if (direction === 'right' && slideNumber < 5) {
            listRef.current.style.transform = `translateX(${distance - 240}px)`;
            setSlideNumber(slideNumber + 1);
        }

    }
    return (
        <div className="list">
            <span>Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosNewOutlined className="slideArrow left" onClick={() => handleOnClick("left")} style={{ display: !slideNumber && "none" }} />
                <div className="container" ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlined className="slideArrow right" onClick={() => handleOnClick("right")} style={{ display: slideNumber === 5 && "none" }} />

            </div>
        </div>
    );
};

export default List;