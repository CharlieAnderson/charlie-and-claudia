import ContentPage from "../components/ContentPage"
import image from "../images/pic10.jpg"
import castro_gif from "../images/castro.gif"
import Header from "../components/ContentHeader"
import Body from "../components/ContentBody"

export default function Page4() {
  let content0 = [
    <Header>Our Story</Header>,
    <img src={image}></img>
  ]
  let content1 = [
    "We met June 2018 in San Francisco (during its legendary Pride Weekend celebrations). Charlie had moved to the Bay a year prior, and Claudia was fresh into her second week of living on the West Coast, and needless to say, we were eager to meet new friends.",
  ]

  let content2 = [
    "We were brought together by a group of new friends, one of whom was Vikram - one of our best friends and our wedding officant - and decided to go into a nondescript bar in the Castro, where the music was low, the mismatched videos on the wall were clearly being streamed from YouTube, and the hour was too early to have any fun. The three of us decided to drink wine and eat cheese on Claudia's rooftop, and truly, the rest is history.",
  ]

  let content3 = [
    "We didn't start to date until August 2018, but wow, were those two months packed with lots of hikes, ramen, movies, burritos, etc.",
  ]

  let content4 = [
    "Soon after, we went on our first international trip to Italy, where we got to know each other better through good food and wine in Florence, Rome, and Milan.",
  ]

  let content5 = [
    "We moved to New York City late 2019, just before the pandemic broke out, and were immediately stuck working together at home in a tiny studio in the Financial District. Having survived this, we can conquer anything together as a couple, probably.",
  ]

  let content6 = [
    "But, we did need more space. So we moved to Brooklyn and decided to add another member to our little family, and we got Luma, our Miniature Australian Shepherd! She is so full of love, energy, and side eye.",
  ]

  let content7 = [
    "Fast forward to December 2021. We went to brunch at one of our favorite spots in Brooklyn, Aurora, and decided to watch the sunset under the Manhattan Bridge where Charlie proposed with the most beautiful sapphire ring.",
  ]

  return (
    <div className="content photo-timeline " >
      <ContentPage contentId="story">
        <div id="story" className='Content'>{content0}</div>
      </ContentPage>
      <ContentPage contentId="story" imgSrc={image}>
        <div id="story" className='Content'>{content1}</div>
      </ContentPage>
      <ContentPage contentId="story" imgSrc={castro_gif}>
        <div id="story" className='Content'>{content2}</div>
      </ContentPage>
      <ContentPage contentId="story" imgSrc={image}>
        <div id="story" className='Content'>{content3}</div>
      </ContentPage>
      <ContentPage contentId="story" imgSrc={image}>
        <div id="story" className='Content'>{content4}</div>
      </ContentPage>
      <ContentPage contentId="story" imgSrc={image}>
        <div id="story" className='Content'>{content5}</div>
      </ContentPage>
      <ContentPage contentId="story" imgSrc={image}>
        <div id="story" className='Content'>{content6}</div>
      </ContentPage>
      <ContentPage contentId="story" imgSrc={image}>
        <div id="story" className='Content'>{content7}</div>
      </ContentPage>
    </div>
  );
}
