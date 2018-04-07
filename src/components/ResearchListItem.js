import React, {Component} from 'react';
import LinkOption from "./LinkOption";
import ListDivider from "./ListDivider";
import ElementDivider from "./ElementDivider";

function ResearchListItem(props) {

    return (
        <div>
            <div className={'research-item'}>
                <div className={'col-lg-11'}>
                    <ul className={'notif-inline-title'}>
                        <li className={'linear no-mar'}><span style={{fontSize: '40px', color: props.item.color}}
                                                              className={'material-icons'}>{props.item.img}</span>
                        </li>
                        <li className={'linear no-mar'}><h2 style={{color: '#323232'}}>{props.item.title}</h2></li>
                    </ul>
                    <p style={{fontSize: '21px'}}>
                        {Object.keys(props.item.propKeys).map((key) => {
                            return key + ": " + props.item.propKeys[key].join(', ') + '\n'
                        })}
                    </p>
                    <div className={'in-date'}>{props.item.date}</div>
                </div>
                <div className={'col-lg-1'}>
                    <div style={{position: 'absolute', bottom: '0'}}>
                        <a href={'#'} style={{fontSize: '20px'}}>Детали</a>
                    </div>
                </div>
            </div>
            <ElementDivider/>
        </div>
    )

}

export default ResearchListItem;