import React from 'react';
import Mailchimp from 'react-mailchimp-form';

import './Mail.css';

const Mail = () => {
return(
<div className="Mail">
<Mailchimp
        action='https://gmail.us20.list-manage.com/subscribe/post?u=aaf764c763e21af33f0ce496e&amp;id=cd66fbdf37'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
    />
</div>
);
}

export default Mail;

