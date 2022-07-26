import styles from './List.module.scss';
import Column from '../Column/Column';
import SearchForm from '../SearchForm/SearchForm'
import ColumnForm from '../ColumnForm/ColumnForm';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getColumnsByList, getListById} from '../../redux/store';
import { useParams } from 'react-router';

const List = () => {

    // const columns = useSelector(getAllColumns);

    const { listId } = useParams();

    const columns = useSelector((state) => getColumnsByList(state, listId));
    const listData = useSelector((state) => getListById(state, listId));


  if(!listData) return <Navigate to="/" />;

  return (
        <div className={styles.list}>
          <header className={styles.header}>
            <h2 className={styles.title}>{listData.title}</h2>
          </header>
          <SearchForm />
          <p className={styles.description}>{listData.description}</p>
          <section className={styles.columns}>
            {columns.map(column =>
              <Column
                key={column.id}
                {...column}  />
            )}
          </section>
          <ColumnForm listId={listId} />
        </div>
      );
};

export default List;
