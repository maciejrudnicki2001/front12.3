import FaStar from 'react-icons/lib/fa/star';

export default function StarRating( { stars = 0 } ) {
    return (
        <div className="star-rating">
            {[...Array(5)].map((n, i) => (
                <FaStar key={i} color={i < stars ? "red" : "grey"} />
            ))}
            <p>
                <strong>{stars}</strong>
            </p>
        </div>
    )
}