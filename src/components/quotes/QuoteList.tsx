import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import QuoteItem from './QuoteItem';

import classes from './QuoteList.module.css';

const sortQuotes = (quotes: any, ascending: any) => {
  return quotes.sort((quoteA: any, quoteB: any) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    };
  });
};

const QuoteList = (props: any) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isShortingAssending = queryParams.get('sort') === 'asc';
  const sortedQuotes = sortQuotes(props.quotes, isShortingAssending);
  const sortingHandler = () => {
    history.push('/quotes?sort=' + (isShortingAssending ? 'desc' : 'asc'));
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortingHandler}>Sort {isShortingAssending ? 'Descending' : 'Ascending'} </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote: any) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
