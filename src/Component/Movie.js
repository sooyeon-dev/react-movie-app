function Movie(id, imgSrc, title, summary, genres) {
    return (
        <div>
            {/* <img src={imgSrc} alter={title}></img> */}
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {/* <li>
                    {genres.map(g => (
                        <li key={g}>{g}</li>
                    ))}
                </li> */}
            </ul>
        </div>
    )
}

export default Movie;