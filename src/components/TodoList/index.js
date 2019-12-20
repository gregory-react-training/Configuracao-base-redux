import React from 'react';

import {Text, Button, SafeAreaView} from 'react-native';

import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import * as TodosActions from '~/store/actions/todos';

import styles from './styles';

const TodoList = ({todos, addTodo, markAsCompleted}) => (
  <SafeAreaView style={styles.container}>
    {todos.map(todo => (
      <Text
        onPress={() => markAsCompleted(todo.id)}
        style={todo.completed ? styles.textoRiscado : styles.textoNormal}
        key={todo.id}>
        {todo.text}
      </Text>
    ))}
    <Button onPress={addTodo} title="Adicionar todo" />
  </SafeAreaView>
);

//Mapeia o estado global do redux para props dentro do componente, podendo selecionar informações específicas
const mapStateToProps = state => ({
  todos: state,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
