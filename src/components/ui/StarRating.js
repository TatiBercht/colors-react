import { PropTypes } from 'react'
import Star from './Star'

const StarRating = ({starsSelected=0, totalStars=5, onRate= f => f}) =>
    <div>
        {[...Array(totalStars)].map((n, i) => 
            <Star key={i} selected={i<starsSelected} onClick={() => onRate(i+1)} />
        )}
        <p>{starsSelected} of {totalStars} stars</p>
    </div>

StarRating.PropTypes = {
    starsSelected: PropTypes.number,
    totalStars: PropTypes.number,
    onRate: PropTypes.func
}

StarRating.displayName = 'StarRating'

export default StarRating