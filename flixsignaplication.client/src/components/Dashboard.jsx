import React from 'react';
import BookList from './BookList';
import * as styled from '../styles/styled' 

export default function Dashboard() {
    return (
        <>
        <styled.ContainerList>
            <BookList />
        </styled.ContainerList>
        </>
    )
}