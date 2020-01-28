import React from 'react';
import ColletionItem from '../colletion-item/collection-item';
import './preview-collection.styles.scss';

const PreviewCollection = ({ title, items}) =>(
    <div className='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item ,idx)=> idx <4).map( ({id,...itemsProps}) => (
                    <ColletionItem key={id} {...itemsProps}/>
                ))
            }
        </div>
    </div>
)

export default PreviewCollection;