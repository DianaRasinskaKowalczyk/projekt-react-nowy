import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addCard } from '../../redux/store';

const CardForm = ({ columnId }) => {

    const [searchString, setSearchString] = useState('');
   

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({ searchString, columnId }));
        setSearchString('');
    };


    const dispatch = useDispatch(); 

	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={searchString} onChange={e => setSearchString(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;