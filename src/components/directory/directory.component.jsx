//test
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import '../directory/directory.styles.scss'

import MenuItem from '../menu-Item/menu-Item.component'

const Directory = ({sections}) => (
  <div className = 'directory-menu'>
    {
      sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps} />))
    }
  </div>
)
const mapStateToPrpos = createStructuredSelector({
  sections: selectDirectorySections
});



export default connect(mapStateToPrpos)(Directory)