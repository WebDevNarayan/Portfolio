const AboutMe = () => {
    return (
        <>
            <div id="about" className="">
                <div className="">
                    <h1 className=""><span className="">01.</span> About Me
                    </h1></div>
                <div className="sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row ">
                    <div className="">
                        <p className="">Hello! My name is Brittany and I enjoy creating things that live on the
                            internet. My interest in web development started back in 2012 when I decided to try editing
                            custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot
                            about HTML & CSS!</p>
                        <p className="">Fast-forward to today, and I’ve had the privilege of working at an advertising
                            agency, a start-up, a huge corporation, and a student-led design studio. My main focus these
                            days is building accessible, inclusive products and digital experiences at Upstatement for a
                            variety of clients.</p>
                        <div className="">
                            <ul className="">
                                <li className=""></li>
                                <li className=""></li>
                                <li className=""></li>
                                <li className=""></li>
                                <li className=""></li>

                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <img src="/images/img.png" alt="profile"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;