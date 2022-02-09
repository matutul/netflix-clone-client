import './list.scss';
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import ListItem from '../listItem/ListItem';

const List = () => {
    return (
        <div className="list">
            <span>Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosNewOutlined className="slideArrow left"/>
                <div className="container">
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
                <ArrowForwardIosOutlined className="slideArrow right"/>
                
            </div>
        </div>
    );
};

export default List;