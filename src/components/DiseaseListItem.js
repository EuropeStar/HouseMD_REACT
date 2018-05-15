import React from 'react';

function DiseaseListItem(props) {
    return (
        <div className={'row research-item'}>
            <div className={'col-lg-10'}>
                <h3>{props.item.disease.name}</h3>
            </div>
            <div className={'col-lg-2'} style={{float: 'right'}}>
                <h3>{parseFloat(props.item.prob) * 100 + "%"}</h3>
            </div>
        </div>
    )
}

export default DiseaseListItem