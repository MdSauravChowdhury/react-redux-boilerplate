import React from 'react'
import FooterComponent from './footer/footer.component';
import HeaderComponent from './header-component/header.component'
import TopMenuComponent from './menu/menu';
import ListComponent from './list-component/list.component';
import JambotronComponent from './jambotron/jambotron.component';
import {Button} from 'react-bootstrap';
import AddComponent from './add-component/add.component'
const BaseComponent = () => {
    return (
        <div>
            <TopMenuComponent />

            <JambotronComponent>
                <h1>Welcome our Website</h1>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <Button variant="primary">Learn more</Button>
            </JambotronComponent>

            <AddComponent />

            <HeaderComponent />
            <ListComponent />
            <FooterComponent />
        </div>
    )
}

export default BaseComponent;

