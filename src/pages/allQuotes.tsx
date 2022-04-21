import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const DummyData = [
    {
        id: 'q1', author: 'Gondal', text: 'Gondal, Gondal from Surat'
    },
    {
        id: 'q2', author: 'AK', text: 'It"s AK time'
    },
];
const AllQuotes = () => {
    return (
        <QuoteList quotes={DummyData} />
    );
};

export default AllQuotes;