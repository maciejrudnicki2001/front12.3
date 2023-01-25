export default function Photo( { photo } ) {
    return (
        <div className="photo">
        <img src={photo.urls.regular} alt={photo.alt_description} />
        </div>
    )
}