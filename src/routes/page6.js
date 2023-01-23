import ContentPage from "../components/ContentPage"
import image from "../images/pic7.jpg"
import castro_gif from "../images/castro.gif"
import Header from "../components/ContentHeader"
import Body from "../components/ContentBody"

export default function Page6() {
  let content = [
    "blank"
  ]

  return (
    <div className="content">
      <ContentPage contentId="recs" imgSrc={image}>
        <div id="recs" className='Content'>{content}</div>
      </ContentPage>
    </div>
  );
}
