import * as React from 'react';

export interface HomeProps { 
    header: string;
}

export const Home = (props: HomeProps) => 
    <h1>
        Welcome to {props.header}!
    </h1>;
