import TodoItem from './TodoItem';

const TodoList = () => {
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                <TodoItem description="Buy groceries" finished={true} />
                <TodoItem description="wash the car" finished={false} />
                <TodoItem description="Red a book" finished={false} />
            </ul>
        </div>
    );
};

export default TodoList;
