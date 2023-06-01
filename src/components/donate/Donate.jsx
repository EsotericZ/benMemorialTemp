import { MDBRipple } from 'mdb-react-ui-kit';

export const Donate = () => {
    return (
        <>
            <div className="d-flex justify-content-center mt-2">
                <h1>Donations</h1>
            </div>
            <div className="d-flex justify-content-center text-center m-3">
                In lieu of flowers, the family is asking all donations be made to The Oxford House of Kentucky
            </div>
            <div className="d-flex justify-content-center mt-2">
                <MDBRipple rippleTag='a'>
                    <a 
                        href='https://www.oxfordhouseky.org/'
                        target='_blank'
                        className='d-flex justify-content-center'
                    >
                        <img
                            src='https://images.squarespace-cdn.com/content/v1/5ef228ce912a0603ba669f6f/1593548416160-L7YZ9NUAPD5UY96IRJNI/LogoKYandCorp.png?format=1500w'
                            className='img-fluid rounded w-50'
                            alt='oxford'
                        />
                    </a>
                </MDBRipple>
            </div>
            <div className="d-flex justify-content-center mt-2">
                <a 
                    href='https://www.paypal.com/donate?token=iKDoEbAAp7M5HJaRx41jim4eCzJyMW7Eztpnk5ikcdQMKaXPF08kj5eDizGzJ58YQsZsKlf4LH18ntag'
                    target='_blank'
                >
                    Donate
                </a>
            </div>
                
        </>
    );
}