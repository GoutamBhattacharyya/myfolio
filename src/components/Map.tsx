const Map = () => {
    return (
        <div className="_map-container">
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe 
                    className="gmap_iframe" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    width={100+"%"} 
                    height={100+"%"} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=88 viveknagar, titagarh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Map;