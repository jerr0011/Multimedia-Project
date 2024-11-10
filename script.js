const dialogueBox = document.getElementById('dialogue-box');
const dialogueText = document.getElementById('dialogue-text');
const choicesContainer = document.getElementById('choices-container');
const choice1Button = document.getElementById('choice1');
const choice2Button = document.getElementById('choice2');
const background = document.getElementById('background');
const johnSprite = document.getElementById('john-smith');
const crybabySprite = document.getElementById('crybaby');
const smittySprite = document.getElementById('smitty');
const angelineSprite = document.getElementById('angeline');
const paperOverlay = document.getElementById('paper-overlay');
const paperText = document.getElementById('paper-text');
const theManImage = document.getElementById('the-man');

let currentChapter = 1;
let killed = false;
let currentDialogueIndex = 0;

let chapter1 = [
  { text: "What a tiny apartment.", showJohn: true, bg: "images/Background/Bg1-5.png" },
  { text: "As I unlocked the door and opened it with a creak, I scanned the bare walls, taking in the faded wallpaper peeling at the corners, the empty shelves, the dust clinging to every surface.", hideAllCharacters: true, bg: "images/Background/Bg1-5.png" },
  { text: "So much for a gift,", showJohn: true, bg: "images/Background/Bg1-5.png" },
  { text: "I muttered to myself grumpily. My father mentioned that he had bought a place for me as a gift. To take my mind off things he said.", hideAllCharacters: true, bg: "images/Background/Bg1-5.png" },
  { text: "I tried giving him a call, but the tone rang on and on and no one answered. I knew he didn’t like me. To him, I was just a failure. Now that mom was gone, he could finally disappear from my life, and mine from his.", hideAllCharacters: true, bg: "images/Background/Bg1-5.png" },
  { text: "The next few days went by as drearily as the wallpaper of the four walls, but things began to happen around me.", hideAllCharacters: true, bg: "images/Background/Bg1-5.png" },
  { text: "I know I’m messy, but did I really leave so many scraps of paper around?", showJohn: true, bg: "images/Background/Bg1-5.png" },
  { text: "Some of it was gibberish, but some of it quite horrific. Words like “It’s coming” and “The Crooked Man” scrawled across crumpled paper or etched faintly into the dust of my room.", hideAllCharacters: true, bg: "images/Background/Bg1-5.png" },
  { text: "I attributed all these to my deteriorating mental state, until one night, the night when my digital clock from my university days read the 4th of April, midnight.", hideAllCharacters: true, bg: "images/Background/Bg1-5.png" },
  { text: "I was done. I had been done for a long time before this. I was truly just a failure.", hideAllCharacters: true, bg: "images/Background/Bg1-5.png" },
  { text: "The usual piece of paper by the bathroom sink, but this time it read...", hideAllCharacters: true, bg: "images/Items/paper1.png" },
  { text: "“What kind of poem is this…it’s so creepy…”", showJohn: true, bg: "images/Background/Bg6-8.png" },
  { text: "I threw it aside and washed my face, preparing myself for the decision I’ve made.", hideAllCharacters: true, bg: "images/Background/Bg6-8.png" },
  { text: "For a split second, I saw a creature…a thing in the mirror…right behind me.", hideAllCharacters: true, bg: "images/Background/Bg6-8.png", showTheMan: true },
  { text: "As I prepared the rope and roped it around the hook I had attached to the ceiling of the decaying room, the bell suddenly rang and I lost my footing. Ladder and human crashing down together.", hideAllCharacters: true, bg: "images/Background/Bg1-5.png" },
  { text: "“Ouch… if the rope was in place… what a way to go.”", showJohn: true, bg: "images/Background/Bg1-5.png" },
  { text: "Slightly thankful for the bell, I looked out of the peephole, seeing only a teenage girl.", showCrybabyDim: true, bg: "images/Background/Bg1-5.png" },
  { text: "“Who are you, what do you want at this ungodly hour?”", showJohn: true, showCrybabyDim: true, bg: "images/Background/Bg1-5.png" },
  { text: "I questioned her immediately after opening the door.", showJohnDim: true, showCrybabyDim: true, bg: "images/Background/Bg1-5.png" },
  { text: "“Hello mister, wow you look totally worse for wear, like you could use a lot of things and a shower is one of them.”", showJohnDim: true, showCrybaby: true, bg: "images/Background/Bg1-5.png" },
  { text: "The girl quickly chimed.", showJohnDim: true, showCrybabyDim: true, bg: "images/Background/Bg1-5.png" },
  { text: "“Get to the point”", showJohn: true, showCrybabyDim: true, bg: "images/Background/Bg1-5.png" },
  { text: "“Geez, you really aren’t any fun,”", showJohnDim: true, showCrybaby: true, bg: "images/Background/Bg1-5.png" },
  { text: "“I’m looking for a necklace.”", showJohnDim: true, showCrybaby: true, bg: "images/Background/Bg1-5.png" },
  { text: "“What’s it doing here?”", showJohn: true, showCrybabyDim: true, bg: "images/Background/Bg1-5.png" },
  { text: "“Well…I lived here before…and my boyfriend…”", showJohnDim: true, showCrybaby: true, bg: "images/Background/Bg1-5.png" },
  { text: "Her voice trailed off before she started sobbing.", showJohnDim: true, showCrybabyDim: true, bg: "images/Background/Bg1-5.png" },
  { text: "Choice 1", choices: ["Comfort her", "Wait for her to be done crying"], bg: "images/Background/Bg1-5.png", choiceHandler: handleChoice1 },
  { text: "This is currently PlaceHolder text.. will it actually work??", showJohn: false, bg: "images/Background/Bg1-5.png" }, //PLACEHOLDER coconut.jpg
  { text: "Through her tears and babbling, she explained that she broke up with her boyfriend and was just looking for the necklace she had lost. She sees the messy state of the room and implores me to help her search.", showJohnDim: true, showCrybabyDim: true, bg: "images/Background/Bg1-5.png" },
  { text: "Choice 2", choices: ["Help the girl look for it", "Turn her away"], bg: "images/Background/Bg1-5.png", choiceHandler: handleChoice2 },
  { text: "This is currently PlaceHolder text.. will it actually work??", showJohn: false, bg: "images/Background/Bg1-5.png" }, //PLACEHOLDER coconut.jpg
  { text: "After a while of searching, I find it in the drawer of my nightstand and hand it to her, and she tears up before bawling again.", showJohnDim: true, showCrybabyDim: true, bg: "images/Background/Bg1-5.png" },
  { text: "I nicknamed her Crybaby, not knowing her real name, and listened attentively to her.", showJohnDim: true, showCrybabyDim: true, bg: "images/Background/Bg1-5.png" },
  { text: "“My boyfriend left me because I was such a crybaby, I was always too emotional and sensitive. Even now, after he left, I’m still stuck here crying even though he probably has moved on! I hate how I’m always crying!”", showJohnDim: true, showCrybaby: true, bg: "images/Background/Bg1-5.png" },
  { text: "Choice 3", choices: ["Tell her to be brave", "Tell her it is okay to cry"], bg: "images/Background/Bg1-5.png", choiceHandler: handleChoice3 },
  { text: "This is currently PlaceHolder text.. will it actually work??", showJohn: false, bg: "images/Background/Bg1-5.png" }, //PLACEHOLDER coconut.jpg
  { text: "“Such a crybaby. Everything in life can be solved as long as you think about it carefully. There is nothing that crying can solve, if he has moved on, so should you. You need to be brave in life!”", showJohn: true, showCrybabyDim: true, bg: "images/Background/Bg1-5.png" },
  { text: "The door creaks open, revealing a figure with a bent neck, so bent that the top of its head almost reached its shoulders. In the flash, it grabbed Crybaby, and before she could utter another word, the door slammed shut. I tried knocking down the door, but it would not budge. All I could hear was the shrill screaming and crying of a girl, then it all went silent. I shook myself from my shock and saw the letter on the floor, picking it up before the door creaks open again.", hideAllCharacters: true, showTheMan: true, flashRed: true },
  { text: "I ran as fast as my legs could take me, away from my apartment, away from the monster, but towards the place mentioned in the letter. My old university.", hideAllCharacters: true, bg: "images/Background/Bg1-5.png", endgame:true},
  { text: "“You’re right. It’s alright to cry. I wish he was half as understanding as you. You woke me up from my daze. Haha…what’s with that nickname…thank you for that! I’ll never forget you!”", showJohn: true, showCrybabyDim: true, bg: "images/Background/Bg1-5.png" },
  { text: "“You’re right. It’s alright to cry, but I’m glad someone as kind as you were able to tell me that. You woke me up from my daze. Haha…what’s with that nickname…thank you for that! I’ll never forget you!”", showJohnDim: true, showCrybaby: true, bg: "images/Background/Bg1-5.png" },
  { text: "Crybaby hands me a letter that she said she found under my bed and pecked me on the cheek before leaving. The door suddenly creaks open, revealing a figure with a bent neck, so bent that the top of its head almost reached its shoulders, with a smile equally as malevolent as its presence. I gripped the letter so tightly that my knuckles turned white.", hideAllCharacters: true, showTheMan: true, darkenBg: true },
  { text: "I ran as fast as my legs could take me, away from my apartment, away from the monster, but towards the place mentioned in the letter. My old university.", hideAllCharacters: true, bg: "images/Background/Bg1-5.png" }
];
let chapter2 = [ 
  //INSERT INTO THIS HOLE SENPAI :3 
  { text: "Upon arriving, what greeted me was the sight of moonlight shining upon the broken windows of the once grand university.", hideAllCharacters: true, bg: "images/Background/school1.png" },
  { text: "I sighed as I squeezed through the small gap in the gate.", hideAllCharacters: true, bg: "images/Background/school1.png" },
  { text: "I looked behind me to see if the monster was still on my trail.", hideAllCharacters: true, bg: "images/Background/school1.png" },
  { text: "It was not there, but I had a sinking feeling that it would not give up that easily.", hideAllCharacters: true, bg: "images/Background/school1.png" },
  { text: "I went upstairs towards my old classroom, reminiscing about the lessons that I once had there.", hideAllCharacters: true, bg: "images/Background/school2.png" },
  { text: "All the studying I had done.", hideAllCharacters: true, bg: "images/Background/school2.png" },
  { text: "“All for naught…look where I am now.”", showJohn: true, bg: "images/Background/school2.png" },
  { text: "The broken windows leaked moonlight, and the tables were kept in a somewhat orderly fashion.", hideAllCharacters: true, bg: "images/Background/school2.png" },
  { text: "Writing on the blackboard was still there.", hideAllCharacters: true, bg: "images/Background/school2.png" },
  { text: "The musty stench of decaying wood seemed to stick to my skin.", hideAllCharacters: true, bg: "images/Background/school2.png" },
  { text: "I recall the endless hours of studying I had put in during my past tenure at the university, the endless toiling away and burning of the midnight oil.", hideAllCharacters: true, bg: "images/Background/school2.png" },
  { text: "“Some things just aren’t meant to be…”", showJohn: true, bg: "images/Background/school2.png" },
  { text: "“Who are you!”", hideAllCharacters: true, bg: "images/Background/school3.png" },
  { text: "I heard a voice cry out as I exited the classroom into the dark hallway.", hideAllCharacters: true, bg: "images/Background/school3.png" },
  { text: "I squinted my eyes as the figure moved closer…", hideAllCharacters: true, bg: "images/Background/school3.png"},
  { text: "Revealing a person that looked quite like me.", showSmittyDim: true, bg: "images/Background/school3.png" },
  { text: "“Huh…quite the looker aren’t you.”", showJohn: true, showSmittyDim: true, bg: "images/Background/school3.png" },
  { text: "The man was wearing a formal suit, almost as if he was preparing for a presentation of sorts, while holding a letter in his right hand.", showJohnDim: true, showSmittyDim: true, bg: "images/Background/school3.png" },
  { text: "The moonlight shined upon his visibly tired complexion and unkempt brown hair.", showJohnDim: true, showSmittyDim: true, bg: "images/Background/school3.png"},
  { text: "“Jesus…I thought I ran into a ghost…I’m Smitty, who are you? What are you doing here?”", showJohnDim: true, showSmitty: true, bg: "images/Background/school3.png" },
  { text: "Choice 4", choices: ["Tell him the Truth", "Lie that you are lost"], choiceHandler:handleChoice4}, //C4 [choice4 to tell him the truth or lie saying that he is lost]
  { text: "This is currently PlaceHolder text.. will it actually work??", showJohn: false, bg: "images/Background/school3.png" }, //PLACEHOLDER coconut.jpg
  { text: "“You really expect me to believe that…? It’s fine, you don’t seem like a dangerous person after all.”", showJohnDim: true, showSmitty: true, bg: "images/Background/school3.png" },
  { text: "“Well that’s my story, what about you?”", showJohn: true, showSmittyDim: true, bg: "images/Background/school3.png" },
  { text: "I could see him wince at the question and hesitate for a short moment.", showJohnDim: true, showSmittyDim: true, bg: "images/Background/school3.png" },
  { text: "“Just here to remember my past. I don't know why I even bothered. Three times I tried... three times I failed. Maybe I'm just not cut out for this.”", showJohnDim: true, showSmitty: true, bg: "images/Background/school3.png" },
  { text: "“Every time I tried to focus on my studies, I’d remember those hospital bills piling up. How could I even concentrate when my own mom was lying there, fighting for her life?”", showJohnDim: true, showSmitty: true, bg: "images/Background/school3.png" },
  { text: "“It feels like all this... this so-called ‘education’ was just a cruel joke. I'm not smart enough, not strong enough... I don’t know why I thought I could handle it.”", showJohnDim: true, showSmitty: true, bg: "images/Background/school3.png" },
  { text: "“It’s like the universe is telling me, ‘you’re not good enough, Smitty.’ And maybe… maybe it's right. Look at me, I’m still hanging onto the letter of rejection from ages ago…hoping and praying that it isn’t real…”", showJohnDim: true, showSmitty: true, bg: "images/Background/school3.png" },//[choice5 to say it was not a waste of time for him to be in university OR it might have been a waste of time] 
  { text: "“You should treasure your life more…”", showJohn: true, showSmittyDim: true, bg: "images/Background/school3.png" },
  { text: "Choice 5", choices: ["Tell him it is a waste of time", "Tell him it wasn't a waste of time"], choiceHandler: handleChoice5}, //[choice5 to say it was not a waste of time for him to be in university]
  { text: "This is currently PlaceHolder text.. will it actually work??", showJohn: false, bg: "images/Background/school3.png" }, //PLACEHOLDER coconut.jpg
  { text: "“I’m sure it wasn’t a complete waste of time, there has to be something you’ve learnt right? I’m sure you’re able to succeed in other aspects of life!”", showJohn: true, showSmittyDim: true, bg: "images/Background/school3.png" },
  { text: "“False optimism…I knew you were a liar, but damn you sure are bad at it. Everyone said the same thing…but look where I am now and where they are!”", showJohnDim: true, showSmitty: true, bg: "images/Background/school3.png" },
  { text: "“I’m just a joke…still here reminiscing the past…I hate this…I hate reality…”", showJohnDim: true, showSmitty: true, bg: "images/Background/school3.png" },
  { text: "Smitty turns and walks away, dropping the letter on the ground.", hideAllCharacters: true, bg:"images/Background/school3.png" },
  { text: "But as he disappears from view, I suddenly hear him shouting loudly.", hideAllCharacters: true, bg:"images/Background/school3.png" },
  { text: "“What are you?! STAY AWAY!”", showJohnDim: true, showSmitty: true, bg: "images/Background/school3.png" },
  { text: "His screams echo throughout the empty school, as I instinctively pick up the letter he dropped and sprinted down the other stairs at the end of the other hallway.", hideAllCharacters: true, bg:"images/Background/school3.png" },
  { text: "I cursed it under my breath.", hideAllCharacters: true, bg:"images/Background/school3.png" },
  { text: "It was here again.", hideAllCharacters: true, bg:"images/Background/school3.png" },
  { text: "I took one quick glance at the letter that Smitty dropped.", hideAllCharacters: true, bg:"images/Background/school3.png" },
  { text: "It contained only two words - “COME HOME”, but I knew where I had to go as I accelerated my pace under the moonlight.", hideAllCharacters: true, bg:"images/Background/school3.png" ,fastforward1:true},
  { text: "This is currently PlaceHolder text.. will it actually work??", showJohn: false, bg: "images/Background/school3.png" }, //PLACEHOLDER coconut.jpg
  { text: "“Yeah…it may have been a waste of time. I’m sure there are other things that could have been done during that time. I know because I’m the same.”",showJohn: true, showSmittyDim: true, bg: "images/Background/school3.png"}, 
  { text: "“I spent my youth wasting my time even when I knew I couldn’t make it. I should have tried other things. I should have experimented with what I could do.”", showJohn: true, showSmittyDim: true, bg: "images/Background/school3.png" },
  { text: "“Maybe it’s not too late Smitty.”", showJohn: true, showSmittyDim: true, bg: "images/Background/school3.png" },
  { text: "Smitty manages a faint smile.", showJohnDim: true, showSmittyDim: true, bg: "images/Background/school3.png" },
  { text: "“Your advice is truly different, I guess we may be similar in that sense. Well, thank you for that. I don’t need to reminisce anymore.”", showJohnDim: true, showSmitty: true, bg: "images/Background/school3.png" },
  { text: "Smitty hands me the letter he was holding and bids me farewell.", showJohnDim: true, showSmittyDim: true, bg: "images/Background/school3.png" },
  { text: "I take one look at the letter, which had transformed into a piece of paper with the words “COME HOME”.", hideAllCharacters: true, bg:"images/Background/school3.png"},
  { text: "Hearing the monster groan, I catch a glimpse of it in the classroom.", hideAllCharacters: true, bg:"images/Background/school3.png" },
  { text: "With no time to rest, I sprinted down the stairs and out of the university, not once wondering where Smitty had disappeared to.", hideAllCharacters: true, bg:"images/Background/school3.png" },
  { text: "“The night is still young, it’s time to settle this.”", showJohn: true, bg:"images/Background/school3.png" }
];
let chapter3 = [
  { text: "The first light of dawn was beginning to break over the horizon, but otherwise it was still quite dim. The old street lamps provided little to no comfort of light in the dark street.", hideAllCharacters: true, bg: "images/Background/sadHouse.png" },
  { text: "I arrive at the entrance of my old house, musing to myself about how I quite missed this place after living in the middle of the four dull walls.", showJohn: true, bg: "images/Background/sadHouse.png" },
  { text: "I ring the doorbell out of habit, half-expecting and forgetting that my mother is now gone. I was hit with a wave of nostalgia as I wanted her to open the door to welcome me home again, but it was not to be.", hideAllCharacters: true, bg: "images/Background/sadHouse.png" },
  { text: "I wasn’t a tenant anymore, but a stranger ringing the bell of another stranger’s door.", showJohn: true, bg: "images/Background/sadHouse.png" },
  { text: "“What did I do that for…I must be going mad…”", showJohn: true, bg: "images/Background/sadHouse.png" },
  { text: "“I was just about to turn and accept whatever fate the monster had in store for me, if it was still on my tail, noting that quite some time had already passed.”", showJohn: true, bg: "images/Background/sadHouse.png" },
  { text: "To my surprise, a frail, middle-aged lady opens the door. She smiles warmly, her face gentle but weary.", showAngelineDim: true, bg: "images/Background/sadHouse.png" },
  { text: "“Well, what a surprise this early in the morning. I’m Angeline, and you are? How can I help you?”",showJohnDim:true , showAngeline: true, bg: "images/Background/sadHouse.png" },
  { text: "She looks at me curiously, then without waiting for an answer –", showJohnDim:true, showAngelineDim: true, bg: "images/Background/sadHouse.png" },
  { text: "“You look as though you’re on your last legs…if you don’t have a place to stay, you’re welcome here to rest.”", showJohnDim:true, showAngeline: true, bg: "images/Background/sadHouse.png" },
  { text: "“Thank you, but…I’m just here to find something. Or maybe…someone…I don’t know myself.”", showJohn: true, showAngelineDim:true, bg: "images/Background/sadHouse.png" },
  { text: "She tilts her head, her expression puzzled, but gestures me inside.", showJohnDim:true,showAngelineDim: true, bg: "images/Background/sadHouse.png" },
  { text: "I step into the house and was hit with immediate warmth from the hearth. I feel an immense rush of nostalgia.", hideAllCharacters: true, bg: "images/Background/iminyourwalls.png" },
  { text: "From the comfortable sofas, to the random books that no one ever seemed to read, everything looks exactly the way it did when I left.", hideAllCharacters: true, bg: "images/Background/iminyourwalls.png" },
  { text: "“It’s…it’s all the same. Nothing’s changed.”", showJohn: true, showAngelineDim:true, bg: "images/Background/iminyourwalls.png" },
  { text: "“So you’re the previous tenant of this place? I moved in almost immediately after you left. And as you can see, I’m in no position to change anything”", showJohnDim:true, showAngeline: true, bg: "images/Background/iminyourwalls.png" },
  { text: "She says as she gestures to her grey hair, but I could already tell from the way she hunched and hobbled around that she was no healthy mule.", showJohnDim:true, showAngelineDim: true, bg: "images/Background/iminyourwalls.png" },
  { text: "She pauses, studying my tired expression.", showJohnDim:true,showAngelineDim: true, bg: "images/Background/iminyourwalls.png" },
  { text: "“You look a little shaken. What have you been up to, if you don’t mind me asking?”", showJohnDim:true, showAngeline: true, bg: "images/Background/iminyourwalls.png" },
  { text: "Choice 6", choices: ["Explain about the monster", "Tell her about Crybaby and Smitty"], bg: "images/Background/iminyourwalls.png", choiceHandler: handleChoice6 },
  // Branching path based on Choice 6
  // CHOICE explain about the monster
  { text: "This is currently PlaceHolder text.. will it actually work??", showJohn: false, bg: "images/Background/school3.png" }, //PLACEHOLDER coconut.jpg
  { text: "“I…I know it sounds crazy, but I think something’s been chasing me. A monster. It sounds impossible, I know…”", showJohn: true, showAngelineDim:true, bg: "images/Background/iminyourwalls.png"},
  { text: "My stuttering did not help my case as Angeline laughed softly.", showJohnDim:true, showAngelineDim: true, bg: "images/Background/iminyourwalls.png"},
  { text: "“A monster? Sounds like you’ve had one too many drinks and ended up imagining things, young man.”", showJohnDim:true, showAngeline: true, bg: "images/Background/iminyourwalls.png" },
  { text: "Almost as if on cue to prove her wrong, the door bursts open, revealing the terrifying figure of the monster.", hideAllCharacters: true, showTheMan: true, bg: "images/Background/iminyourwalls.png" },
  { text: "Screams could only be heard, as everything falls silent once again.", hideAllCharacters: true, bg: "images/Background/iminyourwalls.png", endgame:true },
  { text: "This is currently PlaceHolder text.. will it actually work??", showJohn: false, bg: "images/Background/school3.png" }, //PLACEHOLDER coconut.jpg
  // CHOICE tell her about Crybaby and Smitty
  { text: "“I… well, it’s hard to explain. I met two people tonight. It feels like I’m reliving something… like my own life again…”", showJohn: true, showAngelineDim:true, bg: "images/Background/iminyourwalls.png", condition: "choice6 == 2" },
  { text: "I recounted the stories of Crybaby and Smitty to Angeline, as she listens quietly, her expression softening.", showJohnDim:true, showAngelineDim:true, bg: "images/Background/iminyourwalls.png", condition: "choice6 == 2" },
  { text: "“It sounds like you’ve had a long, difficult night. I’m not sure I believe in monsters, but I can tell you’ve been through a lot.”", showJohnDim:true, showAngeline: true, bg: "images/Background/iminyourwalls.png", condition: "choice6 == 2" },
  { text: "“Honestly, I don’t know if I believe it either…but everything was so real…and meeting them led me back here.”", showJohn: true, showAngelineDim:true, bg: "images/Background/iminyourwalls.png", condition: "choice6 == 2" },
  { text: "I showed her the two letters that I had kept from the previous two places. Angeline’s face grew thoughtful as she pondered for a moment.", showJohnDim:true, showAngelineDim:true, bg: "images/Background/iminyourwalls.png", condition: "choice6 == 2" },
  { text: "“Do you think those two people… were people you knew before?”", showJohnDim:true, showAngeline: true, bg: "images/Background/iminyourwalls.png", condition: "choice6 == 2" },
  { text: "“No… I’ve never met them a day in my life. But…I recognized things about them. Things that…remind me of myself.”", showJohn: true, showAngelineDim:true, bg: "images/Background/iminyourwalls.png", condition: "choice6 == 2" },
  { text: "“Then maybe it was meant to happen. Sometimes, fate brings us back to what we need to face. I’m sure you persuaded them the same way you would have persuaded yourself if the same situation happened to you.”", showJohnDim:true, showAngeline: true, bg: "images/Background/iminyourwalls.png", condition: "choice6 == 2" },

  { text: "Angeline touches my arm gently.", showJohnDim:true, showAngelineDim:true, bg: "images/Background/iminyourwalls.png" },
  { text: "“You’re welcome to stay here and rest. Maybe this place can give you the shelter you’re looking for.”", showJohnDim:true, showAngeline: true, bg: "images/Background/iminyourwalls.png", killedchoice:true  },
  { text: "Choice 7", choices: ["Accept her offer to stay", "Politely reject and leave"], bg: "images/Background/iminyourwalls.png", choiceHandler: handleChoice7},
  { text: "This is currently PlaceHolder text.. will it actually work??", showJohn: false, bg: "images/Background/school3.png" }, //PLACEHOLDER coconut.jpg

  // Branching path based on Choice 7
  // CHOICE accept her offer
  { text: "“I’ll take you up on that offer.”", showJohn: true, showAngelineDim:true, bg: "images/Background/iminyourwalls.png" },
  { text: "The door suddenly bursts open, revealing the Crooked Man as it steps inside. The door slams shut.", hideAllCharacters: true, showTheMan: true, bg: "images/Background/iminyourwalls.png", condition: "choice7 == 'accept'", endgame:true },

  // CHOICE politely reject and leave
  { text: "“Thank you, but…I think I know what I need to do now.”", showJohn: true, showAngelineDim:true, bg: "images/Background/iminyourwalls.png",   },
  { text: "Angeline smiles, her eyes filled with understanding.", showJohnDim:true, showAngelineDim:true, bg: "images/Background/iminyourwalls.png" },
  { text: "“It’s good that you know what to do now. I pray your life henceforth will be smooth-sailing.”", showJohnDim:true, showAngeline: true, bg: "images/Background/iminyourwalls.png" },
  { text: "Narration - I thanked her and bid her farewell, silently also bidding farewell to my old home, knowing I won’t visit this place again. I step back outside as the sun begins to rise.", hideAllCharacters: true, bg: "images/Background/imoutside.png" },
  { text: "I turn, and there standing on the front porch, is the Crooked Man, but now it appears it has no intent of attacking.", hideAllCharacters: true, bg: "images/Background/imoutside.png"},
  { text: "(voice steady) “I am not afraid of you anymore.”", showJohn: true, bg: "images/Background/imoutside.png" },
  { text: "As the first rays of sunlight touch the Crooked Man, his once solid form seems to become ephemeral and disintegrate, fading away into the morning light.", hideAllCharacters: true, bg: "images/Background/imoutside.png"}
];
let ending = [
  { text: "“Hey mom… I know it’s been a long time since I last visited… I couldn’t get over how I lost you so quickly to some stupid illness so I’ve been trying to find myself.”", hideAllCharacters: true, bg: "images/Background/grave.png" },
  { text: "(voice shaky) “I’m getting married next month. I have my life back on track. The company is starting to do well so I’ll be able to afford it.”", hideAllCharacters: true, bg: "images/Background/grave.png" },
  { text: "“I’ll bring you to a better place soon okay? Your own place. Love you Ma.”", hideAllCharacters: true, bg: "images/Background/grave.png" },
  { text: "As I recall the rhyme of the crooked man.", hideAllCharacters: true, bg: "images/Background/black_screen.png", },
  { text: "“There was a Crooked Man\nAnd he walked a Crooked Mile\nHe found a Crooked Sixpence upon a Crooked Stile”", hideAllCharacters: true, bg: "images/Background/black_screen.png", },
  { text: "“He bought a Crooked Cat\nWho caught a Crooked Mouse\nAnd they all lived together in a little Crooked House”", hideAllCharacters: true, bg: "images/Background/black_screen.png", },
  { text: "Everyone has their own Crooked Man haunting them.", hideAllCharacters: true, bg: "images/Background/black_screen.png", },
  { text: "I used to think the Crooked Man only stood for death.", hideAllCharacters: true, bg: "images/Background/black_screen.png", },
  { text: "But I think it represents an opportunity to change…to live…", hideAllCharacters: true, bg: "images/Background/black_screen.png", },
  { text: "Because I think in the end…", hideAllCharacters: true, bg: "images/Background/black_screen.png", },
  { text: "The Crooked Man was happy in his Crooked House.", hideAllCharacters: true, bg: "images/Background/black_screen.png", }
];


function updateVisuals(dialogue) {
  if (dialogue.hideAllCharacters) {
    johnSprite.style.display = 'none';
    crybabySprite.style.display = 'none';
    smittySprite.style.display = 'none';
    angelineSprite.style.display = 'none';
  } else {
    johnSprite.style.display = dialogue.showJohn || dialogue.showJohnDim ? 'block' : 'none';
    crybabySprite.style.display = dialogue.showCrybaby || dialogue.showCrybabyDim ? 'block' : 'none';
    johnSprite.style.opacity = dialogue.showJohn ? '1' : (dialogue.showJohnDim ? '0.5' : '0');
    crybabySprite.style.opacity = dialogue.showCrybaby ? '1' : (dialogue.showCrybabyDim ? '0.5' : '0');
    smittySprite.style.display = dialogue.showSmitty || dialogue.showSmittyDim ? 'block' : 'none';
    smittySprite.style.opacity = dialogue.showSmitty ? '1' : (dialogue.showSmittyDim ? '0.5' : '0');
    angelineSprite.style.display = dialogue.showAngeline || dialogue.showAngelineDim ? 'block' : 'none';
    angelineSprite.style.opacity = dialogue.showAngeline ? '1' : (dialogue.showAngelineDim ? '0.5' : '0');
  }
  background.src = dialogue.bg || background.src;
}

function handleChoices(dialogue) {
  if (dialogue.choices) {
    choicesContainer.style.display = 'flex';
    choice1Button.innerText = dialogue.choices[0];
    choice2Button.innerText = dialogue.choices[1];
    choice1Button.onclick = () => dialogue.choiceHandler(1);
    choice2Button.onclick = () => dialogue.choiceHandler(2);
  } else {
    choicesContainer.style.display = 'none';
  }
}

function handleEffects(dialogue) {

  if (dialogue.showTheMan) {
    theManImage.style.display = 'block';
    theManImage.style.opacity = '0.5';
  } else {
    theManImage.style.display = 'none';
  }

  if (dialogue.flashRed) {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => document.body.style.backgroundColor = 'black', 200);
  }

  if (dialogue.endgame) {
    currentDialogueIndex += 100;

  }

  if (dialogue.darkenBg) {
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  } else {
    document.body.style.backgroundColor = 'black';
  }
  if (dialogue.fastforward1){
    currentDialogueIndex += 10;
  }

  if (dialogue.killedchoice){
    if (!killed){
    chapter3[currentDialogueIndex+1].choices = ["Accept her offer to stay", "Politely reject and leave"];}
    else {chapter3[currentDialogueIndex+1].choices = ["Accept her offer to stay", "Accept her offer to stay"];}
  }
}

function handleChoice1(choice) {
  if (choice === 1) {
    currentDialogueIndex++;
  } else {
    currentDialogueIndex++;
  } 
  startDialogue();
}

function handleChoice2(choice) {
  console.log(currentDialogueIndex);
  if (choice === 1) {
    // User chooses to help the girl look for the necklace
    currentDialogueIndex++; // Move to the next dialogue
    startDialogue(); // Continue with the next dialogue
  } else {
    // User chooses to turn her away
    console.log(currentDialogueIndex);
    chapter1[29].text = "*Sniffling* You’re so mean, pretty please";
    // Display choices again to give the user another opportunity to choose
    currentDialogueIndex -= 2;
    startDialogue();

  }
}


// Crybaby death or live
function handleChoice3(choice) {
  if (choice === 1) {
    currentDialogueIndex++; // Skip to the dialogue related to being brave
    killed = true;
    console.log("crybaby dead");
  } else {
    currentDialogueIndex += 5;
  }
  startDialogue();
}

function handleChoice4(choice){
  currentDialogueIndex++;
  startDialogue2();
}

// Smitty death or live
function handleChoice5(choice) {
  if (choice === 2) {
    currentDialogueIndex++; 
    killed = true
    console.log("smitty dead");
  } else {
    currentDialogueIndex += 13; //Skips to truth portion
  }
  startDialogue2();
}

function handleChoice6(choice) {
  if (choice === 1) {
    currentDialogueIndex ++;
  } else {
    currentDialogueIndex += 7; 
  }
  startDialogue3();
}
function handleChoice7(choice) {
  if (!killed) {
    if (choice === 1) {
      currentDialogueIndex++; 
    } else {
      currentDialogueIndex += 4; 
    }
  }
  else {
    currentDialogueIndex++;
  }
  startDialogue3(); 
}

document.body.addEventListener('click', () => {
  if (choicesContainer.style.display === 'none') {
    currentDialogueIndex++;
    
    if (currentChapter === 1 && currentDialogueIndex >= chapter1.length) {
      currentChapter = 2;
      currentDialogueIndex = 0;
      startDialogue2();
    } else if (currentChapter === 2 && currentDialogueIndex >= chapter2.length) {
      currentChapter = 3;
      currentDialogueIndex = 0;
      startDialogue3();
    } else if (currentChapter === 3 && currentDialogueIndex >= chapter3.length) {
      if (killed) {
        // check for ded
        showAlternateEnding();
      } else {
        currentChapter = 'ending';
        currentDialogueIndex = 0;
        startEnding();
      }
    } else {
      if (currentChapter === 1) {
        startDialogue();
      } else if (currentChapter === 2) {
        startDialogue2();
      } else if (currentChapter === 3) {
        startDialogue3();
      } else if (currentChapter === 'ending' && !killed) {
        startEnding();
      }
    }
  }
});



function startDialogue() {
  const dialogue = chapter1[currentDialogueIndex];
  dialogueText.innerText = dialogue.text;
  updateVisuals(dialogue);
  handleChoices(dialogue);
  handleEffects(dialogue);
}

function startDialogue2() {
  const dialogue = chapter2[currentDialogueIndex];
  dialogueText.innerText = dialogue.text;
  updateVisuals(dialogue);
  handleChoices(dialogue);
  handleEffects(dialogue);
}
function startDialogue3() {
  const dialogue = chapter3[currentDialogueIndex];
  dialogueText.innerText = dialogue.text;
  updateVisuals(dialogue);
  handleChoices(dialogue);
  handleEffects(dialogue);
}

function startEnding() {
  const dialogue = ending[currentDialogueIndex];
  
  if (dialogue) {
    dialogueText.innerText = dialogue.text;
    updateVisuals(dialogue);
    handleEffects(dialogue);
  }
}

startDialogue();
