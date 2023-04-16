

export function Filter({text, onChangeFilter}) {
    return (
        <label>
            Find contacts by name
            <input type="text" value={text} onChange={onChangeFilter} />
        </label>                
    );
}