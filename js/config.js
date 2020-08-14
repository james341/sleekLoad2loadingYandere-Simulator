/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.08
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format 
(Put the files in the backgrounds/videos folder)*/
var l_background = "glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Put the files in the backgrounds/images folder)*/
var l_bgImages = [
	"image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much .ogg songs you want
(Put the files in the songs folder)*/
var l_musicPlaylist = [
	{youtube: "4e7sICeSDBQ", name: "Nations - Installation Music"},
	{youtube: "4e7sICeSDBQ", name: "Nations - Installation Music"},
        {youtube: "4e7sICeSDBQ", name: "Nations - Installation Music"},
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 18;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"Do not no-clip without being cloaked. It is annoying to see non-cloaked admins flying around the server and getting in the way, so just cloak yourself! It also breaks roleplay!",
	"Do not use this server to advertise other Discord servers or self-promote!",
	"If you have a hit on the mayor and there are cops blocking him they are KOS and not RDM 25 Invis and no collided cars are not Allowed!",
        "Disconnect, suicide, change jobs, Change names, Etc. to get out of a roleplay/staff situation. This will result in a harsher or additional punishment!",
        "Animatronics can KOS you from 12:00 am to 5:00 am in-game time They are allowed to kill you at this time since it is after closing if you are in the Restaurant!",
        "Follow the New Life Rule(NLR). If you don't know what it is, Scroll down on this page to the 'New Life Rule' section!",
        "Do not ask for staff, whitelists, etc. It gets annoying, you have to apply for staff and ask the job owner for a whitelist to the Job!", 
        "No spamming – Examples of spam include stretching words or numbers to Contain more characters than necessary!",
        "Animatronics can KOS you from 12:00 am to 5:00 am in-game time. - They are allowed to kill you at this time since it is after closing if you are in the Restaurant!",
        "Security Guard/Police Rules & Guidelines, This class cannot raid This class can own two-handed guns This class can own printers!",
        "Don't be a dick. Being this 'Edgy cool teenager' Won't get you far on this server. You will be banned. Toxicity is not Tolerated!",
        "Animatronics can KOS you from 12:00 am to 5:00 am in-game time. - They are allowed to kill you at this time since it is after closing if you are in the restaurant!",
        "Do not harass other users. - Do not follow around other users and annoy them after they told you repeatedly do, do not spam their PMs also.!",
        "Don't micspam - Jobs that are allowed to perform may play music through there mic just not excessivley!",
        "It's perfectly okay to offer constructive criticism for the game, but rude behavior and personal attacks will not be tolerated. If you are obviously only here to talk trash and start drama (or if you just have a nasty attitude / obnoxious personality in general) you will be removed from the server!",
        "Anyone caught baiting or encouraging others to violate rules will have an equal or greater punishment to the rule violation!",
        "KOS signs most are clearly placed at the entrance of a KOS area it must be sized and colored clearly any attempts to bait people into areas with obscure KOS signs will result in punishment from staff!",
        "Do not demote while the staff is online. If a staff member is online, report the rule-breaker like you normally would!",
        "DDoS or the Publicizing of other member's Private information (DOX) will result in a Permanent Ban. (This includes all hacking threats!",
        "You may not destroy your valuables in a raid to prevent them from being stolen. Leaving and then rejoining within 20 minutes to avoid printer loss and get them back is considered FailRP!",
        "Aadvertise kidnappings. You must kidnap one player every 5 minutes. Maximum hostage release fee amount is $150,00!",
        "Start raids within 30 seconds or more If adverting the raid. You cannot advert raid and then execute the raid 5 minutes later!",
        "Parties may advert PARTY then the action they are making ie( RAID, MUG, KIDNAP, ETC ) letting all party members participate in that action together. Anyone involved is Placed under cooldown for said action!",
        "Harassment or any type of abuse isn't tolerated here, this includes verbal abuse, Biased critique, and other types of abuse/harassment!",
        "Animatronics cannot exit the restaurant They cannot chase players outside the restaurant, but they can do /me grabs child before they leave the restaurant!",
        "Animatronics can KOS From 12:00 am to 5:00 am in-game time. - They are allowed to kill you at this time since it is after closing if you are in the Restaurant!",
        "Trapping of players in their base and or constructions Hitman may grant custom 10 second drop warnings to those carrying their hits!",
        "You should also Noted that, The majority of an account's activity be nothing more than spam, advertising, or some other form of disruptive behavior, admins reserve the right to give an infinite ban without warning as the account is clearly only here to be Disruptive!",
        "Don't speak or joke about DDOS or DOXING, even in role-play!",
        "Checkpoints can be raided to dismantle their purpose or for a valid RP reason. Only terrorists and custom jobs with PD raiding ability can raid checkpoints!",
        "You cant just trap people or Force anyone to pay a toll to exit an obstruction if you are not a Hostage taking class!",
        "Do not randomly Weapon check someone. (You must roleplay the situation to weapon check) (Being in the Guards Office is reason enough for a check!",
        "Respect everyone. No shit-talking (Swearing in /OOC), purposefully annoying people or Trolling!",
        "Fear RP is in effect - Respond to situations like you would in real life. For example, if someone pulls a gun on you and you are unarmed, you must follow their commands!",
        "If you threaten A DDoS attack on this server - This will result in a direct Permanant ban, jokeing or Not!",
        "If you insist on arguing about the age of the characters, you will be banned!",
        "No trap bases (like kill holes, drops where players can't escape), black bases (Black boxes, where someone's perception to the next entrance is hindered) or Maze bases!",
        "NLR any objections? (You may not demote players while staff are online, this does not apply to roleplay demotions Eg: Mayor demoting police officer for corruption!"

];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
