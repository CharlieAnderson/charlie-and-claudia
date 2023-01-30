import ContentPage from "../components/ContentPage"
import image from "../images/pic11.jpg"
import Header from "../components/ContentHeader"
import Body from "../components/ContentBody"
import { useEffect } from "react"



export default function Page5() {
  
  useEffect(() => {
     let thing = !function(e,t,n){
      var s,a=e.getElementsByTagName(t)[0];
      let thang = e.getElementById(n)||
      (
        s=e.createElement(t),
        s.id=n,s.async=!0,
        s.src="https://widget.zola.com/js/widget.js",
       a.parentNode.insertBefore(s,a)
      )
    }(document,"script","zola-wjs");
  });

  let content = [
    <Body>Below is the link to our registry. we'll be adding some more things before the wedding!
    </Body>,
    <br/>,
    <a 
    class="zola-registry-embed"
    href="https://www.zola.com/registry/claudia-and-charlie"
    data-registry-key="claudia-and-charlie"
    >Our Zola Wedding Registry</a>
  ]

  return (
    <div className="content">
      <ContentPage contentId="registry" imgSrc={image}>
        <div id="registry" className='Content'>{content}</div>
      </ContentPage>
    </div>
  );
}
