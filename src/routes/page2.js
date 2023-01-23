import ContentPage from "../components/ContentPage"
import Header from "../components/ContentHeader"
import Body from "../components/ContentBody"
import image from "../images/schedule.jpg"

export default function Page2() {
  let content = [
    <Header>
      <div className="Left">Welcome Events</div>
      <div className="Right">Saturday, September 2, 2023</div>
    </Header>,
    <div className="Timeline">
      <Body>7:00PM-10:00PM: Welcome Drinks @ TBA</Body>
    </div>,

    <Header><div className="Left">Wedding Day</div> <div className="Right">Sunday, September 3, 2023</div></Header>,
    <div className="Timeline">
      <Body>5:00PM-5:30PM: Guests Arrive @ The Wythe Hotel</Body>
      <Body>5:30PM-6:00PM: Ceremony</Body>
      <Body>6:00PM-7:00PM: Cocktail Hour</Body>
      <Body>7:00PM-10:00PM: Reception</Body>
    </div>

  ]

  return (
    <div className="content">
      <ContentPage contentId="schedule" imgSrc={image}>
        <div id="schedule" className='Content'>{content}</div>
      </ContentPage>
    </div>
  );
}
