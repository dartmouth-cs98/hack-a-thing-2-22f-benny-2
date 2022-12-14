# Hack Technology / Project Attempted

## What you built?

Hacktivity1:
I built a web app of a game I created awhile ago. It's a number game where you have to get three numbers using three operations. That part of the code was pre written. So for my actually project, I wanted to do something similar to wordle, where it would use a cookie to store how many seconds and how many hints used on a device. I had to create a timer system to keep track of a user's time as they're solving the puzzle. Additionally, I added a database that saved this data in real time, using the cookie number as a unique user. The database is written into after completing the level and it keeps track of the best time. This time is then displayed at the end of every user session. I finally hosted all of this on netlify so that anyone can use it.

Hacktivity2:
I completely gamified the web app. Before, it only had one level that was playable, but now has over 50. You can choose to go to another randonm level after completing another. The main new feature of the app is viewing the times of your past games. You can do this by clicking 'View Past Games.' Here, you will see all the times you had and the best times by all the other competitors. 


Include some screenshots.
[How?](https://help.github.com/articles/about-readmes/#relative-links-and-image-paths-in-readme-files)
<img width="1020" alt="Screen Shot 2022-09-19 at 3 05 49 PM" src="https://user-images.githubusercontent.com/26367708/193137636-1169e875-28c1-4b22-966b-96bee0c9ceb2.png">
<img width="971" alt="Screen Shot 2022-09-19 at 3 06 04 PM" src="https://user-images.githubusercontent.com/26367708/193137638-3acbcbc4-f199-4786-a532-afd8286f071c.png">
<img width="1435" alt="Screen Shot 2022-09-29 at 4 00 22 PM" src="https://user-images.githubusercontent.com/26367708/193137640-a3d55c62-fb41-4d51-aa38-326cb48ecb5b.png">
<img width="1440" alt="Screen Shot 2022-09-29 at 4 00 31 PM" src="https://user-images.githubusercontent.com/26367708/193137642-c3a11fb7-5412-4996-badf-05b526889222.png">
<img width="1418" alt="Screen Shot 2022-09-29 at 4 00 41 PM" src="https://user-images.githubusercontent.com/26367708/193137643-b6ad411b-a112-4c70-a5d6-2b5758b95f6e.png">
<img width="1424" alt="Screen Shot 2022-09-29 at 4 01 09 PM" src="https://user-images.githubusercontent.com/26367708/193137645-b5fde06a-f212-49db-a02b-d8ebdd4440ff.png">

## Who Did What?

I worked individually.

## What you learned

Hactivity1:
I learned how to store data locally on a browser. This I found, was pretty easy using 'localStorage'. I also learned how to use firebase's realtime database, which took awhile to set up but relatively easy to use since it had great documentation. I learned that data managment can get tricky with different users, so it's important to define how you want to structure your data beforehand. I also learned that all warnings had to be resolved before hosting a site in netlify.
I tried for the longest time to set up firebase CLI since I originally wanted to host on firebase. Yet there were just so many problems in doing so.

Hactivity2:
I continued to learn how to utilize databases but this time in a larger dataset. I had to figure out a way to efficiently store best times through many levels. I had to look up how to handle more complex data and how I can easily featch that data. In order to avoid duplication of stored data, I had to store the best times using the users local storage number, which uniquely identifies them. After grabbing the user Id, we can use that to read the database and access the best time and the user's name.

## Authors

Benedict Tedjokusumo

## Acknowledgments

Database code sourced from https://firebase.google.com/docs/database/web/read-and-write?hl=en&authuser=3#web-version-9_2

Timer code sourced from https://w3collective.com/react-stopwatch/
