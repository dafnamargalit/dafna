import React from 'react';	
// import Mailchimp from 'react-mailchimp-form';

import Navbar from '../Navbar';
import Footer from '../Footer';
import A from '../media/letters/A-pink.png';
import S from '../media/letters/S-pink.png';
import K from '../media/letters/K-pink.png';
import './Ask.css';
	
const Ask = () => {
	return(
<div className="Ask">
<div className="Ask-Navbar">
<Navbar/>
</div>
<header className="Ask-Header">
<img src={A} className="Ask-A" alt="a"/>
<img src={S} className="Ask-S" alt="s"/>
<img src={K} className="Ask-K" alt="k"/>
</header>
 {/* <Mailchimp
        action='https://gmail.us20.list-manage.com/subscribe/post?u=aaf764c763e21af33f0ce496e&amp;id=cd66fbdf37'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
    /> */}


<div className="Ask-Content">
<p>
Any questions? Inquiries? Shoot me an  <a href="mailto: dafna.business@gmail.com"> email</a>.
</p>
</div>
	<div className="Ask-Footer">
	<Footer />
	</div>
	</div>
	);
	}

export default Ask;
