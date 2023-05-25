import ContentPage from "../components/ContentPage"
import image from "../images/pic12.jpg"
import castro_gif from "../images/castro.gif"
import Header from "../components/ContentHeader"
import Body from "../components/ContentBody"
import FAQ from "../components/FAQItem"

export default function Page8() {
  let content = [
    <Body>
      Below is a list of frequently asked questions for our wedding that you can click on for an answer. If there's anything else you need don't hesitate to ask us directly!
    </Body>,

    <FAQ
      question="What time should I arrive for the ceremony?"
      answer="The venue will open at 5PM sharp, and we ask that all guests be seated by 5:30PM."
    />,

    <FAQ
    question="What time should I arrive for the ceremony?"
    answer="The venue will open at 5PM sharp, and we ask that all guests be seated by 5:30PM."/>,

    <FAQ
    question="What is the dress code?"
    answer="Our dress code is cocktail attire. New York City on Labor Day Weekend usually runs between 80-90 degrees, so this will translate most comfortably as light suits or light, airy dresses."/>,

    <FAQ
    question="Will the ceremony, cocktail hour, and reception take place indoors or outdoors?"
    answer="The ceremony and cocktail hour will be in the Wythe Hotel’s outdoor Garden Terrace, while the reception will take place indoors in the Main Hall. Don’t worry - if the day is looking hot or on the wetter side, the terrace has a cover that can be put up!"/>,

    <FAQ
    question="How do I get to the wedding venue?"
    answer="As most New Yorkers will tell you, public transportation is the quickest way to get anywhere in the city. The Wythe Hotel is conveniently located near the L train."/>,

    <FAQ
    question="Are taxis safe to take in New York City?"
    answer="Yes! They have made a surprising comeback over the past year, as Uber and Lyft fees have surged. Please be sure only to take an authorized New York City taxi (you should be able to see their medallion in the window), and to only start a ride when you know that the driver has started their meter."/>,

    <FAQ
    question="Can I bring my kids?"
    answer="We are looking forward to celebrating our big day with all of our family and friends, and this includes your children. All children have been accounted for in our guest list, and they will be reflected in the number of seats that we reserve in your honor. 
If you are bringing a child to the wedding and are interested in babysitting services, our venue has worked with and recommends a couple of wedding-day services that we can refer you to."/>,

    <FAQ
    question="What food and beverages will you be serving?"
    answer="We will have several appetizers being passed during the cocktail hour. Our wedding menu will consist of a family style dinner spread that we will be announcing closer to the day of the wedding - the venue has seasonal menus that change out each month! Of course, the day will also consist of an open bar for our loved ones to enjoy a drink (or several) with us.
The venue also provides children under 12 the option to dine on chicken fingers with fries or pasta with butter/sauce. Children 13+ will be able to enjoy the same menu as the adults."/>,

    <FAQ
    question="I have dietary restrictions; what will I be able to eat?"
    answer="If you have any dietary restrictions, please let us know as soon as possible, and we will work with the venue to ensure that you are able to enjoy a delicious meal separate from the family style menu."/>,

    <FAQ
    question="Can I take pictures during the ceremony to post on social media?"
    answer="We know that everyone will be so excited for us on this day and some may even feel the urge to take out their phones and snap a couple of pictures. If you do, no harm no foul, but we respectfully ask that you leave pictures to our professional photography and videography teams during the ceremony."/>,

    <FAQ
    question="I can’t attend the wedding in person; will there be a virtual wedding celebration?"
    answer="We will not be providing a virtual ceremony, unfortunately. If for whatever reason you are unable to celebrate with us in person, please know that we will be sure to share this moment with you through pictures and videos the next time that we are able to see you!"/>,

    <FAQ
    question="I don’t really know Brooklyn or New York City very well… What should I do this weekend?"
    answer="Great question! Please check out our page of recommendations for a list of some of our favorite places to eat, drink, and relax in the city."/>,

    <FAQ
    question="Do you have a wedding registry?"
    answer="We do! It is linked on our registry page."/>,

    <FAQ
    question="Can I bring my gift to the wedding?"
    answer="If you choose to gift us a card to celebrate our union, we will have a box available at the ceremony for you to send us your well wishes in person! Should you be kind enough to gift us with any physical gifts on our registry, we respectfully ask that they be mailed to our home address - the logistics of transportation from Brooklyn to Jersey City after the wedding day are a tad tricky."/>,

    <FAQ
    question="Will there be any other events during the wedding weekend?"
    answer="We will be welcoming our friends and family at a casual welcome party at the Grand Republic Cocktail Club in the adjacent neighborhood of Greenpoint (Brooklyn). The first round of drinks will be on us!"/>,

    <FAQ
    question="What is the best way to contact you if I have additional questions?"
    answer="Please don’t be shy about calling or texting either of us if you have any questions, concerns, or reasons to want to chat about the wedding :)"
    />

  ]

  return (
    <div className="content">
      <ContentPage contentId="faq" imgSrc={image}>
        <div id="faq" className='Center'>{content}</div>
      </ContentPage>
    </div>
  );
  
}
