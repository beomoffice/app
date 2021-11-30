import React from 'react';
import { createGlobalStyle  } from 'styled-components';
import TodoCreate from './todo/components/TodoCreate';
import TodoHead from './todo/components/TodoHead';
import TodoList from './todo/components/TodoList';
import TodoTemplate from './todo/components/TodoTemplate';
import { TodoProvider } from './todo/TodoContext';

const GlobalStyle = createGlobalStyle `
    body {
        background : #e9ecef;
    }
`

export default function App(){
    return (
        <TodoProvider>
            <GlobalStyle/>
            <TodoTemplate>
                <TodoHead/>
                <TodoList/>
                <TodoCreate/>
            </TodoTemplate>
        </TodoProvider>
    )
}