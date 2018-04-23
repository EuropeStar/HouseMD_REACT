import React from 'react';
import FullHeightContainer from "../components/FullHeightContainer";
import SecondaryText from "../components/SecondaryText";
import Warn from "../components/Warn";

function NotFound(props) {
    return (
        <FullHeightContainer>
            <div className={'text-centered secondary-text'} style={{fontSize: '250px', marginTop: '130px'}}>
                404
            </div>
            <div className={'text-centered secondary-text'} style={{fontSize: '60px'}}>
                Запрашиваемая страница не найдена! :(
            </div>
        </FullHeightContainer>
    )
}

export default NotFound