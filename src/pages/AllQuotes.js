import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Lee', text: 'aaa'},
    {id: 'q2', author: 'Jacob', text: 'bbb'}
];

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES}/>;
};

export default AllQuotes;