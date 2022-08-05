import React from 'react';
import ReactDOM from 'react-dom/client';
import './index2.css';

function FragmentDemo() {
    return (
        <>
            <h1> Fragement Demo </h1>
            <p> It is about Fragment demo </p>
        </>
    )
}

function Table() {
    return (
        <table>
            <tbody>
                <tr>
                    <Columns />
                </tr>
            </tbody>
        </table>
    )
}

function Columns() {
    return (
        <React.Fragment>
            <td> Bharath </td>
            <td> NP </td>
        </React.Fragment>
    )
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Table />
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
