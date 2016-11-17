import React, {PropTypes} from 'react'
import Icon from '../../../components/Icon'
import Anchor from '../../../components/Anchor'

const MoreInfo = ({url}) => (
  <Anchor url={url}>
    <Icon type='more-info' />
  </Anchor>
)

MoreInfo.propTypes = {
  url: PropTypes.string.isRequired,
}

export default MoreInfo

