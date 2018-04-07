import React from 'react';

function DiseaseListItem(props) {
    return (
        <div className={'row research-item'}>
            <div className={'col-lg-10'}>
                <h3>{props.item['name']}</h3>
            </div>
            <div className={'col-lg-2'} style={{float: 'right'}}>
                <h3>{props.item['P']}</h3>
            </div>
        </div>
    )
}

export default DiseaseListItem