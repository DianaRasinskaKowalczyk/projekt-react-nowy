import styles from './Card.module.scss'
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';

const Card = ({ title, isFavorite, id }) => {

    const dispatch = useDispatch();


    const classChange = () => {
        dispatch(toggleCardFavorite({id, isFavorite}));
      };

      
    return (
        <li className={styles.card}>{title}
            <button type="button" onClick={ classChange }  className={clsx(styles.button_star, isFavorite && styles.active) }>
                <span className='fa fa-star-o'></span>
            </button>
        </li>
    )}

export default Card;