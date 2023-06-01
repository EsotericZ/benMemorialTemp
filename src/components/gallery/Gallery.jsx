import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
import pic3 from '../../images/pic3.jpg';
import pic4 from '../../images/pic4.jpg';
import pic5 from '../../images/pic5.jpg';
import pic6 from '../../images/pic6.jpg';
import pic7 from '../../images/pic7.jpg';
import pic8 from '../../images/pic8.jpg';
import pic9 from '../../images/pic9.jpg';
import pic10 from '../../images/pic10.jpg';
import pic11 from '../../images/pic11.jpg';
import pic12 from '../../images/pic12.jpg';
import pic13 from '../../images/pic13.jpg';

import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

export const Gallery = () => {
    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <h1>
                    ~ Gallery ~
                </h1>
            </div>
            
            <MDBCarousel showControls dark fade delay={1500}>
                <div className="d-flex justify-content-center w-50">
                    <MDBCarouselItem
                        className='w-100'
                        itemId={1}
                        src={pic1}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100'
                        itemId={2}
                        src={pic2}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100'
                        itemId={3}
                        src={pic3}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100'
                        itemId={4}
                        src={pic4}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100'
                        itemId={5}
                        src={pic5}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100'
                        itemId={6}
                        src={pic6}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100'
                        itemId={7}
                        src={pic7}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100'
                        itemId={8}
                        src={pic8}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100'
                        itemId={9}
                        src={pic9}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100'
                        itemId={10}
                        src={pic10}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100'
                        itemId={11}
                        src={pic11}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100'
                        itemId={12}
                        src={pic12}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100'
                        itemId={13}
                        src={pic13}
                        alt='...'
                    />
                </div>
            </MDBCarousel>

            <div className="d-flex justify-content-center text-center m-3">
                <p>If you have any photos you would like to add, please send them to cjsand03@gmail.com</p>
            </div>
        </>
    );
}