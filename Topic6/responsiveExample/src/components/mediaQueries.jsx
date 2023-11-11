import Picture1 from '../assets/images/img-hero1.jpg'

function MediaQueries () {
    return (
        <>  
            <div className="wrapper">
                <h2>Media Queries: </h2>
                <h4>This image will disappear if smaller window:</h4>
                <img src={Picture1} alt="Picture 1" className="mQueriesImage"/>
            </div>
        </>
    )
}

export default MediaQueries;