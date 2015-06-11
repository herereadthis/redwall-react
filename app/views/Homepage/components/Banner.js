var React = require('react');

export default class Banner extends React.Component {
    render() {
        return (
            <header role="banner" className="starfield">
                <div className="bellmaker_container">
                    <div id="construction" role="presentation"></div>
                    <div id="header_panel" data-module="banner_image">
                        <a href=""><span>Stand by for a 90s image!</span></a>
                    </div>
                    <div className="popup_box_simulator">
                        <span className="retro_spriter">Welcome to my site!</span>

                        <h1>Here, Read This</h1>

                        <p typeof="foaf:Person" resource="#/me/">
                            <span>Hi! My Name is </span>
                            <span property="foaf:name">
                                <span property="foaf:nick">Jimmy</span>
                                <span> </span>
                                <span property="foaf:family_name">Ha</span>
                            </span>
                            <span property="foaf:givenname"
                                  content="James"></span>
                            <span property="foaf:logo"
                                  content="http://herereadthis.com/build/images/branding/herereadthis_logo.svg"></span>
                            <span> and I </span>
                            <span property="v:title" content="UX Web Developer">make web pages</span>,
                            <span resource="http://herereadthis.com/"
                                  property="v:url foaf:homepage"></span>
                            <span> specializing in user interface development
                                and single-page applications. I live and play in
                                the </span>
                            <span property="v:Postal" resource="#/me/address/"
                                  typeof="v:Address">
                                <span property="v:locality"
                                      content="Washington"></span>
                                <span property="v:region">DC</span>
                            </span>
                            <span> metro area. </span>
                            <span property="foaf:based_near"
                                  resource="#/me/geo/"
                                  typeof="geo:point"
                                  prefix="geo: http://www.w3.org/2003/01/geo/wgs84_pos#">
                                <span property="geo:lat"
                                      content="38.886757"></span>
                                <span property="geo:long"
                                      content="-77.041626"></span>
                            </span>
                            <span> I do </span>
                            <span
                                property="foaf:topic_interest">photography</span>
                            <span> with a Hasselblad camera, </span>
                            <span property="foaf:topic_interest"
                                  content="gardening">grow roses</span>
                            <span>, </span>
                            <span property="foaf:topic_interest"
                                  content="baking">bake pastries</span>
                            <span>, dance at </span>
                            <span property="foaf:topic_interest"
                                           content="Burning Man">Burner festivals</span>
                            <span>, and practice </span>
                            <span property="foaf:topic_interest">Kyudo</span>
                            <span>. I put Sriracha on everything.</span>
                        </p>
                        <a className="popup_button retro_spriter popup_close">Close</a>
                        <a className="popup_button retro_spriter popup_resize">Resize</a>
                        <a className="popup_button retro_spriter popup_minimize">Minimize</a>
                    </div>
                </div>
            </header>
        );
    }
}

