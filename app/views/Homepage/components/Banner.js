var React = require('react');

export default class Banner extends React.Component {
    render() {
        return (
            <header role="banner" class="starfield" data-parallax-scroll
                    data-parallax-speed="-50">
                <div class="bellmaker_container">
                    <div id="construction" role="presentation"></div>
                    <div id="header_panel" data-module="banner_image">
                        <a href=""><span>Stand by for a 90s image!</span></a>
                    </div>
                    <div class="popup_box_simulator">
                        <span class="retro_spriter">Welcome to my site!</span>

                        <h1>Here, Read This</h1>

                        <p typeof="foaf:Person" resource="#/me/">Hi! My Name is
                            <span property="foaf:name">
                                <span property="foaf:nick">Jimmy</span>
                                <span property="foaf:family_name">Ha</span>
                            </span>
                            <span property="foaf:givenname"
                                  content="James"></span>
                            <span property="foaf:logo"
                                  content="http://herereadthis.com/build/images/branding/herereadthis_logo.svg"></span>
                            and I
                            <span property="v:title" content="UX Web Developer">make web pages</span>,
                            <span resource="http://herereadthis.com/"
                                  property="v:url foaf:homepage"></span>
                            specializing in user interface development and
                            Django environments. I live and play in the
                <span property="v:Postal" resource="#/me/address/"
                      typeof="v:Address">
                    <span property="v:locality" content="Washington"></span>
                    <span property="v:region">DC</span>
                </span> metro area.
                <span property="foaf:based_near" resource="#/me/geo/"
                      typeof="geo:point"
                      prefix="geo: http://www.w3.org/2003/01/geo/wgs84_pos#">
                    <span property="geo:lat" content="38.886757"></span>
                    <span property="geo:long" content="-77.041626"></span>
                </span>
                            I do
                            <span
                                property="foaf:topic_interest">photography</span>
                            with a Hasselblad camera,
                            <span property="foaf:topic_interest"
                                  content="gardening">grow roses</span>,
                            <span property="foaf:topic_interest"
                                  content="baking">bake pastries</span>,
                            dance at <span property="foaf:topic_interest"
                                           content="Burning Man">Burner festivals</span>,
                            and practice <span property="foaf:topic_interest">Kyudo</span>.
                            I put Sriracha on everything.</p>
                    </div>
                </div>
            </header>
        );
    }
}

