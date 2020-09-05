import React from 'react'; 
import './StoryReel.css'; 

import Story from './Story.js';

function StoryReel() {
     return (
      <div className='storyReel'>
          <Story
              image='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUWFRUVFRUVFRcVFRUXFhUYFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHR0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xABCEAACAQIDBQQGBwcDBAMAAAABAgADEQQSIQUGMUFRYXGBkQcTIjKhsUJScpLB0fAjM0NTgqLhYsLxFGPD0hUWJP/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACURAQEAAgEDBAIDAQAAAAAAAAABAhEDEiExBBNBYSJRMkJxI//aAAwDAQACEQMRAD8AamBDIRKiiGSdjh0sqRJgSsGN4WmYEN85NB1MgsizwNYz98cSqtcf8wgrRAW8RaDLyDPAx0FpJmtAhtI4MDS9dCq8ATGOnCAW6bSTWlIOYQMYEsAwnrIARwY0rKtJqZXV7cpP1nZAqtqe2GBlNKp4AQudj0EaVk1Lco5qiVWY8zJK0aRw0Ip6yoakktbrAhnMCNYjYiDVbc4wTd8gZIkQDrzgA6jSnVvDVngKrRmqMYoiTFAKQMmhlZTCeMyb1azXhFqW4yrTMmzQJYNWQZ4IPIkwMSTW0DmizRGshu2JngM8jmgFkPCirAYak9RglNSzHgB+tB2zp8Fu6lMZq7Zm+opso+03E+FvGTllMfKscLl4YVFXc5UVmPRQSfITSTYlX6ZSn9ttfuqCfOa1XHBRlpgIvRRlHjbjM2riCec58vUX+sdGPp581IbOor71dj2JT/Fm/CMaeFH84/1IP9plF6kru8yvPyX5bTg4/wBNW+F6Vvv0/wD0jhcMeFSoveit8iJhO8Ezw9/knyPY478OlGCRvcr0z2NmQ/EEfGRr4KqguyHL9YWZfvLcTmvXHrLmD2vVpm6sR3GXj6rKeZtnl6PG+Lpoo1oVHElQ2zSq6VqYv/MSyt4jg3iIWvs8hc9JhUTmV0ZftJxHfqJ08fNjn48uTk9Pnh/iAeMGlYPJZps51gmRvBZpBnjJZL2i9ZK9N+si1WAWC8g7wOeDZ4A1VpWqQztK7mMAM0URaKAZStCZpXDR88zdA+aPngM8bPENLJeIPK4aOGgNLGePmgA0QaI1jPLezMDUr1BTQa8zyUcyeyZymeobubKGGoaj22sznt5L3D85OWWorDDdLCYKnhaeWmNT7zH3mPb0HZKGKqk8Zdxj31mDtTHpSUs7ACcmeXzXZjPiFWqShiMWq6swHebTitv79alaI/qP4CcVjtt1ahuzk+Mx3cv4xvMNfy7PUMTvHQBtmvy0mdit7aSGxGv2lPxBnmBrFufI8ewXgi8r28vmjqwj0o75Uvq/ESVPe2geNxPMs8WeP2r+x14/p61R2zQfg48dJcRgeBv3TxxK5HAzSwW3qtMiznTqeUm8eU+zlxr1VGmtsvaL02BViJwWyN61ey1ND1nV4aoDYg3B6SILNeXZvhkxS5qYC1eJXgtTu+q3wMxGYgkHQjQg8QRxktn4kowIm3trCCvS/wCoQftEH7QD6Sj6XePl3Tu4Obf45PP9RwT+WLB9ZIl5W9ZJZp1uHQpaItBFos0AKDIloPNGLRg7GAcyZMGTAIRR7xowwQ0QaBDRy0ydI4aK8DmjhoENeODA5o+aAGDRw0CGnSbr7DFT9vWH7MH2FP8AEI5n/QD5nTrFbqbVJvtFndPYbPUp1nFkBzKDxe2oIH1QRx58udvQ8abADsuZkYGpeqCeht8BNfaJGbXoJz5ZdTomPTHN7wY5aFM1GPAXnhe8+8lTEOdTlvoJ03pW3hL1PUqdBZmtzYj2R4KfMmeZPUnPrry38R04fhjv5pO8GWkWEbLNtMrlafPFeRIjhY07PeKLLFlgCvEDFljgQGxKbETq91dvujhD7QJ4dO6cmJJTaZ54StsM/iveMDWDgMvAidbu5iLG36tPLdw8W3q1WoQtxdASSWW9r3PPRtOltBcX9K2ORmW3GZY7l7+Rlrwxtv4IUK7oPdvmX7Lajy4eEz8077eDCJVCK+l1OVwNVI+Y6icFjcK9FyjixHkQeBU8wZ6WGe3l8nHcbv4NmiJgc8QeWyELRs0GWkS8YFZpC8gWkS0ZJ3ig80UYc4Gj3gQ0cNMXUMGkg0AGjhoENmjhoHNHzQDZ3e2YcTVCm4RfaqEcl6DtPAefKekonAKAAAAABoANAAOkx91Nn+pw63Ht1LVH7iPYXwXXvYzoqFHn+uyY5Xdb4zpirX9goR9a3mL/ADA85pbXqA0RV5ZCCe4X1lPG0cyMo4ngehGo+IEFsfFLWpPQc5c4K9qtw+BmV7X/AFpPyx/x86b64s1MVUugRlYowGbU0yUub8DYDynPmen+kDdb12KqGmRTxZu1TDObLVIGr4Z+DXABymx15c/MWUgkEEEGxB0II4giPp0dz6kY8aPGlFo4jNHEAeKNFAFFFHgCEleRjiBx0e49XLiqftAA6Ek2GvIDmx4Ads9+2AhLqegvPn3crCesxS3FxTV6rX4ewpK/3FZ9Jbt4Q06IZuLAceQAmVx/Jrll2aWLwgqADMFsNL9v/Ey9rbutWpZQyF0uabA+ansPwPjAbQ2qM5twGnlAptbtMuckl2yvHcpquU2hsyvQ/e02Xlfiv3hpKZaelYDaaVBkqWKHQgi4seycRvTssYetZf3b3KdljYrfs08CJ1cfJMnHy8NwZeaRLSF415oxTzR80FmivGBc0UATFGTm80lmgAZINMXWKGj5obZOAfEVkoUgC9Q5VubDhcknoACfCdzX9FNcLdMRTZraqVZdegNzf4RW6GnAgy5sjDetrU6XJnAP2eLfAGT2xsLE4U2r0mXo3FT3MNJe3FTNigfq03bzsn++FvbZyd9PTaCFjppx7gPyE0yOPwtwtytKmHoko2XjpcDUleduuoEsYQDLobzJeXcNhOa2relUNROB94do4mdNUYCZm08PmUkf8GRnjuK48tVPD16GMFI1QpqUmzUmJNgbFeXYxHjzniHpU3Pq4PEPiLE0a9RmvbVHYklT2E3sR+RPe4lmoMHS9je69GHG3gQfObVLbVDF0Ww2LpirScWKtxHaDxBGhBHSRjy/1ya5cO71Yvm6NPVt4PQ8xvU2bWFZePqapCVh2K+iv45fGebbV2TXwz+rxFGpRbXSopW9uak6MO0TRCi0SxGJYElGjxQBo8UeANHE6XdzcPaGNsaOHZaZ/jVf2dK3UM2rD7IM9b3T9GuCwJFWuwxVdbEZhaihHNUPvHtbpoBFacjN9EG5RSicViVKitlKIdGNNTmW44hWOp6gCei7RxTsCKQu1tLW0vw46dvhKO0dsE3sbmauzMGq01LVAGPtMO08vK0ne/B3s5unu+5/ePbsHtHzP+YYbuDlUe/9NvlOmrLSHGoPCZWO2gACF0Hzk3CHM8nN4r1mGaxYMp5jTwIgN48cKlGl1DtbuIF/wjbWxGbTxmJtJ2DerYEFLgg6ENzuOX+JXBP+nbwn1F/59/NBzRZoLNFed7zhLxFoEtHvAaSLGPIxRk5jNGzQWaOGmLrWsNinpsHpuUdSCrLxBHAieibD9LVRLLjKGcc6tLj3lOPgL988yBjhoWbEun0Ls3enZ+OUqlem9+NOpYMOwq3OAXc7D06hrUF9WxUqVuchBIOnTUDXWeAOitqQCRwPMdx4ibe7+38bRYJQxdRRY2Rz61L2JFw2vZxmWWOu7XHKXtp7iab0wrLoy3B0uCCb/ocYPEYy/wBHK30hwv0M47d/f7GswSrhqVU2JvTf1TnKLn2W9ngCbXnRrvTg3AFZamHJ/m0yF/pexU98mXZ3HR6jc5FatpZ/6VagzUKiVR/pYE+RPxJ8JmVyQbEa9OdutuNu2PvEs/bmEBBI4N8HHA9x1HiZx9VbG40/CdpVqgi3WcxtLD5Gv9EnyM5+SbdPFlrsjgts1KfO83qG94qL6usq1EOhSqodT3htDORqJaQtMZbPFb2Y5eY6TFbu7FxGr4MU2POg7Ux9wHL8Jl1PRXstv3eLxKdjeqe3kqypTYjgTLVOu/1jLnLki8OKs/odwx93aZHfhgf/ACCEo+h7Bj39ou32aCr83MupiX6wy126yvdyT7UQwnoz2PTN3fE1uxqiIv8AYoPxnQbOwOzcJY4fBUUYcHYesqDuepdh4GYoc9YVVi9zIujGN/FbfZ+ZPwEoviGbidOkqosMmvdzh3pXUMcSqkEkaagfjCNtz/V8RLIxar9FfHWVMXtk8B8LCX06+WfVv4Dq7a7Zj43b44XJPRRf/EHjcQ1TnFgNk31IkW1pNNLd/EZqisVtqLX1PfM/e8//ALa/2/mBOv2dsdUyfWLqPh7XzE4beLEZ8VXbrVe3cDYfKdXpZZK5fVXelLNHDQV4951uMS8WaDzRXgBM3bHgLxQJzAMlmggY+aZOsTNHzQYeLPAhS9pOhXKMrj6JBHgbyuSDIl4qHpWFwxYCrTFxbOLdBrf9dJu7Kxt1CN3a/jOU9H22gV9Sx9pNV7VPEfrrOrxWDscyc9Zy9PR4ddvX3SrbLok5gmRvrUyaZv8A02B8Zl47ZlXitct0FXU+DrqPKaNLEHgR+hHqNHvcRqxzGI2hi6X7xc69T7X941+9IJt6nUGV/ZJ+tqv3vzm/VMxNpbLpVL3Wx6rofHrItXJFap7PavI9P8QTDpMfEU6uGOhzU+h4eHQ/rWGTaa2v8DofPgZnY2mTRDQqVJlrtKl9YDvlqjilPAiTqq6o0kqSwjzPp1l6yzTxC9YFa0KRvLKiZ1PFKOGvd+cT4lj2CPSNr9TEAaCCOKlENHAJlbkRrYz4gmCykw9HDkzRw+FAi3arUirhMBfUzZw9HgBzsJFVtCUXs1+nxJFvKVrRNXE4sUUNQ/wqbOftkEgd/uieQlyTcnU8T2mdfvvtTKi0Abs5z1Psg6A951/pnGZp3cU1i4ea7y0IGj5oK8e81YiExs0hmjEwITPFBZooyc0DHvB3j3mLrTvFmg80RaBaSLSDPIs0GxiPSzgsc1GotRDqp8xzBnsW722kxFIMDx8wec8PZpobA26+FqZgbqfeX8R2zPOb7xrx3XaveEJKlBbUhgCAQSOI8R43AmVXDKb5fZJ8ILY22qddAysDeabvcWP6vxmO9tLjqss1AZTxKS9jMFbVToZQdiNDFfsRlYxAQQeE5fH08jAHgb28J1uIExdr4P1iFb68QehEmXVXe8cvXqawK1tYLEKyHK4sfn3SI7JpUxfpVzxBI8fwmzgdp5feQEdRofyPwnO0peotMcrZ4byS+XcYLFU3HsnXodD5S4EnEUapBuJ1mwcWagIbUrbXvva/boYSWouo0EpS1Rw8JSoy9Qoypgi5h0qMuLRtx0hEQL2n5SNRiZetI3aEx17I1fEpQptWqcFGg5kngB2yVVkpoalRsqKLkn8J53vDt9sU+lxTT3F/3HtMrDj6r9J5OTpn2rYzHNWdqrcWN+4cAB2AACCBgA0mGnY4r3HzRZoLNFeMhc0V4MGOWjJImKQzRQJzWaPeCzR7zF1pkyJMjeMTAHJkGMcmQaI0HgmMI0C8k13Y+2quGfMh0vqvI93Qz1Ld3e6liFtezcwdCO+eNNGp1WUhlJBHAg2Mzyx20xz12vh9EBgw0Mr1qE8t2Bv3UpWWsMw+sPxH5Tvtlbz0KwurA+PzHKZXc8tdTLwNWwvZM3EYGdIlRG4ERzhgYvJd44PG4AkEEAjmCLiYOI2KvIMvcbjyP5z1Sps4HkJVqbEQ/RhJrwOr9vK//jSPpean8CZYo4I/X/tJno3/ANfp/Vh6OxKY+gJXctxx+y9mUzxFWoens008feJ+E7LZWCyqFACga2HC54k31J0Gp6S7SwYHAAd0sqLSpdIvcyIBLCeXzggwEr43a1Kkpao6oBzJtFs+mtC0obW2vRwy5qrAdFHvMegE4jbfpE4rhVv/ANxhYf0rx+U4vEYx6rF6jl2PMm/l0HdNceO3yzyzk8Oh2/vJVxba+yg91BwHQnqZnU2lGm0t0zOiak1HNd27q2GjgwCtJ5oxocGSvK4eSzRp0NeNmg7xs0CSzRQcUBpz14ryGaPeYupK8V5G8a8RpEyJMiTIkxAmME8ctItEYTQZhGEGYgiY9OoVN1JB6g2PmIxjQDd2fvZiaX0s46Nx8xOkwPpGtYVEYdxBH4Tz6KTcJVzkyj17Cb/4duL2+0CPmJp0d7sO38VPvL+c8Oik+39q936e8jeOj/MT7wkam9OHXjVpjvdfznhEcCHt/Y9z6e019+sKn8VD3Xf4C8yMb6SaQ9xHfwCD46/CeXiSAj9uF7ldbj9/MVU0TLTHZ7TeZ0+E57EYl6jZqjs7dWJJ8L8JXWTBmmMk8M7bfIyQ6wFKHWaRnpZpGW0MqU5YzSk2LCyQMErSQaNIoMcNBZ4g0ZC54i8Dmj5oyEzRoItFAu7CBiBkAY95zupO8V5G8cQMxkTJmRIiCBkDCESJWIwmEgRDFZAiIBESNoUiRIjAcUnljZYEjFHtFaAKOIgJICAIRxHCGTCRgwEKixAQiiA0mghVgxCJKhDIYZTArCCXEUZWhFaAElmlIsFMYCQLRXgE7RiZHNeRZoy0lcxQQaPAMkR4opg3ISQiigdPFFFEIiY0UURomQaKKI0DGiigEYoooEUcRRQCUcRRRhKSEUUDSEmIooxU1hUiilRNEWGEUUuM6cxxFFGk8j+vjFFAJGDaKKMgxFFFGb//2Q=='
              profileSrc='https://lh3.googleusercontent.com/ogw/ADGmqu_7AkdZv2XjnSrlQNQCiWTMp5KFLycKB7UyhB12=s83-c-mo'
              title='Tejas Joshi'
          />
          <Story
              image='https://i.pinimg.com/564x/56/24/5f/56245f696358d6ff63c450e42b2ee9a0.jpg'
              profileSrc='https://lh3.googleusercontent.com/ogw/ADGmqu_7AkdZv2XjnSrlQNQCiWTMp5KFLycKB7UyhB12=s83-c-mo'
              title='Tejas Joshi'
          />
          <Story
              image='data:image/jpeg;base64,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'
              profileSrc='https://lh3.googleusercontent.com/ogw/ADGmqu_7AkdZv2XjnSrlQNQCiWTMp5KFLycKB7UyhB12=s83-c-mo'
              title='Tejas Joshi'
          />
          <Story
              image='data:image/jpeg;base64,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'
              profileSrc='https://lh3.googleusercontent.com/ogw/ADGmqu_7AkdZv2XjnSrlQNQCiWTMp5KFLycKB7UyhB12=s83-c-mo'
              title='Tejas Joshi'
          />
      </div>
     )
}

export default StoryReel;


