import React from 'react';

export default function showImage({ imagesArray }) {

    return (
        imagesArray.map((image) => {
            return (
                <div>
                    <img alt="Happy Birthday" src={image} width="150" />
                </div>
            )
        })
    )
}
