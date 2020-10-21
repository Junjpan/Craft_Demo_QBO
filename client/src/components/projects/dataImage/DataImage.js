import React from 'react';
import data_Image from '../../../assets/dataimage.png';
import './dataimage.scss';

const DataImage = () => {
    return (
        <div className="data_image">
            <img src={data_Image} alt='data_image' />
        </div>
    )
}

export default DataImage
