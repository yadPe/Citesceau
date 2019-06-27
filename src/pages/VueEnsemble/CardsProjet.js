import React from 'react';
import './CardsProjet.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

const CardsProjet = (props) => {
    return (
        <div>
            <div clasName='divCards'>
                <Card style={{ width: '80%' }} >
                    <CardImg top width="100%" src="https://www.bigmoustache.com/blog/wp-content/uploads/2018/03/poisson-avril-1140x650.jpg" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        </div >
    );
};
export default CardsProjet;