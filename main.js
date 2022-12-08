
const randolph = document.getElementById("randolph")
const radio = document.getElementById("radio")
const clickSound = new Audio("sound/close.wav")
const typingSound = new Audio("sound/typing.wav")

const speed = 20;
let value = 0;
typingSound.loop = true;
first = false;
let newText = "Great choice. You can use that radio over there to change the channel if you're not loving the song.";;

const song_list = [
    {
        "song": "Why Don't You Do Right?",
        "artist": "Peggy Lee",
        "quote" : "\"I knew I couldn't sing over them, so I decided to sing under them. The more noise they made, the more softly I sang. When they discovered they couldn't hear me, they began to look at me. Then, they began to listen. As I sang, I kept thinking, 'softly with feeling'. The noise dropped to a hum; the hum gave way to silence. I had learned how to reach and hold my audience—softly, with feeling.\"",
        "artist_desc": "Norma Deloris Egstrom (May 26, 1920 – January 21, 2002), known professionally as Peggy Lee, was an American jazz and popular music singer, songwriter, composer, and actress, over a career spanning seven decades. From her beginning as a vocalist on local radio to singing with Benny Goodman's big band, Lee created a sophisticated persona, writing music for films, acting, and recording conceptual record albums combining poetry and music. Called the \"Queen of American pop music,\" Lee recorded over 1,100 masters and composed over 270 songs." +
            "<br>&emsp;Lee left home and traveled to Hollywood, California, at the age of 17 in March 1938. Her first job was seasonal work on Balboa Island, Newport Beach as a short order cook and waitress at Harry's Cafe. When the job ended after Easter, she was hired to work as a carnival barker at the Balboa Fun Zone. She wrote about this experience in the song, \"The Nickel Ride\", which she composed with Dave Grusin for the 1974 film of the same name." +
            "<br>&emsp;Later in 1938, Lee returned to Hollywood to audition for the MC at The Jade. Her employment was cut short when she fainted onstage due to overwork and an inadequate diet. After she was taken to the Hollywood Presbyterian Medical Center she was told she needed a tonsillectomy. Lee returned to North Dakota for the operation." +
            "<br>&emsp;The following year, remaining in North Dakota, she was hired to perform regularly at The Powers Hotel in Fargo, and toured with both the Sev Olson and the Will Osborne Orchestras.<br>" +
            "<br>&emsp;When Lee returned to California in 1940, she took a job singing at The Doll House in Palm Springs. Here, she developed her trademark sultry purr, having decided to compete with the noisy crowd with subtlety rather than volume.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Peggy_Lee_1950.JPG",
        "year": "Monday July 27 1942",
        "label": "Columbia",
        "fact": ["Lee often stated that Green's recording was influential to her music. In a 1971 interview she said, \"I had the record, and I used to play it over and over in my dressing room, which was next to Benny Goodman ... Finally ... he said, 'I think you really like that song.' I said, 'Oh, I love it.' He said, 'Would you like to sing it?'\" Lee said yes, so Goodman had an arrangement made of it for Lee to sing.", "Featured in the 1943 film, Stage Door Canteen, it sold over one million copies and brought her to nationwide attention.", "The song has its roots in blues music and originally dealt with a marijuana smoker reminiscing about lost financial opportunities. As it was rewritten, it takes on the perspective of the female partner, who chastises her man for his irresponsible ways, complaining that her other lovers provide her with more money: \"Why don't you do right, like some other men do? Get out of here and get me some money too.\""],
        "description": "\"Why Don't You Do Right?\" (originally recorded as \"Weed Smoker's Dream\" in 1936) is an American blues and jazz-influenced pop song usually credited to Kansas Joe McCoy. A minor key twelve-bar blues with a few chord substitutions, it is considered a classic \"woman's blues\" song and has become a standard. Singer Lil Green recorded a popular rendition in 1941, which Peggy Lee recorded the next year — accompanied by Benny Goodman — and made one of her signature songs.",
        "lyrics":
            "You had plenty money, 1922<br>" +
            "You let other women make a fool of you<br>" +
            "Why don't you do right, like some other men do?<br>" +
            "Get out of here and get me some money too<br>" +
            "You're sittin' down and wonderin' what it's all about<br>" +
            "You ain't got no money, they will put you out<br>" +
            "Why don't you do right, like some other men do?<br>" +
            "Get out of here and get me some money too<br>" +
            "If you had prepared twenty years ago<br>" +
            "You wouldn't be a-wanderin' from door to door<br>" +
            "Why don't you do right, like some other men do?<br>" +
            "Get out of here and get me some money too<br>" +
            "I fell for your jivin' and I took you in<br>" +
            "Now all you got to offer me's a drink of gin<br>" +
            "Why don't you do right, like some other men do?<br>" +
            "Get out of here and get me some money too<br>" +
            "Why don't you do right, like some other men do?<br>" +
            "Like some other men do",
        "main_article":{
            "title": "ROMMEL ATTACKS AGAIN IN FORCE",
            "subtitle": "New panzer drive is smashed",
            "author": "Express Military Reporter MORLEY RICHARDS",
            "bold": "There is crisis over the desert.<br>&emsp;Last night's Libyan news makes it plain that while Rommel's first thrust to encircle the Eighth Army within Tobruk by cutting our supply route from Egypt was frustrated, he has come on again in force.",
            "semibold": "&emsp;That means he has more reserves than was calculated--for he has suffered big losses--and he has got his feed lines working in double quick time, despite all our attempts to break them.",
            "medium": "&emsp;Crisis now being enacted will decide whether we are to fight another battle of Libya or a battle of Egypt. That in turn would affect the whole Allied war strategy.",
            "regular": "&emsp;Here is this morning's position: Acroma, El Adem, and to a lesser extent Sadi Rezegh, are military oases in the desert sustaining the forward elements of General Ritchie's army." +
                "<br>&emsp;Deprive him of any one of them and he has to move his troops quickly in two possible directions: Tobruk or the Egyptian border. (There is no half-way house between the two.)" +
                "<br>&emsp;General Rommel is 'containg' Acorma. That is to say he has thrown a rough ring round the garrison to hold it while he tackles the other two spots." +
                "<br>&emsp;Last night the Axis claimed that in an attempt to break out of Acorma the garrison lost 600 men as prisoners." +
                "<br>&emsp;There is no confirmation from our side, but it is obvious that with only a track from Tobruk as a supply line, the Acroma stronghold is in a precarious state." +
                "<br>&emsp;Rommel's drive to Sadi Rezegh went wrong for him, thanks to the stalwart defenco of our hard-pressed men, and the German has turned back to El Adem, which has three lines of supply compared with Acroma's one." +
                "<br>&emsp;Our air force, now making as many as 300 sorties a day, hit the Sadi Rezegh column with devastating force as it moved up." +
                "<br>&emsp;It was revealed last night that ten of the thirty tanks in the column were destroyed.",
        },
        "right_article":{
            "title": "MUSSOLINI'S FLEET HIT A SECOND TIME",
            "subtitle": "Two battleships caught by our planes",
            "author": "Express Staff Reporter Eric Bigio",
            "bold": "&emsp;&emsp;WESTERN DESERT AIRFIELD, Wednesday.&emsp;R. A.F. torpedo planes have struck again at Mussolini's fleet. Pilots ranging the Mediterranean early on Tuesday morning, after the battles which brought our convoys into Malta and Tobruk, spotted below them two Italian battleships guarded by an escort of four destroyers.",
            "regular": "The enemy put up a heavy smokescreen, but a hit was scored on the leading battleship.<br>" +
                "<br>&emsp;It is now known that during the earlier Allied attacks the Italians lost 14 planes, and many others were so badly damaged that they were unlikely to reach home. These air successes were in addition to the sinking of an Italian cruiser and two destroyers and the hits scored on two battleships.<br>" +
                "<br>&emsp;Most of the Italian battle fleet which responded to within 100 miles of the Libyan coast, turned back after R.A.F. planes and American Liberators attacked the,, and steamed fast for the safety of their harbours.<br>" +
                "<br>&emsp;Fifteen ships, comprising two",
        },
        "article_1":{
            "title": "SWISS ARREST THREE COMMUNIST LEADERS",
            "regular": "VICHY, Wednesay. Three Communist leaders including Otis Brunner, were arrested today and accused of attempting to reorganise the banned Communist Party, says message from Zurich, Switzerland--Reuter.",
        },
        "article_2":{
            "title": "U-BOAT STRIKES OFF MADAGASCAR",
            "regular": "LOURENCO MARQUES, Wednesday.--The Juge-Slav steamer Rapetar has been torpedoed in the Mozambique channel between Madagascar and the African mainland. The news follows the decision to black-out Darban, port on the east coast of South Africa ever night--Reuter.",
        },
        "right_sub_article":{
            "title": "How the convoy got through",
            "author": "From HENRY GORRELL, B.U.P correspondent with the Mediterranean Fleet",
            "regular": "&emsp;ALEXANDRIA, Wednesday,<br>TWO days and night of incessant attack by plane, submarine, E-boat and full-size warship were faced by the British Navy to get the convoy from Alexandria through through to Tobruk and Malta with badly needed supplies. I saw it all from a British cruiser in the escort." +
                "<br>&emsp;The cruise had many near misses from bombs and torpedoes, and fought off hordes of bombers." +
                "<br>&emsp;She was wounded and lost speed, but she twice turned with the real of her squadron to face Italian battleships and heavy cruisers operating 30 miles to the east.<br>" +
                "&emsp;Mussolini's sailors, however, never crossed with the British warships.<br>" +
                "&emsp;When we started the captain said:--\"They will probably attack day and night, because they're out to get Malta.\" He was right.<br>" +
                "&emsp;From a few hours after the boat left the base, the Axis threw in the weight of the power from Crete and North Africa.<br>\tDozens of U-boats were sent in to stop us."
        },
        "left_sub_article":{
            "title": "BIG SEBASTOPOL ATTACK FAILS",
            "author": "Express Special Correspondent",
            "regular": "STOCKHOLM, Wednesday.<br>TWO divisions of German shock troops--and all their reserves, sappers, and labour companies--were hurried back by Soviet bayonets today when von Manstein made his biggest and most desperate drive for the capture of Sebastopol." +
                "<br>&emsp;Hampered by Soviet sea-borne Commandos who has again landed behind the German artillery positions, Manstein launched his attack at dawn." +
                "<br>&emsp;When the German tanks rolled forward in a mass assault, Red Army artillery blazed into action." +
                "<br>&emsp;Seventy one tanks were blown up as Soviet batteries kept up a steady rain of shell." +
                "<br>&emsp;Four German infantry battalions were wiped out." +
                "<br>&emsp;Withstanding, dive-bomber attacks and heavy poundings from German 'Big-Berthas', the powerful Red Army forta hit back at the enemy." +
                "<br>&emsp;Soviet infrantry managed to hold on to a height recaptured from the Germans yesterday." +
                "<br>&emsp;The German attacks were repelled by Soviet rifelmen defending a high road at the soutern approaches to the great city fortress." +
                "<br>&emsp;Special Sebastopol mapl Kharkov tank battle--Page Four."
        },
        "left_sub_article_2":{
            "title": "Miners get pay increase",
            "author": "By GUY EDEN",
            "regular": "THE miners have won their fight for better wages." +
                "<br>&emsp;I understand that the report of Lord Greene, Master of the Rolls, on the request for an increase of 4s, a shift with a weekly minimum for adult miners of £4 is now in the hands of the Government." +
                "<br>&emsp;It recommends a substantial increase in wages all over the country, back-dated to June 1." +
                "<br>&emsp;The government is prepared to agree, and a statement may be expected soon." +
                "<br>&emsp;Cost of conceding the full demand is estimated at £40,000,000 a year, and this will be met partly by an increase in coal prices and partly by Government subsidies."
        }
    },
    {
        "song": "Easy Living",
        "artist": "Billie Holiday",
        "quote": "People don't understand the kind of fight it takes to record what you want to record the way you want to record it." +
            "<br>",
        "artist_desc": "Billie Holiday (born Eleanora Fagan; April 7, 1915 – July 17, 1959) was an American jazz and swing music singer. Nicknamed \"Lady Day\" by her friend and music partner, Lester Young, Holiday had an innovative influence on jazz music and pop singing. Her vocal style, strongly inspired by jazz instrumentalists, pioneered a new way of manipulating phrasing and tempo. She was known for her vocal delivery and improvisational skills.<br>" +
            "<br>" +
            "After a turbulent childhood, Holiday began singing in nightclubs in Harlem, where she was heard by producer John Hammond, who liked her voice. She signed a recording contract with Brunswick in 1935. Collaborations with Teddy Wilson produced the hit \"What a Little Moonlight Can Do\", which became a jazz standard. Throughout the 1930s and 1940s, Holiday had mainstream success on labels such as Columbia and Decca. By the late 1940s, however, she was beset with legal troubles and drug abuse. After a short prison sentence, she performed at a sold-out concert at Carnegie Hall. She was a successful concert performer throughout the 1950s with two further sold-out shows at Carnegie Hall. Because of personal struggles and an altered voice, her final recordings were met with mixed reaction but were mild commercial successes. Her final album, Lady in Satin, was released in 1958. Holiday died of cirrhosis on July 17, 1959, at age 44.<br>" +
            "<br>" +
            "Several films about her life have been released, most recently The United States vs. Billie Holiday (2021).",
        "image": "https://assets.vogue.com/photos/6039702a2b4ed9246fc2c324/master/w_2560%2Cc_limit/GettyImages-104476113.jpg",
        "year": "Thursday June 10 1937",
        "label": "Label here",
        "fact": ["Holiday won four Grammy Awards, all of them posthumously, for Best Historical Album. She was inducted into the Grammy Hall of Fame and the National Rhythm & Blues Hall of Fame."],
        "description" : "\"Easy Living\" (1937) is a jazz standard written by Ralph Rainger and lyrics by Leo Robin for the film Easy Living where it was the main theme of the score but not sung. A popular recording in 1937 was by Teddy Wilson with Billie Holiday, Benny Goodman, and Lester Young.",
        "lyrics": "Living for you is easy living<br>" +
            "It's easy to live when you're in love<br>" +
            "And I'm so in love<br>" +
            "There's nothing in life but you<br>" +
            "I'll never regret the years I'm giving<br>" +
            "They're easy to give when you're in love<br>" +
            "I'm happy to do whatever I do for you<br>" +
            "For you<br>" +
            "Maybe I'm a fool but it's fun<br>" +
            "People say you rule me with one<br>" +
            "Wave of your hand<br>" +
            "Darling it's grand<br>" +
            "They just don't understand<br>" +
            "Living for you is easy living<br>" +
            "It's easy to live when you're in love<br>" +
            "And I'm so in love<br>" +
            "There's nothing in life but you",
        "main_article":{
            "title": "WINDSOR FORGOT TO KISS BRIDE; HONEYMOON BEGINS",
            "subtitle": "ON HONEYMOON AT LAST",
            "author":"By JOHN LLYOD, Associated Press Foreign Staff",
            "bold": "Laroche-Migennes, France--The Duke and Duchess of Windsor sped toward an Austrian honeymoon today after taking vows in a double marriage ceremony yesterday in which the nervous former King forgot to kiss his bride. The Mayor of Monts, Charles Mercier, who performed the civil service, forgot the French Government's official gift to bridal",
            "semibold": "couples--a booklet on how to raise a family--and had to hurry from the Chateau de Cande to Monts to fetch it." +
                "<br>&emsp;During the religious service, the Duke suffered a catch in his throat and said \"I will\" with such force that the guests almost jumped. Even at the wedding breakfast his composure had not returned. To call for a speech he responded:" +
                "<br>&emsp;\"Thank all you people for coming on this occasion which is so important for us\"",
            "medium":"&emsp;With these homely and personal touches which for ages have made all marriages akin, Edward, Duke of Windsor, and the blue-eyed, American-born Wallis Warfield, for whom the Duke relinquished the British throne, became man and wife according to the canons of the haughty Church of England."+
                    "<br>&emsp;A determined little \"poor man's parson\" who defied the church's orders for a religious boycott of the marriage, read the Anglican service which his conscience dictated he must give to \"my King.\"",
            "regular": "Then having stood for a day in the world's spotlight, the Rev. R. Anderson Jardine, vicar of St. Paul's Church, Darlington, departed for England to face the ire of his superiors there." +
                "<br>&emsp;To this small station in the Department of Yonne the royal newly-weds journeyed by motor"
        },
        "right_article":{
            "title": "SPAIN TENSION GRIPS WORLD: \"ITALY SOLID WITH GERMANY\"",
            "subtitle": "Following the bombing of Nazi battleship",
            "author": "Express Staff Reporter",
            "bold": "London, Paris, Moscow, Washington and Geneva feared that the whole system of control and non-intervention will be smahed, with grave consequences, by the bombing of the Deutschland and the retaliatory shelling of Almeria with the loss of twenty lives, by Nazi warships.",
            "regular": "Britain's Foreign Minister, Anthony Eden, is working desperately to save the situation. He is trying to persuade the Spanish Government not to attack German or Italian warships." +
                "<br>&emsp;Germany and Italy announced yesterday that they have withdrawn from the system of control of the Spanish coast until they have received guarantees that similar incidents will never be repeated." +
                "<br>&emsp;Whitehall and Paris are seriously alarmed. As long as Italy and Germany remain outside the control system they can send volunteers and armaments to Franco. If they do, France, Britain and Russia might feel compelled to stop them on the high seas.",
        },
        "article_1":{
            "title": "FALSE AIR RAID WARNING SAVED THOUSANDS",
            "regular": "A FALSE air raid warning saved the lives of thousands of people in Almeria, says British United Press. The alarm sent them hurrying into the bomb-proof shelters for the night." +
                "<br>&emsp;While they were there the German warships appeared off the coast in battle formation and began their reprisals.",
        },
        "article_2":{
            "title": "WIFE HAD SO MANY CHILDREN HE BLEW THEM UP WITH DYNAMITE",
            "regular": "A \"lie detector\" machine has betrayed a father of ten children and forced him to confess he blew up his home with dynamite, killing his wife and eight of the children." +
                "<br>&emsp;He did it after quarrelling with his wife \"because she kept having more kids\"" +
                "<br>&emsp;John Waszak, of Waukesha, Wisconsin, is quoted as saying \"I plotted the explosion last March. None of the children helped me with the farm work, so when the family was gathered round the wireless I went to the cellar and lighted a one-foot fuse attached to low-grade dynamite, known as pyrotol.\"--British United Press."
        },
        "right_sub_article":{
            "title": "GRESFORD OWNERS ARE FINED £140",
            "author": "Daily Express Staff Reporter, WREXHAM, Tuesday." +
                "<br>&emsp;The owners of Gresford Colliery, United Westminster and Wrexham Collieries, Ltd., were tonight fined £140 on eight summonses alleging failure to keep air records required by the Coal Mines Act.",
            "regular": "William Bonsall, former manager at Gresford, was fined £15 on similar summonses.<br>&emsp;They were ordered to pay 350 towards the costs." +
                "<br>&emsp;TWo summonses against the copmany for failure to provide adequate ventilation were dismissed." +
                "<br>&emsp;The chairman of the Bench said: \"We consider this case as one of the highest importance, and although the prosection have failed in evidence we strongly emphasise that the case was righly brought for trial.\"" +
                "<br>&emsp;Teh case, which began six days ago, originally had 42 summonses against 10 defendants, but all except the company and Bonsall were discharged. " +
                "<br>&emsp;The Solicitor-General (Sir Terence O'Connor, K.C., M.P.,) and Mr. George Bankes prosecuted, and Sir Patrick Hastings, K.C., and Mr. Hartley Shawcross defended." +
                "<br><b>Company's Case</b><br>&emsp;Sir Patrick Hastings, addressing the magistrates, said neither the company nor the manager wished to shelter behind any of their servants. Their case was that no one had committed any breach of th regulations at all so far as the summonses alleging lack of adequate ventilation were concerned." +
                "<br>&emsp;The other summonses on the keeping of books, he said, were very minor summonses compared with the other allegations.<br>&emsp;\"I want to register a very strong protest against the way in which the Government department responsible for this prosecution have presented it to you.\" said Sir Patrick." +
                "<br>&emsp;\"The prosecution has been launched with the approval of the Minister of Mines. It has been proved that on innumerable occasions in 1933 and 1934 the Ministry sent their own inspectors to the mine." +
                "<br>&emsp;\"They must know whether the ventilation was good or not. One of them was down there as late as a fortnight before the exploration.<br>&emsp;\"Not one of them has been called to give evidence, not a single one of the officers and servants of the Ministry responsible for the prosecution and knowing the facts has been called for the prosecution.\""
        },
        "left_sub_article":{
            "title": "Masked Fate Stalks Honeymoon Express",
            "author": "Special Cable to the News",
            "regular": "Aboard the Simplon-Orient Express, Bound for Austria--Man and wife at last, the Duke of Windsor and the former Wallis Warfield sped from kindly France today to begin together a life of as much simplicity and peaceful quiet as an avidly interested world will allow them." +
                "<br>&emsp;They sped aboard a new blue private car attached to this train toward a three months honeymoon in Austra--and after that--what?" +
                "<br>&emsp;Streaking toward the Swiss border, newspapermen in coaches behind the honeymoon car swapped impressions and speculations on the greatest romance of the century--the love affair of the man who gave up a throne and the American Cinderella who still addresses her husband as \"Sir.\"" +
                "<br>&emsp;The royal outcasts, to use the Duke's own words, look forward \"to a happy and useful private life and to that measure of peace that we hope will be granted us.\"" +
                "<br>&emsp;They will be amply supplied with funds, the Royal Family having provided financial security.<br>&emsp;But they will not be welcome on the tight little island which Edward knows as \"home.\""
        },
        "left_sub_article_2":{
            "title": "New Hope For Teachers",
            "author": "Wages Plea To Premier",
            "regular": "Ulster teachers' campaign for full restoration of salaray cuts was carried to Stormont yesterday when a deputation of Unionat members met Lord Craigaron and new Finance Minister J.M. Andrews." +
                "<br>&emsp;The Prime Ministor promised to give sympathetic consideration to the teachers' claims, and his attitude brightened prospects for full restoration of the cuts in this coming Budget to be presented on June 1." +
                "<br>&emsp;The teachers are asking for the restoration of the second half of the 7 per cent cut made in 1901.",
        }

    },
    {
        "song": "Dear Hearts and Gentle People",
        "artist": "Bob Crosby and the Bobcats",
        "quote": "I didn't want people to say his brother Bing sings better than he does. Bing was always hesitant to accept appreciation in any form. He wanted me to learn to stand on my own feet, and to make it impossible for me to thank him.",
        "artist_desc": "George Robert Crosby (August 23, 1913 – March 9, 1993) was an American jazz singer and bandleader, best known for his group the Bob-Cats, which formed around 1935. The Bob-Cats were a New Orleans Dixieland-style jazz octet. He was the younger brother of famed singer and actor Bing Crosby. On TV, Bob Crosby guest-starred in The Gisele MacKenzie Show and was also seen on The Jack Benny Program. Crosby hosted his own afternoon TV variety show on CBS, The Bob Crosby Show (1953–1957). Crosby received two stars on the Hollywood Walk of Fame, for television and radio." +
            "<br>&emsp;Crosby began singing in the early 1930s with the Rhythm Boys, which included vocalist Ray Hendricks and guitarist Bill Pollard, and with Anson Weeks (1931–34) and the Dorsey Brothers (1934–35). He led his first band in 1935 when the former members of Ben Pollack's band elected him their titular leader. In 1935, he recorded with the Clark Randall Orchestra led by Gil Rodin and featuring singer Frank Tennille (a.k.a. Clark Randall). Glenn Miller was a member of that orchestra, which recorded the Glenn Miller novelty composition \"When Icky Morgan Plays the Organ\" in 1935. Crosby's \"band-within-the-band,\" the Bob-Cats, was a dixieland octet with soloists from the larger orchestra, many from New Orleans." +
            "<br>&emsp;During World War II, Bob Crosby spent 18 months in the Marines touring with bands in the Pacific. His radio variety series, The Bob Crosby Show, aired on NBC and CBS in different runs from July 18, 1943, to July 16, 1950." +
            "<br>&emsp;Bob Crosby guest-starred in the television series The Gisele MacKenzie Show. He also starred in his own afternoon variety show, The Bob Crosby show, that aired from 1953 to 1957. He also fronted a TV program in Australia in the 1960s. He was one of two featured singers (the other being Dennis Day) in mid-1950s episodes of The Jack Benny Program.",
        "image":"https://upload.wikimedia.org/wikipedia/commons/b/b7/Bob_Crosby_1953.JPG",
        "year": "October 26 1949",
        "label": "Decca Records",
        "fact": ["Crosby received two stars on the Hollywood Walk of Fame on February 8, 1960, for television (at 6252 Hollywood Boulevard) and radio (at 6313 Hollywood Boulevard).","As a performer, Crosby had tremendous charisma and wit combined with a laid-back persona. He was able to swap jokes competently with Benny, including humorous references to his brother Bing's wealth and his string of losing racehorses."],
        "description": "<em>\"Dear Hearts and Gentle People\"</em> is a popular song published in 1949 with music by Sammy Fain and lyrics by Bob Hilliard. The song refers to the singer's hometown, and different versions allude to a range of U.S. states.",
        "lyrics" : "I love those dear hearts and gentle people<br>" +
            "Who live in my home town<br>" +
            "Because those dear hearts and gentle people<br>" +
            "Will never ever let ya' down<br>" +
            "They read the good book from Fri till Monday<br>" +
            "Thats how the weekend goes<br>" +
            "(Thats how it goes!)<br>" +
            "I've got a dream house I'll build there one day<br>" +
            "With picket fence and rambling road<br>" +
            "I feel so welcome each time that I return<br>" +
            "That my happy heart keeps laughin' like a clown<br>" +
            "I love those dear hearts and gentle people<br>" +
            "Who live n' love in my home town<br>" +
            "They read the good book from fri till monday<br>" +
            "Thats how the weekend goes<br>" +
            "I've got a dream house I'll built there one day<br>" +
            "With picket fence and rambling road<br>" +
            "I feel so welcome each time that I return<br>" +
            "That my happy heart keeps laughin' like a clown<br>" +
            "I love those dear hearts and gentle people<br>" +
            "Who live n' love in my home town<br>" +
            "(In my home town!)<br>" +
            "Those dear hearts and gentle people<br>" +
            "Who live in my home town",
        "main_article":{
            "title": "RUSSIANS SPLIT GERMANY",
            "subtitle": "New East Zone Cabinet: Troops quitting Berlin",
            "author":"GERMANY YESTERDAY BECAME A HOPELESSLY SPLIT NATION OF TWO GOVERNMENTS AND TWO CAPITALS. THE RUSSIANS HIT BACK AT THE WEST GERMAN REPUBLIC AT BONN BY CREATING ONE OF THEIR OWN IN THE RUINS OF HITLER'S NAZI HEADQUARTERS IN BERLIN.",
            "bold": "A handful of Communists appointed themselves the Government for 17,000,000 Germans in the Soviet zone, then they passed a law saying they were legal.",
            "semibold": "A 20-point manifesto was adopted, obviously linking Germany east of the Elbe River with Moscow and the Cominform satellite states." +
                "<br>&emsp;A constitution of pointed Communist doctrine was declared in force and a Government of a Prime Minister, three deputies and 14 ministries, headed by foreign affairs, was formed.",
            "medium":"&emsp;All this was accomplished in one afternoon by the People's Council, a body of more than 400 Communists and their sympathisers, carefully screen by the Russians.",
            "regular": "The council set itself up as a lower house with law-making power.<br>&emsp;It announced that the Soviet Military Government will make it a special declaration on Tuesday in answer to the request for German self-rule and sovereignty." +
                "<br>&emsp;The precedents of the five States in the Russian zone will appoint an upper house. Together these bodies will elect a president--probably Communist elderstatesman 73-year-old Wilhelm Pieck, who will, in turn, name the government." +
                "<br>&emsp;The party's joint chairman, 35-year-old Otto Grolewohl is generally expected to be Premier." +
                "<br>&emsp;Meanwhile, Col. Alexis Yellsarov, acting Soviet Commandant of Berlin, has ordered the withdrawal of the entire Soviet garrison from the city by next week. German address said:" +
                "<br>&emsp;The garrison numbers about 1,000. The men will be withdrawn to barracks in Potsdam and other centres near Berlin." +
                "<br>&emsp;Here Wilhelm Pieck, the veteran Communist chief demanded--and the new State agreed--that occupation troope should quit Germany." +
                "<br>&emsp;As Pieck spoke, Russian troops were evacucating their central Kommandatura in the city's eastern sector." +
                "<br>&emsp;General elections will be held on 13 October next year, Pieck said."
        },
        "right_article":{
            "title": "BRIDGE CRASHES INTO ROAD",
            "subtitle": "Engine driver leaps to safety",
            "author": "Henry Lewis",
            "bold": "A LIVERPOOL lorry driver escaped death by inches, and the driver of a coal train leapt for his life and rolled down a 30ft embankment when a railway bridge spanning the main Longton-Trentham road, Stoke-on-Trent, collapsed last night",
            "regular": "The bridge, which carried the mineral traffic from nearby counties, collapsed. Two ten-ton girders, and slabs of masonry from a supporting wall, crashed into the roadway." +
                "<br>&emsp;One of the girders fell across the lorry, laden with steel angle frames, narrowly missing the driver's cab." +
                "<br>&emsp;Taylor was unhurt." +
                "<br>&emsp;A man on an allotment at the foot of the embankment heard the crash and shoted a warning to the driver of a 10-truck gnodal train, Harold Clewley, of Oakwood-road, Blurton, Stoke-on-Trent." +
                "<br>&emsp;Clewley dived from the engine down the embankment. The engine and four trucks passed over the bridge before bending the rails into a hollow in the middle of which three wagons telescoped and remained suspended over the roadway." +
                "<br>&emsp;The road was completely blocked by the girders and wreckage, and all traffic was diverted." +
                "<br>&emsp;Late last night efforts were being made to haul the girders clear." +
                "<br>&emsp;Clewley said last night \"I did not realise anything was amiss until a man shouted a warning. Then I jumped for my life heading down the railway embankment, and escaped with only torn trousers.\"" +
                "<br>&emsp;Early today epillery officials were knocking up lorry drivers to man vehicles dispersed throughout the district.<br>&emsp;\"We're also roping in practically everyone we can find to help move the debris and creet a platform under the trucks.\"the Birmingham Gazette was told." ,
        },
        "article_1":{
            "title": "More U.S. Envoy Talks",
            "regular": "CHIEFS of United States diplomatic missions in Western Europe also are to meet in London quite soon.<br>&emsp;This was announced in London last night 24 hours after a statement from Washington giving details of a conference at which seven American envoys from the Iron Curtain countries will spend two days in London discussing conditions in Eastern Europe.",
        },
        "article_2":{
            "title": "Princess to visit Malta",
            "regular":  "It was reported at Valetta last night that Princess Elizabeth and the Duke of Edinburgh will spend Christmas in Malta with Lord and Lady Mountbatten." +
                "<br>&emsp;Princess Elizabeth will go to Fontwell Park on Monday to see Monsween, whom she owns in partnership with the Queen, run in the Chichester Handicap Stakes." +
                "<br>&emsp;The Princess had to cancel her plane journey from Scotland to Ascot yesterday because of poor flying conditions and the likelihood of fog. Thus she missed seeing Astrakhan, her first racehorse, finish second to The Golden Road in the Sandwich Stakes.",
        },
        "right_sub_article":{
            "title": "SHE NURSED A KING FOR 7 YEARS",
            "author": "MISS CATHERINE BLACK.",
            "regular": "Miss Catherine Black, who nursed King George V during his last illness, died yesterday at London Hospital, aged 70." +
                "<br>&emsp;During nine years on the London Hospital private nursing staff she visited many famous homes and nursed many well-known people." +
                "<br>&emsp;Miss Black tended King George V constantly from the time of his serious illness in 1928 till his death seven years later." +
                "<br>&emsp;In 1930 she relinquished her position at the London Hospital and was appointed a permanent member of the palace staff." +
                "<br>&emsp;In an autobiography \"King's Nuse--Beggar's Nurse\" published in 1939, she wrote: \"As the years passed I became a part of the permanent fixture in the Royal household.\"" +
                "<br>&emsp;\"My primary duties were, of course, concerned with the King's health, but there were quite a number of odd jobs as well. When anyone in the Royal Family cut a finger badly, sprained an ankle, or developed a sore throat at Sandringham or Balmoral, 'Blackie' as they called me, was immediately sent for to cope with it.\"" +
                "<br>&emsp;Nothing gave King George V more interest ir delight than to hear about the \"man in the street.\"" +
                "<br>&emsp;She recounted how she used to collect \"scraps of ordinary news and incidents of everyday life\" to tell him when she returned from her hours off duty." +
                "<br>&emsp;When Miss Black was herself taken ill in 1930 both King George V and Queen Mary went to see her in hospital." +
                "<br>&emsp;After his death she said: \"King George was my last patient. I shall never do any more nursing.\"",
        },
        "left_sub_article":{
            "title": "Midland police work on new petrol racket",
            "author": "Midland police are investigating a black market in petrol. The \"Birmingham Gazette\" which last year exposed the \"secret\" petrol trank for red petrol, understands that some commercial fuel has been diverted and sold as \"white\" petrol.",
            "regular": "&emsp;The petrol is believed to have been intercepted before being dyed red and sold at three times the fixed price." +
                "<br>&emsp;Private car owners are mong those who are sold to have had the untreated commercial petrol in their tanks." +
                "<br>&emsp;Some vehicles were collected at a secret rendezvous and returned to their drivers after the tanks had been filled." +
                "<br>&emsp;It is understood that the Director of Public Prosecutions has been told of the dealings."
        },
        "left_sub_article_2":{
            "title": "INCREASED HOURS AND MORE DIRECTION?",
            "author": "by Our Industrial Correspondent",
            "regular": "LONGER hours of work and a possible extension of greater use of the Government's power to direct labour were discussed at a high level in Londong yesterda under the chairmanship of Sir Stafford Cripps. " +
                "<br>&emsp;The Chancellor of the Kxchequer met representatives of industry and the trade unions in what was officially called a routine quarterly National Production Advisery Council on Industry." +
                "<br>&emsp;It was realised that some transfer of workers might have to take place if the undermanned industries are to play their part in turning out more products for export.",
        }
    },
    {
        "song": "Pistol Packin' Mama",
        "artist": "Bing Crosby",
        "quote": "\"This is the only country in the world where an old broken-down crooner can win an Oscar for acting. It shows that everybody in this country has a chance to succeed.\"",
        "artist_desc" : "Harry Lillis \"Bing\" Crosby Jr. (May 3, 1903 – October 14, 1977) was an American singer and actor. The first multimedia star, he was one of the most popular and influential musical artists of the 20th century worldwide.He was a leader in record sales, radio ratings, and motion picture grosses from 1926 to 1977. He made over 70 feature films and recorded more than 1,600 songs.<br>" +
            "<br>&emsp;His early career coincided with recording innovations that allowed him to develop an intimate singing style that influenced many male singers who followed, such as Frank Sinatra, Perry Como, Dean Martin, Dick Haymes, Elvis Presley, and John Lennon.<br>" +
            "<br>&emsp;Yank magazine said that he was \"the person who had done the most for the morale of overseas servicemen\" during World War II. In 1948, American polls declared him the \"most admired man alive\", ahead of Jackie Robinson and Pope Pius XII.: 6  In 1948, Music Digest estimated that his recordings filled more than half of the 80,000 weekly hours allocated to recorded radio music in America.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Bing_Crosby_1930s.jpg/1024px-Bing_Crosby_1930s.jpg",
        "year": "October 21 1943",
        "label": "Decca 23277",
        "fact": ["The chorus of the song was used for the 1970s UK television advertising campaign for Rowntree's Fruit Pastilles, with the punning tag line \"Pastille Pickin' Mama, pass those pastilles round.\""],
        "description": "\"Pistol Packin' Mama\" was a \"Hillbilly\"-Honky Tonk record released at the height of World War II that became a nationwide sensation, and the first \"Country\" song to top the Billboard popular music chart. It was written by Al Dexter of Troup, Texas, who recorded it in Los Angeles, California on March 20, 1942, with top session musicians Dick Roberts, Johnny Bond and Dick Reinhart, who all normally worked for Gene Autry). 1943 was dominated by the Musician's Strike, which since August 1942, had prevented the recording of commercial music by the record companies. As the strike dragged on, the labels began releasing material from their artists' back catalogues, until by mid-1943, that ran out too. Fortunately for Okeh records, they released Al Dexter's \"Pistol Packin' Mama\" (PPM), backed with \"Rosalita\", in March. It caught fire quickly, helped by reports in 'The Billboard' magazine, and great popularity with customers of the nation's jukeboxes, which had run out of fresh material to play. Although Billboard did not publish its first Folk-Hillbilly chart until January 8, 1944, PPM became the first \"Hillbilly\" record to reach no. 1 on the National Best Selling Retail Records chart, on October 30, 1943, and spent sixteen weeks in the top 10, on its way to selling 3 million copies. It entered the Jukebox chart on July 31, 1943, where it stayed for 28 weeks (the last 14 shared with Bing Crosby version), another unheard of achievement for a \"Hillbilly\" tune. In Billboard's 1943 Yearbook, released in September, PPM by Dexter was the only hillbilly record to join Glenn Miller and Tommy Dorsey in the best-selling record list. Top vocalist Bing Crosby, always a major fan of \"hillbilly\" music, was finally able to record a cover version with the Andrews Sisters on September 27, when his label, Decca, became the first to settle with the union. The single, released October 21, followed Dexter's to the top, revitalizing popularity and sales into 1944. When the first Billboard \"Most Played Jukebox Folk Records\" chart was published, both PPM versions tied for Number 1, and remained tied for seven straight weeks. The NBC radio network banned Bing's version because of the line “drinking beer in a cabaret.” The lyrics had to be changed to “singing songs in a cabaret” before it could air.",
        "lyrics" : "Lay that pistol down, babe<br>" +
            "Lay that pistol down<br>" +
            "Pistol packing mama<br>" +
            "Lay that pistol down<br>" +
            "Oh, drinking beer in a cabaret<br>" +
            "Was I having fun<br>" +
            "Until one night she caught me right<br>" +
            "And now I'm on the run<br>" +
            "Oh, lay that pistol down, babe<br>" +
            "Lay that pistol down<br>" +
            "Pistol packing mama<br>" +
            "Lay that pistol down<br>" +
            "Oh, I'll sing you every night Bing<br>" +
            "And I'll woo you every day<br>" +
            "I'll be your regular mama<br>" +
            "And I'll put that gun away<br>" +
            "Oh, lay that pistol down, babe<br>" +
            "Lay that pistol down<br>" +
            "Pistol packing mama<br>" +
            "Lay that thing down<br>" +
            "Before it goes off<br>" +
            "And hurts somebody<br>" +
            "Oh, she kicked out my windshield<br>" +
            "And she hit me over the head<br>" +
            "She cussed and cried and said I lied<br>" +
            "And she wished that I was dead<br>" +
            "Oh, lay that pistol down, babe<br>" +
            "Lay that pistol down<br>" +
            "Pistol packing mama<br>" +
            "Lay that pistol down<br>" +
            "We're three tough gals<br>" +
            "From deep down Texas way<br>" +
            "We got no pals<br>" +
            "They don't like the way we play<br>" +
            "We're a rough rooting tooting shooting trio<br>" +
            "But you ought to see my sister Cleo<br>" +
            "She's a terror make no error<br>" +
            "But there ain't no nicer terror<br>" +
            "Here's what we tell her<br>" +
            "Lay that pistol down, babe<br>" +
            "Lay that pistol down<br>" +
            "Pistol packing mama<br>" +
            "Lay that pistol down<br>" +
            "Pappy made a batch of corn<br>" +
            "The revenuers came<br>" +
            "The drought was slow<br>" +
            "So now they know<br>" +
            "You can't do that to Mame<br>" +
            "Oh, lay that pistol down, babe<br>" +
            "Lay that pistol down<br>" +
            "Pistol packing mama<br>" +
            "Lay that pistol down<br>" +
            "Oh, singing songs in a cabaret<br>" +
            "Was I having fun<br>" +
            "Until one night it didn't seem right<br>" +
            "And now I'm on the run<br>" +
            "Oh, lay that pistol down, babe<br>" +
            "Lay that pistol down<br>" +
            "Pistol packing mama<br>" +
            "Lay that pistol down<br>" +
            "Oh, pistol packing mama<br>" +
            "Lay that pistol down",
        "main_article":{
            "title": "DUNKIRK' GERMANS HIDE IN BEACH CAVES",
            "subtitle": "'No Italians' is evacuation order",
            "author":"From ALAN MOOREHEAD: Near Catania, Thursday",
            "bold": "The German evacuation of Sicily has begun in earnest. At the rate of a thousand a day the enemy troops are crossing to the Italian mainland.",
            "semibold": "While a rearguard fights on viciously along the Etna Line the panzer troops are pouring down to the beaches. There they wait in the rock caves for their turn to embark on the most dangerous journey in the world.",
            "medium": "Many are tired and broken to the pitch of human endurance. But there is no rout, no disorder. As far as possible they are getting away on a set plan.",
            "regular": "They are, however, hungry, thirsty, dusty and beaten. Every enemy unit is drastically reduced. Battalions are down to the strength of companies, and companies are little more than platoons." +
                "<br>&emsp;The Germans are using two stretches of beach from which to escape." +
                "<br>&emsp;One stretch runs along the north coast to the tip of the island. On this route, they have the advantage of dispersal, but no A.A. cover.",
        },
        "right_article":{
            "title": "Italy sends Britons to Germany",
            "subtitle": "2,500 IN CAMP NEAR BERLIN",
            "author": "Express Staff Report ERNEST ASHWICK",
            "bold": "GENEVA, Thursday.--British war prisoners in Italy are being transferred to German prison camps, according to information reaching the International War Prisoners' Agency in Geneva.",
            "regular": "Two thousand five hundred are reported to have arrived at Stalag IV., and other transfers are being arranged." +
                "<br>&emsp;There are three Stalag IV camps, all near Berlin.<br>&emsp;Stalag IV. A. is 40 miles from the capital. Stalag IV. B. is 60.",
        },
        "article_1":{
            "title": "SWEDES FIRE ON NAZI PLANES",
            "regular": "STOCKHOLM, Thursday. Swedish A.A. guns and war planes fired today on German land near Karlskrona, Swedish military base.--B.U.P",
        },
        "article_2":{
            "title": "20,000 AIRCRAFT STRIKERS RETURN",
            "regular":  "OTTAWA, Thursday.--The officials announce that Montreal aircraft workers were struck ten days ago.",
        },
        "right_sub_article":{
            "title": "THE MAN WITH A BAYONET",
            "author": "Lord Lyell, V.C.",
            "regular": "ON the foothills of Bou Arada, at the height of the fighting in Central Tunisia, one man faced an 88mm, German gun. He had a bayonet." +
                "<br>&emsp;Lord Lyell, of Kinnordy, Angus, Lieutenant (temporary captain) in the Scots Guards, attacked and silenced the gun. He died, but his company went on. And so he won the Victoria Cross." +
                "<br>&emsp;It is the first of this war's V.C.s to be awarded to a peer--a peer whose family motto is : \"To the brave\"" +
                "<br>&emsp;The posthumous award was announced last night. This was the story the announcement told:--" +
                "<br>&emsp;At about 6p.m. on April 27 Captain Lord Lyell's company, attacking Bou Arada, was held up in the foothills by heavy fire from an 88mm gun and a heavy machine gun in separate pits.",
        },
        "left_sub_article":{
            "title": "THE LAST BULWARK ISOLATED",
            "author": "From HENRY BUCKLEY",
            "regular": "NORTH AFRICA H.Q., Thursday.--Events are moving fast now in Sicily. The German bulwark town of Randazzo is under fire from American light artillery--and it is being outflanked from the north and the east." +
                "<br>&emsp;On the northern coast the Americans stepped up the disintegration of the enemy's last Etna line by landing troops at the mouth of the River Naso, near Cape Orlando." +
                "<br>&emsp;These troops held their ground until the main American forces advanced from San Marco d'Alunzio, about seven miles further back, and made contact with them. Now the Americans have cut the road from the coast to Randazzo." +
                "<br>&emsp;At the same time Eighth Army forces are moving forward towards the road junction at Diana-Botteghelle on the east coast. The chief road from Randazzo to the east goes to this town.",
        },
        "left_sub_article_2":{
            "title": "Winston leaves to meet F.D.R.",
            "author": "From NEWELL ROGERS",
            "regular": "NEW YORK, Thursday--Mr. Churchill and Mr. Roosevelt have vanished.<br>&emsp;The only clue to their movements is the statement that Mr. Churchill, after visiting Niagara Falls today, left for an \"un-announced destination.\"" +
                "<br>&emsp;That, too, may be the destination of President Roosevelt.<br>&emsp;Reports from Quebec--where the Premier left the staff chiefs in session--did not disclose time or place of the meeting, beyond suggesting that it was in the United States." +
                "<br>&emsp;For perhaps as long as three days we are not going to hear much about the two statesmen." +
                "<br>&emsp;But it is likely that new moves designed to take full and early advantage of Russian pressure on the Germans will be fashioned.",
        }
    },
    {
        "song": "Anything Goes",
        "artist": "Cole Porter",
        "quote": "“I get no kick from champagne. Mere alcohol doesn't thrill me at all. So, tell me why should it be true, that I get a kick out of you?”",
        "artist_desc":"Cole Albert Porter (June 9, 1891 – October 15, 1964) was an American composer and songwriter. Many of his songs became standards noted for their witty, urbane lyrics, and many of his scores found success on Broadway and in film.<br>" +
            "<br>&emsp;Born to a wealthy family in Indiana, Porter defied his grandfather's wishes for him to practice law and took up music as a profession. Classically trained, he was drawn to musical theatre. After a slow start, he began to achieve success in the 1920s, and by the 1930s he was one of the major songwriters for the Broadway musical stage. Unlike many successful Broadway composers, Porter wrote the lyrics as well as the music for his songs. After a serious horseback riding accident in 1937, Porter was left disabled and in constant pain, but he continued to work. His shows of the early 1940s did not contain the lasting hits of his best work of the 1920s and 1930s, but in 1948 he made a triumphant comeback with his most successful musical, Kiss Me, Kate. It won the first Tony Award for Best Musical.",
        "image":"https://upload.wikimedia.org/wikipedia/commons/4/4c/Coleporter.jpg",
        "year": "Thursday April 19 1934",
        "label": "Broadway Production",
        "fact": ["In May 2007, a star on the Hollywood Walk of Fame was dedicated to Porter.","An obituary notice in The New York Times stated that, while in the Legion in WWI, \"he had a specially constructed portable piano made for him so that he could carry it on his back and entertain the troops in their bivouacs.\"", "Porter wrote 300 songs while at Yale, including student songs such as the football fight songs \"Bulldog\" and \"Bingo Eli Yale\" (aka \"Bingo, That's The Lingo!\") that are still played at Yale."],
        "description": "\"Anything Goes\" is a song written by Cole Porter for his musical of the same name. (1934). Many of the lyrics include humorous references to figures of scandal and gossip from Depression-era high society. <br> A recording by Paul Whiteman and his Orchestra (vocal by Ramona Davies) was very popular in 1934.",
        "lyrics" : "Times have changed<br>" +
            "And we've often rewound the clock<br>" +
            "Since the Puritans got a shock<br>" +
            "When they landed on Plymouth Rock<br>" +
            "If today, any shock they should try to stem<br>" +
            "'Stead of landing on Plymouth Rock<br>" +
            "Plymouth Rock would land on them<br>" +
            "In olden days, a glimpse of stocking<br>" +
            "Was looked on as something shocking<br>" +
            "But now, God knows anything goes<br>" +
            "Good authors too who once knew better words<br>" +
            "Now only use four-letter words<br>" +
            "Writing prose<br>" +
            "Anything goes<br>" +
            "If driving fast cars you like<br>" +
            "If low bars you like<br>" +
            "If old hymns you like<br>" +
            "If bare limbs you like<br>" +
            "If Mae West you like<br>" +
            "Or me undressed you like<br>" +
            "Why, nobody will oppose<br>" +
            "When every night the set that's smart<br>" +
            "Is intruding at nudist parties in studios<br>" +
            "Anything goes<br>" +
            "When the Missus Ned McLean, God bless her<br>" +
            "Can get Russian reds to yes her<br>" +
            "Then I suppose anything goes<br>" +
            "When Rockefeller still can hoard enough money<br>" +
            "To let Max Gordon produce his shows<br>" +
            "Anything goes<br>" +
            "The world has gone mad today<br>" +
            "And good's bad today<br>" +
            "And black's white today<br>" +
            "And day's night today<br>" +
            "And that gent today<br>" +
            "You gave a cent today<br>" +
            "Once had several chateaux<br>" +
            "When folks who still can ride in jitneys<br>" +
            "Find out Vanderbilts and Whitneys<br>" +
            "Lack baby clothes<br>" +
            "Anything goes<br>" +
            "When Sam Goldwyn can with great conviction<br>" +
            "Instruct Anna Sten in diction<br>" +
            "Then Nana shows<br>" +
            "Anything goes<br>" +
            "When you hear that Lady Mendl standing up<br>" +
            "Now does a handspring landing upon her toes<br>" +
            "Anything goes<br>" +
            "Just think of those shocks you've got<br>" +
            "And those knocks you've got<br>" +
            "And those blues you've got<br>" +
            "From those news you've got<br>" +
            "And those pains you've got<br>" +
            "If any brains you've got<br>" +
            "From those little radios<br>" +
            "So Missus R, with all her trimmin's<br>" +
            "Can broadcast abed from Simmons<br>" +
            "'Cause Franklin knows<br>" +
            "Anything goes",
        "main_article":{
            "title": "FRANCE DENOUNCES GERMAN ARMING",
            "subtitle": "Last Night's White Paper Reveals \"Menace\" Note",
            "author":"STORM TROOP LEADER WARNS FRANCE",
            "bold": "THE GERMAN GOVERNMENT INTENDS TO INCREASE IMMEDIATELY ON A FORMIDABLE SCALE NOT ONLY THE STRENGTH OF ITS ARMY, BUT ALSO OF ITS NAVY AND OF ITS AVIATION...THE NEIGHBOURS OF GERMANY CANNOT DISREGARD THE MENACE THAT HANGS OVER THEM.",
            "semibold": "<br>&emsp;Sounding this note of alarm, the French Government, in its latest communication to Britain on disarmament (published last night), proclaims the failure of the direct negotiations in which the European diplomats have been engaged for the past two months.",
            "medium": "<br>&emsp;The French Note accuses Germany of building numerous aerodromes in the demilitarised more and of perfecting her \"paramilitary organizations as an instrument well suited for war.\"",
            "regular": "<br>&emsp;The leader of one of these \"para-military organizations\"--Captain Roehm, commander of the 3,000,000 Nazi storm troops, delivered a sharp warning to France last night in a speech to foreign diplomats in Berlin." +
                "<br>&emsp;\"Any invasion from the other side of the frontier,\" he declared, \"will find not only the army, but the whole people to the last man, ready passionately and fanatically to defend their country.",
        },
        "right_article":{
            "title": "THREE MEN DIE IN GAS WAVE",
            "subtitle": "CHEMICAL WORKERS TRAPPED BY FUMES STAMPEDE FOR SAFETY",
            "author": "\"Daily Express\" Correspondent.",
            "bold": "THREE men were killed and ten seriously injured when a sudden escape of ammonia gas trapped a party of workmen this afternoon at the Billingham-on-Tees works of Imperial Chemical Industries, Ltd.",
            "regular": "On the same day it was learned that this factory a race to produce \"heavy water\", the latest scientific marvel, had been won for Britain." +
                "<br>&emsp;This afternoon 100 men were working on a new ammonia refrigerating plant on a platform some distance from the ground." +
                "<br>&emsp;Without warning a wave of gas engulfed the men." +
                "<br>&emsp;There was an immediate stampede. Many of the men made dangerous leaps to safety, and some were hurt in the fall." +
                "<br>&emsp;Medical men and ambulance workers were quickly on the scene. By means of artifical respiration, oxygen, and other means ten of the gassed men were sufficiently restored to be removed to the Stockton and Middlesbrough Hospital.",
        },
        "article_1":{
            "title": "CONNIE EDISS SINGS--THEN DIES",
            "regular": "Connie Ediss, the great low comedy actress, who cockney humour was to musical comedy and the legitimate stage what Marie Lloyd's was to the music hall, is dead. She died in Brighton last night at the age of sixty-two.",
        },
        "article_2":{
            "title": "NEGOTIATIONS VAIN",
            "regular":  "The latest French Note (published in a White paper last night) begins by calling attention to the increase of 27,000,000 pounds in the German army, navy, and air estimates, and assets that the explanations which Britain received from berlin regarding this increase were less justification than a confirmation of the concern felt by both Britain and France." +
                "<br>&emsp;In reality, the German Government, without awaiting the results of the negotiations which were in progress, has wished to impose its own terms.",
        },
        "right_sub_article":{
            "title": "WILL IT BE  A BOY OR A GIRL?",
            "author": "Special to the Daily Express<br>by our Science Correspondent",
            "regular": "TWO brothers, both young London doctors, are working on a theory of sex-determination which apparently proves that at last it is possible to produce a male or a female child at choice." +
                "<br>&emsp;Since they began their work moe than a year ago they have not had one failure, and every prospective mother under their treatment has given birth to a child of the sex of her choice." +
                "<br>&emsp;The doctors apply the theory that sex is determined by a certain physical condition in the woman before the unborn child begins to grow." +
                "<br>&emsp;It was first put forward in Germany, where it was accidentally discovered that a certain alkaline state in the mothers always produced boys." +
                "<br>&emsp;Research along these lines has been carried out in Germany, but the two London doctors are making a more intensive study of the theory, and they have hiterto been succesful with all their patients." +
                "<br>&emsp;All but one asked for boys. The one who request a daughter got her. " +
                "<br>&emsp;An interesting point is that it is easier to produce boys than girls by this method of gender-determination." +
                "<br>&emsp;As these two men are the only research workers in England known to be applying the theory in exactly this way, they have no means of comparing their results with other workers along similar lines, but they believe their method is the right one." +
                "<br>&emsp;There cannot, however, be conclusive proof till thousands of cases have been correctly determined, and there has not yet been time enough for that.",
        },
        "left_sub_article":{
            "title": "RISK OF ATTACK ON GERMANY",
            "author": "Daily Express Correspondent",
            "regular": "BERLIN, Wednesday.&emsp;The British Ambassador, Sir Eric Phipps and other members of the Diplomatic Corps attended a reception today at which Captain Ernst Roehm, commander of the Nazi storm troops, delievered a s harp warning to France." +
                "<br>&emsp;Any invitation from the other side of the frontier will find not only the army, but the whole people to the last man ready passionately and fantatically to defend their country.",
        },
        "left_sub_article_2":{
            "title": "Do You Want To Learn To Fly?",
            "author": "Daily Express Correspondent",
            "regular": "The Daily Express, which has always been foremost in the development of flying, is once more gibing its readers an opportunity of qualifying as air pilots. " +
                "<br>&emsp;Arrangements have been completed with leading flyings clubs and schools in many parts of the countr to provide training." +
                "<br>&emsp;This scheme has been devised because of the realisation of the importance of flying in the future." +
                "<br>&emsp;The fully-trained man of tomorrow will have to be an air pilot. Flying will be as essential as a knowledge of motor-car driving is today." +
                "<br>&emsp;Today the Daily Express offers its readers a second course of training by experience instructors." +
                "<br>&emsp;GRants will be made at every aerodrome at which the training is undertaken." +
                "<br>&emsp;Full details and rules of entry appear on Page Eight.",
        }
    },
    {
        "song": "Into Each Life Some Rain Must Fall",
        "artist": "Ella Fitzgerald",
        "quote": "\"Just don’t give up trying to do what you really want to do. Where there is love and inspiration, I don’t think you can go wrong.\"",
        "artist_desc": "Ella Jane Fitzgerald (April 25, 1917 – June 15, 1996) was an American jazz singer, sometimes referred to as the \"First Lady of Song\", \"Queen of Jazz\", and \"Lady Ella\". She was noted for her purity of tone, impeccable diction, phrasing, timing, intonation, and a \"horn-like\" improvisational ability, particularly in her scat singing.<br>" +
            "<br>&emsp;After a tumultuous adolescence, Fitzgerald found stability in musical success with the Chick Webb Orchestra, performing across the country but most often associated with the Savoy Ballroom in Harlem. Her rendition of the nursery rhyme \"A-Tisket, A-Tasket\" helped boost both her and Webb to national fame. After taking over the band when Webb died, Fitzgerald left it behind in 1942 to start her solo career. Her manager was Moe Gale, co-founder of the Savoy, until she turned the rest of her career over to Norman Granz, who founded Verve Records to produce new records by Fitzgerald. With Verve she recorded some of her more widely noted works, particularly her interpretations of the Great American Songbook.",
        "image" : "https://upload.wikimedia.org/wikipedia/commons/6/65/Ella_Fitzgerald_1962.JPG",
        "year": "1944",
        "label": "Decca Records",
        "fact": ["Fitzgerald won 13 Grammy Awards,[79] and received the Grammy Lifetime Achievement Award in 1967.", "In 1958 Fitzgerald became the first African-American female to win at the inaugural show.", "On January 9, 2007, the United States Postal Service announced that Fitzgerald would be honored with her own postage stamp."],
        "description":"\"Into Each Life Some Rain Must Fall\" is a 1944 song performed as a duet by The Ink Spots, featuring Bill Kenny, and Ella Fitzgerald. Their recording was made on August 30, 1944 for Decca Records (catalog No. 23356B). The song was written by Allan Roberts (lyrics) and Doris Fisher (melody). The name of the song originates from a quotation of Henry Wadsworth Longfellow from the poem \"Rainy Day\". The song has also been included in the soundtrack for several videogames." +
            "<br>&emsp;The successful single went to number one on both The Harlem Hit Parade and the pop chart.",
        "lyrics": "",
    },
    {
        "song": "A Little Bird Told me",
        "artist": "Evelyn Knight",
        "year": "1948",
        "label": "Decca Records",
    },
    {
        "song": "I've Heard That Song Before",
        "artist": "Helen Forrest",
        "year": "1943",
        "label": "Columbia 36668",
    },
    {
        "song": "Maybe",
        "artist": "The Ink Spots",
        "year": "1940",
        "label": "Decca Records",
    },
    {
        "song": "Personality",
        "artist": "Johnny Mercer",
        "year": "1946",
        "label": "Capitol Records",
    },
    {
        "song": "Worry, Worry, Worry",
        "artist": "The Three Suns",
        "year": "1948",
        "label": "RCA Victor Records",
    }

]



// Setting info based on initial song
function setNews(){
document.getElementById("song").innerHTML = "'" + song_list[value].song + "'";
document.getElementById("artist").innerHTML = song_list[value].artist;
document.getElementById("date").innerHTML = song_list[value].year;
document.getElementById("artist2").innerHTML = song_list[value].artist;
document.getElementById("portrait").src = song_list[value].image;
document.getElementById("description").innerHTML = song_list[value].description;
document.getElementById("fact1").innerHTML = song_list[value].fact[0];
document.getElementById("fact2").innerHTML = song_list[value].fact[1];
document.getElementById("fact3").innerHTML = song_list[value].fact[2];
document.getElementById("artist-desc").innerHTML = song_list[value].artist_desc;
document.getElementById("quote").innerHTML = song_list[value].quote;
document.getElementById("RA-title").innerHTML = song_list[value].right_article.title;
document.getElementById("RA-subtitle").innerHTML = song_list[value].right_article.subtitle;
document.getElementById("RA-author").innerHTML = song_list[value].right_article.author;
document.getElementById("RA-bold").innerHTML = song_list[value].right_article.bold;
document.getElementById("RA-regular").innerHTML = song_list[value].right_article.regular;
document.getElementById("RAS-title").innerHTML = song_list[value].right_sub_article.title;
document.getElementById("RAS-author").innerHTML = song_list[value].right_sub_article.author;
document.getElementById("RAS-regular").innerHTML = song_list[value].right_sub_article.regular;
document.getElementById("A1-title").innerHTML = song_list[value].article_1.title;
document.getElementById("A1-regular").innerHTML = song_list[value].article_1.regular;
document.getElementById("A2-title").innerHTML = song_list[value].article_2.title;
document.getElementById("A2-regular").innerHTML = song_list[value].article_2.regular;
document.getElementById("MA-title").innerHTML = song_list[value].main_article.title;
document.getElementById("MA-subtitle").innerHTML = song_list[value].main_article.subtitle;
document.getElementById("MA-bold").innerHTML = song_list[value].main_article.bold;
document.getElementById("MA-semibold").innerHTML = song_list[value].main_article.semibold;
document.getElementById("MA-medium").innerHTML = song_list[value].main_article.medium;
document.getElementById("MA-regular").innerHTML = song_list[value].main_article.regular;
document.getElementById("MA-author").innerHTML = song_list[value].main_article.author;
document.getElementById("LAS-author").innerHTML = song_list[value].left_sub_article.author;
document.getElementById("LAS-title").innerHTML = song_list[value].left_sub_article.title;
document.getElementById("LAS-regular").innerHTML = song_list[value].left_sub_article.regular;
document.getElementById("LAS2-regular").innerHTML = song_list[value].left_sub_article_2.regular;
document.getElementById("LAS2-title").innerHTML = song_list[value].left_sub_article_2.title;
document.getElementById("LAS2-author").innerHTML = song_list[value].left_sub_article_2.author;
document.getElementById("lyrics").innerHTML = song_list[value].lyrics;
}

setNews()

function onRandolph(id){
    console.log("randolph")
    clickSound.play()
    document.getElementById(id).disabled = true;
    document.getElementById("one").disabled = false;
    let i = 0;
    const txt = 'Welcome back. Want to listen to some tunes?';

    function typeWriter() {
        typingSound.play()
        if (i < txt.length) {
            document.getElementById("text").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        else{
            typingSound.pause()
            typingSound.currentTime = 0;
        }
    }
    typeWriter()
}

function onDialogueBtns(id) {
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const text = document.getElementById("text");



    // If the user presses the first choice button
    if (id === "one") {
        console.log("one")
        // If the label says the closing message
        if (one.innerHTML === "Thanks.") {
            //one.style.opacity = "0";
            one.innerHTML = "Who are you anyway?";
            first = true;
            newText = "I'm Randolph, resident curator here at the Daily Express. I know everything about every artist that passes through these pages."
            clickSound.play()
        }
        // For all other labels
        else {
            text.innerHTML = '';
            let i = 0;
            typingSound.play()

            function typeWriter() {
                if (i < newText.length) {
                    document.getElementById("text").innerHTML += newText.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                } else {
                    typingSound.pause()
                }
            }

            typeWriter()

            if(one.innerHTML === "Oh I see. Thank you!"){
                one.disabled = true;
                newText = "Take a look around. You'll find today's paper matches the date of the song's release. Enjoy!";
            }

            if(!first){
                console.log("got here")
                one.innerHTML = "Thanks."
                one.disabled = false;
            }
            else{
                one.innerHTML = "Oh I see. Thank you!"
            }

            radio.disabled = false
        }
    }
}

function onRadio(id){
    if (value > 3){
        document.getElementById(String(value)).pause()
        for (let i = 0; i <= 4; i++){
           document.getElementById(String(i)).currentTime = 0;
        }
        value = 0;
        setNews()
    }

    console.log(value)
    // document.getElementById(id).style.filter = "saturate(50%)"
    let audio = document.getElementById(String(value));
    if(audio.paused){
        audio.play();
    }
    else{
        audio.pause();
        value += 1;
        audio = document.getElementById(String(value));
        audio.play();
        setNews()
    }
}

function onInfo(id){
    window.open("credits.html", '_blank').focus();


}