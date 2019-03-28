import React from "react";
import { Link } from "react-router-dom";
class Faq extends React.Component {
    render() {
        return (
            <div>
                <h1>Frequently Asked Questions</h1>
                <b>Q: Do you really "hack" at a hackathon?</b>
                <p><br /><br />A:  No, we are not doing or encouraging illegal activities here.</p>

                <b>Q: So what is a hackathon then?</b>
                <p><br /><br />A: A hackathon is a live-event where participants, “hackers”, spend the course of 24 hours creating, developing, designing, and pitching a software or hardware project they build from scratch. We provide all the resources and mentorship you need in order to make this happen!</p>

                <b>Q: How much does it cost to attend?</b>
                <p><br /><br />A: Absolutely nothing! It is a completely free event run by us. All resources and accommodations for the entire event will be provided free of charge. Some snacks will be provided too!</p>

                {/* <b>Q: How do I get to Hack?</b>
                    <p><br></br><br></br>A: This event will be hosted here on premises.</p> */}

                {/* <b>Q: Will you be providing travel reimbursements?</b>
                    <p><br></br><br></br>A: Unfortunately, we will not be covering travel reimbursements at this time.</p> */}

                <b>Q: What kind of workshops and activities will be hosted?</b>
                <p><br /><br />A: We’ll be hosting a variety of workshops from introduction to coding, to advanced skills, as well as, security penetration testing.
                    No matter your interest, we guarantee we’ll have something for you. In addition, we have fun activities planned for you such as e-sports tournaments, nugget-eating contests, and more!
                        The NCCI Hackathon is much more than just a hackathon – we will make sure that it’s an event you’ll thoroughly enjoy.</p>

                <b>Q: What should I bring?</b>
                <p><br /><br />A: Make sure to bring your laptop (or desktop if you’ve got gains) and your imagination. You can also bring a pillow and blanket if you want to get comfy. Everything else will be provided for you!</p>
                <br /><br /><br />
                <p><b>© Copyright 2005-2019 NCCI Holdings, Inc. All Rights Reserved.</b></p>
            </div>
        )
    }
}

export default Faq;