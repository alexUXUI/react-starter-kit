import * as React from 'react'
import { AppLogic } from './App.logic';
import './App.styles.css';

export const App = () => {

    const [sum, setSum] = React.useState<number>(0);

    return (


        <div className="app" data-testid="app">
            <h1>Book Of Business</h1>
            <button
                onClick={(e) => {
                    import('./App.logic').then((logic: AppLogic) => {
                        let newSum = logic.sum(1, 9);
                        return setSum(newSum);
                    });
                }}

            >
                sum
        </button>
            {sum}
        </div>
    )
}

