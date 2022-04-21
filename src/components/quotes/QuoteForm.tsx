import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './QuoteForm.module.css';

const QuoteForm = (props: any) => {
  const [focus, setFocus] = useState(false);
  const authorInputRef: any = useRef();
  const textInputRef: any = useRef();

  function submitFormHandler(event: any) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const onClearHandler = () => {
    setFocus(false);
  }

  const focusHandler = () => {
    setFocus(true);
  }

  return (
    <Fragment>
      <Prompt when={focus} message={(location) => 'Are you sure to leave the page?'} />
      <Card>
        <form onFocus={focusHandler} className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={onClearHandler} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
