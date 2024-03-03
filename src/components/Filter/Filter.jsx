import s from "./Filter.module.css"

const Filter = ({ value, onChange }) => (
  <div className={s.filterContainer}>   
  <label className={s.filterLabel}>
    Find contacts by name
    <input type="text" name="filter" value={value} onChange={onChange} className={s.filterInput}/>
    </label>
    </div>
)

export default Filter;