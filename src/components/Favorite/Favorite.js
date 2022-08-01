import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFilteredFavoriteCards } from '../../redux/cardsRedux';


const Favorite = () => {

  const favoriteCards = useSelector(getFilteredFavoriteCards);


  return(
    <div>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.cardsWrapper}>
        <ul className={styles.cards}>
        	{ favoriteCards.map(card => <Card key={card.id} id={card.id} isFavorite={card.isFavorite} title={card.title} />) }
        </ul>
      </article>
    </div>
  )

}
export default Favorite;