import ContentPage from "../components/ContentPage"
import image from "../images/pic4.jpg"
import Header from "../components/ContentHeader"
import Body from "../components/ContentBody"

export default function Page3() {
  let content = [
    <Body>
      There are many wonderful options for housing in the New York City area. While we have a discounted block of rooms available for you to book at The Wythe Hotel, please free to do what is the most comfortable for you. We just want you here to celebrate with us - no matter where you stay!
    </Body>,
     <Body>
      For those who prefer other hotel options, we've included a few recommendations below. For those who prefer to book via Airbnb, VRBO, or another method, here are some recommendations on neighborhoods that are in close proximity to the wedding venue. We recommend being close to an L Train, but Ubers and taxis are just as convenient.
      <br/>
      <br/>

      <Header>Brooklyn</Header>
      <div className="Bullets">
        <li>Williamsburg</li>
        <li>Greenpoint</li>
        <li>Downtown Brooklyn</li>
      </div>
      <Header>Manhattan</Header>
      <div className="Bullets">
        <li>Lower East Side</li>
        <li>Union Square</li>
        <li>Chelsea</li>
        <li>West Village</li>
      </div>
      <Header>Queens</Header>
      <div className="Bullets">
        <li>Long Island City</li>
      </div>
      <br/>
      <br/>
      If you need any help with recommendations, please reach out to us and we'd be more than happy to help you in your search!
    </Body>,
    <br/>,
    <br/>,
    <br/>,
    <br/>,
  
    <Header>
      <a href="https://www.wythehotel.com/"  target="_blank">
      The Wythe Hotel
      </a>
    </Header>,
      <Body>
        Our wedding venue! Please use this link to book one of our discounted hotel rooms for our wedding weekend.
        <br/>
        <br/>
        <br/>
        <div className="button-container">
          <a className="Center filled-button" href="https://www.mews.li/distributor/6b87e134-8c75-468a-82d4-aca900c43c70?mewsAvailabilityBlockId=dd38cc90-9785-4f46-927a-af26012e88fd"  target="_blank">Our Room-Block portal</a>
        </div>
      </Body>,
      
      <br/>,
      <br/>,
      <br/>,
    <Header>
      <a href="https://www.thewilliamsburghotel.com/?utm_source=local-listings&utm_medium=organic&utm_campaign=local-listings"  target="_blank">
      The Williamsburg Hotel:
      </a>
    </Header>,
    <Body>
      Just a block over from The Wythe Hotel.
    </Body>,
    <iframe
    className="map"
    frameborder="0"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCpRg9j848HuRZygkfLS-4zKCEiYEDX6CI&q=The+Williamsburg+Hotel"
    allowfullscreen>
    </iframe>,
      
      <br/>,
      <br/>,
      <br/>,
    <Header>
      <a href="https://thehoxton.com/williamsburg/"  target="_blank" >
      The Hoxton Hotel:
      </a>
    </Header>,
    <Body>
      Another hotel close to our wedding venue.
    </Body>,
    <iframe
    className="map"
    frameborder="0"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCpRg9j848HuRZygkfLS-4zKCEiYEDX6CI&q=The+Hoxton+Hotel"
    allowfullscreen>
    </iframe>,
      
      <br/>,
      <br/>,
      <br/>,
    <Header>
      <a href="https://theboxhousehotel.com/"  target="_blank">
      The Box House Hotel:
      </a>
    </Header>,
    <Body>
      About an 8 min Uber from the wedding venue in a trendy, industrial part of Brooklyn.
    </Body>,
    <iframe
    className="map"
    frameborder="0"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCpRg9j848HuRZygkfLS-4zKCEiYEDX6CI&q=The+Box+House+Hotel"
    allowfullscreen>
    </iframe>,
      
      <br/>,
      <br/>,
      <br/>,
    <Header>
      <a href="https://www.hilton.com/en/hotels/nycbohx-hampton-brooklyn-downtown/"  target="_blank">
      Hampton Inn:
      </a>
    </Header>,
    <Body>
      About a 15 min Uber from the wedding venue in the downtown area, right by Barclays Center.
    </Body>,
    <iframe
    className="map"
    frameborder="0"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCpRg9j848HuRZygkfLS-4zKCEiYEDX6CI&q=Hampton+Inn+Brooklyn%2FDowntown"
    allowfullscreen>
    </iframe>,
      <br/>,
      <br/>,
    <br/>,
    <br/>,

  ]

  return (
    <div className="content">
      <ContentPage contentId="travel" imgSrc={image}>
        <div id="travel" className='Content'>{content}</div>
      </ContentPage>
    </div>
  );
}
