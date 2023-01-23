import ContentPage from "../components/ContentPage"
import image from "../images/pic12.jpg"
import castro_gif from "../images/castro.gif"
import Header from "../components/ContentHeader"
import Body from "../components/ContentBody"

export default function Page7() {
  let content = [
    <Body>We'll be mailing out wedding invites a few months before the wedding. When those go out, we'll also be updating this page with an online RSVP form for your convenience!</Body>
  ]

  return (
    <div className="content">
      <ContentPage contentId="rsvp" imgSrc={image}>
        <div id="rsvp" className='Content'>{content}</div>
      </ContentPage>
    </div>
  );
}
