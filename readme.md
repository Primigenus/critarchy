
# Critarchy is an engine for helping artists improve.
## The Artist's Republic of Crits

We're designing a new way for artists to share their work, get feedback, and most importantly, get better. Right now, we're focusing on two things: critiques and sketchbooks.

## Critiques
Critiques are all about posting your work and getting feedback so you can improve. When you post your art, people can reply with critiques. The idea here is that great art gets even better with great crits. This isn't a place to post your work if all you're looking for is a pat on the back. We believe in constructive, in-depth feedback and think this should be the place you go to find that.

## Sketchbooks
We think seeing artists' work in the context of their overall improvement helps generate better crits. So sketchbooks are all about sharing your work over time. They allow you to see and share how you're getting better. When you visit someone's sketchbook, you see their work in reverse chronological order and can scroll through to see how they've improved and leave comments or thanks when you see something great. You can still post artwork separately - for instance, if you want some focused feedback just on that piece.

## Thanks
When you leave critiques or comment on something, others can thank you. "Thanks" are the currency of Critarchy; the more thanks you've received, the more reputation you have in the community. We want this to be a place you go because you know you'll be able to browse great art, and leave and receive great feedback. We hope the thanks system will inspire you to both post your art and leave critiques.

## Why is it called Critarchy?
A [kritarchy](http://voluntaryist.com/forthcoming/kritarchy.html#.VOLS5lPN8m8) is a form of government without political rule. Our vision is of a community for artists designed by and for its members that doesn't impose any forced business models or ad schemes. We'd like to try building it. Calling it "Critarchy" is our punny way of referencing this while still focusing on the most important thing: great critiques of great art.

## Why not just make a forum?
Forums are great for discussion. We're building something different - a place for great critiques. The number one focus is on artists exchanging feedback with each other, not on people having conversations. We still think artists should have a forum where they can talk about anything, it just isn't what we're working on.

## Who are you?
We are [Diedra](http://dierat.com) and [Rahul](http://twitter.com/rahul). Diedra is an artist and software engineer who, over the years, has been a member of many artists' communities and as such has seen her fair share of how things work (and how they break). Rahul is a user interface designer and software engineer who was inspired by Diedra's rants and a discussion on Facebook to build this. We're just getting started. Let's see where things take us!

## Development roadmap

### Phase one
- Critiques
  - An OP containing 1 piece of art
  - Everyone can thank OP posts
    - You need to have 5 thanks before you can thank others
  - Replies that critique the OP's art
  - Everyone can thank replies
  - Users have a profile that displays how many thanks they have
  - Everyone can comment on a critique
    - Comments can get thanks

- Sketchbooks
  - Each user has one sketchbook
    - In future: users can create new sketchbooks
  - Sketchbook posts are listed in reverse chronological order (newest first) so that you always see a user's most recent art
  - Users can thank sketchbook posts, not individual images
  - Users can comment on individual sketchbook posts
  - Optional: two display options (flat vs nested)
  - Streaks: post to your sketchbook every day to keep up the streak. Show an overview on user profiles displaying longest streak, last streak, etc. (Like Github)

- User profiles
  - Thanks
  - Links to other sites/networks like DA, Twitter, portfolio
  - Latest posts/comments
  - OP critiques
  - Sketchbooks
  - Ability to follow people and get notifications

### Phase two
- Mentoring
- Discussions/forum
- Inspiration
  - Users can collect individual posts (which may include artwork) as "inspiration", which is then visible on their profile

### Phase three
- Publishers/art directors

## Misc
  - Logo is the "Critocat"
  - Users are known as critocrats

# New thoughts

## Shelves
Shelves are collections of books. Example shelves:
- artist's shelf contains the artist's journal, sketchbook, resources, and faves
- event shelf contains a book for each event

## Books
Books are collections of pages (threads). Types of books:
- artist sketchbooks
- artist journals
- artist resources (resource scrapbook)
- discussion books (pamphlets)
- event books (like an art show catalogue, shows all the pieces displayed in the event)

## Pages
Pages are threads of comments responding to an opening post. The opening post may be an image with a description or text, depending on the type of book the page appears in.

## Posts
Posts are the contents of pages. A post may be an image + description, a comment, or a crits. Posts in sketchbooks not made by the artist are considered crits. Posts made by the artist are considered comments. All posts in discussion threads are considered comments.

## Thanks/likes/faves/stars/pins/collects
Users can save crits, comments, and pages, which give that item a point and also make the item accessible from the user's profile. (We should probably find an action that fits our metaphor.)

## Follows
Users can follow other users and pages to receive updates. Following users will alert the follower whenever the followee posts a new page, crit, or comment.

## Version 1
MVP
- user profiles that link to user sketchbook and starred crits
- artist sketchbooks in which artists can post new pages with art and descriptions
- users can post crits on sketchbook pages
- users can star crits
- starred crits are showcased on front page
- starred crits are showcased on star-er's profile

## Version 2
- user profiles have avatars and basic info like links to other profiles
- discussion threads
- users can star other users and threads
- alerts when starred users or threads have new updates
- alerts when you receive a star (for your user, thread, or crit)
