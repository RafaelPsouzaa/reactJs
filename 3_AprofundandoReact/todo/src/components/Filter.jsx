
const Filter = ({filter,setFilter,setSort}) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <p>Status:</p>
        <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
        <option value="All">Todas</option>
        <option value="Completed">completas</option>
        <option value="Incomplete">Incompletas</option>
        </select>
      </div>
      <div className="ordem-alfabetica">
        <p>Ordem Alfabetica:</p>
        <button onClick={()=>setSort("ASC")}>ASC</button>
        <button onClick={()=>setSort("DESC")}>DESC</button>
      </div>
    </div>
  )
}

export default Filter