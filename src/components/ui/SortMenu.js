import { PropTypes } from 'react'
import '../../stylesheets/Menu.scss'

const options = {
    date: "SORTED_BY_DATE",
    title: "SORTED_BY_TITLE",
    rating: "SORTED_BY_RATING"
}

const SortMenu = ({ sort=options.date, onSelect= f => f }) => 
    <nav className='menu'>
        <h1>Sort Colors</h1>
        {Object.keys(options).map((item, i) =>
            <a key={i}
               href="#"
               className={(sort === options[item]) ? "selected" : null}
               onClick={e => {
                   e.preventDefault()
                   onSelect(options[item])
               }}>{item}</a>
        )}
    </nav>

SortMenu.PropTypes = {
    sort: PropTypes.string,
    onSelect: PropTypes.func
}

export default SortMenu