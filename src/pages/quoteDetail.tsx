import React, { Fragment } from "react";
import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DummyData = [
    {
        id: 'q1', author: 'Gondal', text: 'Gondal, Gondal from Surat'
    },
    {
        id: 'q2', author: 'AK', text: 'It"s AK time'
    },
];
const QuoteDetail = () => {
    const params: any = useParams();

    const quote = DummyData.find(quote => quote.id === params.quoteId);
    if (!quote) {
        return (
            <p>No quote Found</p>
        )
    }
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <div className="centered">
                <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
                    Load Comments
                </Link>
            </div>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;