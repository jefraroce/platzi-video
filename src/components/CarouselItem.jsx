import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.webp';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isFavorite } = props;

  const handleAddFavorite = () => {
    props.addFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };

  const handleDeleteFavorite = () => {
    props.deleteFavorite(id);
  };

  const mainActionButton = () => {
    if (isFavorite) {
      return <img className='carousel-item__details--img' src={removeIcon} alt='Trash Icon' onClick={handleDeleteFavorite} />;
    }

    return <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' onClick={handleAddFavorite} />;
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
          {mainActionButton()}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {
  addFavorite,
  deleteFavorite,
};
export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);
