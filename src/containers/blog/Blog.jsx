import React from 'react'
import './blog.css'
import Article from '../../components/article/Article';
import { workfromhome,workfromhome1,momwork,yework,blog05 } from './imports';


const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="Blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={workfromhome} date="Jul 26, 2022" text=" It goes without saying that flex work in all its forms has been enabled by digital technology,
         which fostered a disconnection between work, time and place. 
As employees increasingly take advantage of the freedom remote work enables, more are looking to not just work from home 
but to work from anywhere.In the past, remote work and digital nomad living heavily favored consultants, freelancers, 
part-timers and non-management employees. Now, white-collar workers—from help desk workers to 
sales staff to operations personnel and leadership right up to the C-suite—are going remote in 
large numbers for the first time ever.
 Moreover, thanks to videoconferencing technology and other remote tools, 
 they're able to work from their home offices, their local coffee shops, their vacation homes or even on the road.
The work from anywhere benefits are many: Sales staff can manage their prospects while traveling to see clients; 
an employee in New York can use video to easily and efficiently collaborate 
with teammates in California; and a parent can move their home office to the local coffee shop to
 get an hour of quiet and focus. In all of these cases, employees and leaders can use digital tools to 
 stay connected to their teams and colleagues, save money and time on commuting, and have the freedom to work 
 from anywhere they feel most productive. " />

      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={workfromhome1} date="Jul 26, 2022" text="Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' 
        opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition." />
        <Article imgUrl={momwork} date="Jul 26, 2022 " text=" This life is what you make it. No matter what, you're going to mess up sometimes; it's a universal truth. But the good part is you get to decide how you're going to mess it up. "/>
        <Article imgUrl={yework} date="Jul 26, 2022" text="Whatever your life’s work is, do it well. A man should do his job so well that the living, the dead, and the unborn could do it no better." />
        <Article imgUrl={blog05} date="Jul 26, 2022" text="If working remotely is such a great idea, why isn't everyone doing it? I think it's because 
        we've been bred on the idea that work happens from 9 to 5, in offices and cubicles. It's no wonder that most who are employed inside that 
        model haven't considered other options or resist the idea that it could be any different. But it can." />
      </div>
    </div>
  </div>
  )
}

export default Blog
