const ProfileImage = () => {
    return(
        <div className="myfolio-user-info">
            <div className="myfolio-avatar">
                <img src={require ('../images/avater.png')} alt=""></img>
            </div>
            <div className="myfolio-user-name">
                <h1>Goutam Bhattacharyya</h1>
                <p>your best freelance consultant</p>
            </div>
        </div>
    )
}
export default ProfileImage;