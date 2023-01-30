import ContentCard from "../components/ContentCard"
import ContentPage from "../components/ContentPage"
import image from "../images/taxigif.gif"
import Header from "../components/ContentHeader"
import Body from "../components/ContentBody"

export default function Page1() {
  let content = [
    <Header>We're getting married!
    <Body>
    And we cannot wait to share this day with you, our dearest family and friends, on September 3rd, 2023, at <a href="https://www.wythehotel.com/">The Wythe Hotel</a>. Please take a look around our website to learn more about our story and about our wedding weekend. See you in Brooklyn!
    </Body>
    Love,
    <br/>
    Charlie & Claudia
    </Header>,
    <br/>,
    <br/>,
    <br/>,

    // <Header>
    //   add email registration here
    // </Header>
  ]

  return (
    <div className="content">
      <ContentPage contentId="home" imgSrc={image}>
        <div id="home" className='Content'>{content}</div>
      </ContentPage>
    </div>
  );
}
