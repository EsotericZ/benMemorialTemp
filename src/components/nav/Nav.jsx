import {
    MDBBtn
} from 'mdb-react-ui-kit';
import './nav.scss';

export const Nav = () => {
    return (
        <header>
            <div
                id='intro-example'
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')" }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>Benjamin Tyler Sanders</h1>
                            <h5 className='mb-4'>August 12th, 1987 - May 29th, 2023</h5>
                            <MDBBtn
                                className="m-2"
                                tag="a"
                                outline
                                size="lg"
                                href='/home'
                            >
                                Home
                            </MDBBtn>
                            {/* <MDBBtn
                                className="m-2"
                                tag="a"
                                outline
                                size="lg"
                                href='/memories'
                            >
                                Memories
                            </MDBBtn> */}
                            <MDBBtn
                                className="m-2"
                                tag="a"
                                outline
                                size="lg"
                                href='/gallery'
                            >
                                Gallery
                            </MDBBtn>
                            <MDBBtn
                                className="m-2"
                                tag="a"
                                outline
                                size="lg"
                                href='/donate'
                            >
                                Donate
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}