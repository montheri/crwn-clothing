import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
//import { selectShopCollections } from '../../redux/shop/shop.selectors'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

import CollectionPrview from '../collection-preview/collection-preview.component'


import './collections-overview.styles.scss'

const CollectionOverview = ({ collections }) => (
    <div className ='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPrview key={id} {...otherCollectionProps} />
         ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview)