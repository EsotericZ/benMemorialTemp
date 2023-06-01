import homepage from '../../images/homepage.jpg';

export const Home = () => {
    return (
        <>
            <div className="d-flex justify-content-center mt-2">
                <h1>Arrangements</h1>
            </div>
            <div className="d-flex justify-content-center text-center m-2">
                Visitiation will be held Sunday, June 4th, 2023 at the Clark Legacy Center from 5-7pm. All are welcome to come share stories, be with family and celebrate the life of Ben.
            </div>
            <div className="d-flex justify-content-center text-center m-2">
                The Funeral will be held Sunday, June 4th, 2023 at the Clark Legacy Center at 7pm, Pastor Bill Rieser will be officiating
            </div>
            <div className="d-flex justify-content-center text-center m-2">
                601 E Brannon Rd, Nicholasville, KY 40356
            </div>

            <div className="d-flex justify-content-center mt-2">
                <img
                    src={homepage}
                    className='img-fluid rounded shadow-2-strong w-50'
                    alt='benhome'
                />
            </div>
            <div className="d-flex justify-content-center mt-4">
                <h1>About Ben</h1>
            </div>
            <div className="d-flex justify-content-center text-center m-3">
                Benjamin “Ben” Tyler Sanders, 35, passed away Sunday, May 28, 2023. He was born on August 12, 1987, in Colorado Springs, CO to Laura Grier Sanders and Michael David Sanders. Ben had worked as a recovery coach for StepWorks in Nicholasville. 
            </div>
            <div className="d-flex justify-content-center text-center m-3">
                Ben’s passion was helping others, especially those who struggled with addiction.  He was actively involved with Oxford House and currently served as State Chair. He recently completed his peer mentor program and had become certified.  He was proud of the work he did to help others combat addiction and believed wholeheartedly in their motto:  “People can change.  Lives can change.  Hope can be restored.”
            </div>
            <div className="d-flex justify-content-center text-center m-3">
                In addition to his parents, Ben is survived by his daughters, Layla Lee and Khloe Grace; brothers, Christopher Sanders, Joshua and wife Ashley Sanders; niece, Rylee Rochelle, and grandparents, Janice and Ben Maybriar, in addition to a host of aunts, uncles and cousins.
            </div>
            <div className="d-flex justify-content-center text-center m-3">
                In lieu of flowers, the family is requesting memorial contributions be made to Oxford House KY. It would be Ben’s and his family’s greatest wish to help those battling addiction. 
            </div>
            <div className="d-flex justify-content-center text-center m-3">
                <a href='/donate'>Donate here</a>
            </div>
        </>
    );
}