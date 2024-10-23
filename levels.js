export const scrumMasterLevels = {
    clerk: {
        title: "Clerk",
        description: `<p>Oh boy, you're like Butters trying to be Professor Chaos - you've got the spirit, but you're still figuring things out! You're that team member who got handed the Scrum Master role because you're good at organizing stuff.</p>

        <p>'Hey, you're pretty neat with spreadsheets, why don't you be our Scrum Master?' they said. So now you're running around updating boards and charts like Butters doing errands for Cartman. You spend most of your time doing the team's paperwork because, hey, someone's gotta do it, right?</p>
        
        <p>Sure, you're keeping things organized, but you're so busy with all the administrative stuff that you haven't had time to learn what being a Scrum Master is really about. It's like having a hall monitor badge - you've got the title, but there's way more to learn about maintaining order in this crazy school!</p>

        <br>
        <p><strong>Your Strengths:</strong></p>
        <ul>
            <li>Great at organizing and maintaining documentation</li>
            <li>Reliable in handling administrative tasks</li>
            <li>Eager to help the team</li>
        </ul>

        <p><strong>Areas for Improvement:</strong></p>
        <ul>
            <li>Too focused on administrative tasks instead of team coaching</li>
            <li>Limited understanding of Scrum principles</li>
            <li>Not enough focus on team improvement and growth</li>
        </ul>`,
        minScore: 20,
        maxScore: 40
    },
    puppetMaster: {
        title: "Puppet Master",
        description: `<p>You're like Cartman when he discovered the 'Stick of Truth' - you know the rules of Scrum and boy, do you make sure everyone follows them! You're always pulling strings to make your team do Scrum 'the right way'.</p>

        <p>'RESPECT MY SCRUM AUTHORITY!' is basically your motto. You've read the Scrum Guide so many times you could recite it in your sleep, and you make sure everyone knows it. The team does all the ceremonies exactly as prescribed, but it's kind of like Mr. Garrison's class - everyone's going through the motions, but are they really getting it?</p>
        
        <p>You're still doing technical work too, because letting go of that would be like Cartman giving up Cheesy Poofs - pretty hard! At least you understand the importance of working software and team collaboration, even if you're a bit... intense about it.</p>

        <br>
        <p><strong>Your Strengths:</strong></p>
        <ul>
            <li>Excellent knowledge of Scrum rules and ceremonies</li>
            <li>Strong process compliance and governance</li>
            <li>Clear understanding of ceremony purposes</li>
        </ul>

        <p><strong>Areas for Improvement:</strong></p>
        <ul>
            <li>Too rigid in applying Scrum rules</li>
            <li>Focusing on mechanics over mindset</li>
            <li>Still too involved in technical work</li>
        </ul>`,
        minScore: 41,
        maxScore: 60
    },
    organizer: {
        title: "Organizer",
        description: `<p>You're like Stan when he gets everyone to rally behind a cause - you actually get what Scrum values are about! You've realized that being a control freak (like Cartman) isn't the way to go.</p>

        <p>Instead of trying to be the superhero (lookin' at you, Mysterion), you're more like Chef - helping the team figure things out for themselves. 'Children, you need to learn to solve your own problems,' as Chef would say. You've stopped doing the technical heavy lifting because you realized the team needs to learn by themselves - it's like when Stan learned to let Timmy handle his own battles.</p>
        
        <p>You focus on teaching the team about Scrum values (Commitment, Focus, Openness, Respect & Courage) like Chef giving life lessons in the cafeteria. Sure, your team is still learning, but at least they're not running around like headless chickens anymore!</p>

        <br>
        <p><strong>Your Strengths:</strong></p>
        <ul>
            <li>Effective at teaching and promoting Scrum values</li>
            <li>Good balance between guidance and team autonomy</li>
            <li>Strong focus on team development</li>
        </ul>

        <p><strong>Areas for Improvement:</strong></p>
        <ul>
            <li>Team still depends on your presence</li>
            <li>Limited influence beyond the team</li>
            <li>Could delegate more responsibilities to the team</li>
        </ul>`,
        minScore: 61,
        maxScore: 80
    },
    coach: {
        title: "Coach",
        description: `<p>Now you're like Randy when he actually knows what he's talking about (rare, but it happens)! Your team runs Scrum pretty well on their own, like the kids organizing one of their elaborate schemes - but this time with actual planning and coordination.</p>

        <p>You're able to step back and look at the bigger picture, working with Product Owners and stakeholders like Kyle negotiating with adults. You don't just preach Scrum, you help people understand it, like Stan explaining the moral of the story at the end of an episode.</p>
        
        <p>You're good at listening to others and connecting with what drives them, just like Kenny (when he's not dying) - somehow getting the point across despite obstacles. The team's doing great, but dealing with management is still trickier than explaining why Kenny keeps coming back to life.</p>

        <br>
        <p><strong>Your Strengths:</strong></p>
        <ul>
            <li>Strong coaching and facilitation skills</li>
            <li>Able to work effectively with stakeholders</li>
            <li>Good at empowering teams to self-organize</li>
        </ul>

        <p><strong>Areas for Improvement:</strong></p>
        <ul>
            <li>Still developing organizational influence</li>
            <li>Could improve strategic thinking</li>
            <li>Management engagement needs work</li>
        </ul>`,
        minScore: 81,
        maxScore: 100
    },
    advisor: {
        title: "Advisor",
        description: `<p>You've become the Chef of the Agile world! You've helped multiple teams become as coordinated as the kids when they're actually working together (instead of fighting each other).</p>

        <p>You're now focusing on the whole organization, fixing problems bigger than the usual town crisis. You're like Jimmy performing at a town hall - everyone stops to listen when you speak. Other Scrum Masters come to you for advice like the kids come to Chef with their problems.</p>
        
        <p>You're handling multiple teams like Mr. Mackey attempting to counsel everyone at once - 'Agility is good, m'kay?' The only challenge now is making the entire organization as responsive as the town is to Randy's latest crazy scheme (but in a good way).</p>

        <br>
        <p><strong>Your Strengths:</strong></p>
        <ul>
            <li>Excellent at mentoring other Scrum Masters</li>
            <li>Strong organizational change management skills</li>
            <li>Effective at scaling Agile practices</li>
        </ul>

        <p><strong>Areas for Improvement:</strong></p>
        <ul>
            <li>Sometimes spread too thin across teams</li>
            <li>Could improve organizational politics navigation</li>
            <li>Balancing strategic and tactical needs</li>
        </ul>`,
        minScore: 101,
        maxScore: 120
    },
    expert: {
        title: "Expert",
        description: `<p>Holy cow, you're like Mint-Berry Crunch when he finally figured out his true potential - but with actual useful powers! You've mastered the art of Scrum like Kenny has mastered dying and coming back to life.</p>

        <p>The whole organization looks to you for guidance like the town looking to Randy during a crisis (except you actually know what you're doing). You help create new standards and practices like Cartman makes up rules, but yours actually make sense and help people!</p>
        
        <p>Some of your teams are so high-performing they're like the kids when they really get their act together and save South Park. You're basically the Morgan Freeman of Agile - showing up with wisdom when needed. Just watch out - some organizations might not be ready for your level of expertise, kind of like how South Park isn't always ready for PC Principal's progressive ideas!</p>

        <br>
        <p><strong>Your Strengths:</strong></p>
        <ul>
            <li>Master at organizational transformation</li>
            <li>Excellent at building high-performing organizations</li>
            <li>Influential in shaping Agile practices industry-wide</li>
        </ul>

        <p><strong>Areas for Improvement:</strong></p>
        <ul>
            <li>May be too advanced for some organizations</li>
            <li>Risk of becoming disconnected from day-to-day realities</li>
            <li>Maintaining patience with less mature organizations</li>
        </ul>`,
        minScore: 121,
        maxScore: 140
    }
};