
import PropTypes from 'prop-types';

const FeaturesBox = (props) => {
    const {img , para} = props ;
  return (
    <div className='flex justify-around items-center'>
            <img src={`assets/icons/${img}`} alt="icon" width={'135px'} height={'143px'} />
            <p className='font-medium text-base'>{para}</p>
        </div>
  )
}
FeaturesBox.propTypes = {
    img : PropTypes.string,
    para : PropTypes.string
}

export default FeaturesBox