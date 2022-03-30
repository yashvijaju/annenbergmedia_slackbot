const { App, subtype } = require('@slack/bolt');
require('dotenv').config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: process.env.PORT || 3000
});

// Listens to incoming messages that mention the bot
app.event('app_mention', async ({ event, say }) => {
  const message = event.text.toLowerCase();
  let response = [];
  if (message.match(/hey|hi|hello|sup|yo|how you doin|what's up|what's cracking|how's it hanging|howzit|how are you/)) {
    response.push(`Howzit! I'm MC TechOps, here to help with any technology questions or issues you have in the Annenberg Media Center. Since I'm still learning it will really help if you log any mistakes I make on this Google doc: https://bit.ly/2TVsFXh {@ help}`)
  }
  if (message.match(/skype/)) {
    response.push(`Do you need help recording a Skype interview or importing one you've recorded into a Premiere Project? Ask me about Recording Skype Interview and Importing Skype Interview`)
  }
  if (message.match(/how to record skype call|recording skype|record skype/)) {
    response.push(`If you're doing a Skype call on your personal computer you can follow this guide: https://support.skype.com/en/faq/FA12395/how-do-i-record-my-skype-calls If you want to do a Skype call out of one of the Media Center studios talk to Tom or Sebastian and they'll get you set up.`)
  }
  if (message.match(/slack gif|add gif to slack|gif in slack|gif slack/)) {
    response.push(`To add a fun gif to your slack message type "/giphy" and then a word describing the content of the gif you want to include. Click "shuffle" until you see one you like, then click "Send."`)
  }
  if (message.match(/add skype interview|find skype interview|find studio clip|add studio recording|import video from FORK|import skype|importing skype interview|import video from fork|import video from Fork|import from fork|import from Fork|import from FORK/)) {
    response.push(
      {"attachments": [{"image_url": "https://i.imgur.com/iRcxVrF.jpg", "text": ""}], "text": `If you're trying import a video you recorded in one of our studios or add a Skype interview you recorded with Tom, you can use the Primestream panel. It's basically the same process you use to export a finished video in reverse. In your Premiere Project, Go to Window>Extensions>Primestream Adobe Panel. Login (user is atvn1, there is no password), and search for your video in this field.\n You can also find all the videos added to FORK today by clicking on the "Media Center Bins" dropdown, the "Today" dropdown, and clicking on the "Video" folder. \n Select the clip, click "Actions", and choose "Import from FORK." Once it's done importing, look in your Project window (where all your other clips are) for a folder called "Imported From Fork.' It will be inside.`})
  }
  if (message.match(/who are you|what are you|what is this?|what's this|what's this bot for/)) {
    response.push(`I'm a brand new bot to help out in the Media Center, so every time you use me it helps me improve. Ask me about anything tech in the Annenberg Media Center: making stories for ATVN, ARN, social and more!`)
  }
  if (message.match(/youtube music|music for social|royalty-free music|copyright free music|youtube songs|songs on youtube/)) {
    response.push(`If you need royalty-free music for a video, check out: https://www.youtube.com/audiolibrary/music`)
  }
  if (message.match(/help/)) {
    response.push(`How can I help you? Ask me about Video, Audio, Social, Other Media Center Tech!`)
  }
  if (message.match(/rap|rhyme|verse|flow/)) {
    response.push(`If A.P. style has got you zany, just jump on a chat with my friend Amy!
    - For an ARN or ATVN stress reducer, direct your questions to that day's producer.
    - Stymied starting on a story and need a fresh approach? There's no better partner than a friendly writing coach!
    - iNews and NewsBoss are a bit finicky, student producers and directors can boost your proficiency.
    - Students have access to cool stuff like studio time, just get trained, schedule a slot and you'll be feeling sublime!`)
  }
  if (message.match(/call graham/)) {
    response.push(`paging <@gcsteck>!`)
  }
  if (message.match(/who is [*] today?|who is producer|who is the editor|ATVN producer|ARN producer/)) {
    response.push({"attachments": [{"title_link": "https://docs.google.com/spreadsheets/d/1583hUjAFtTHDwVvYIxYPs9w6uZ0NQuQmSNPVl4NkVu4/edit?usp=sharing", "title": "Daily Schedule"}], "text": `Here's a Google Doc listing each day's student editors, directors and producers.`})
  }
  if (message.match(/video/)) {
    response.push(`What are you working on for video? Ask me about Video Editing, Video Exporting.`)
  }
  if (message.match(/editing|premiere|video editing|editing my video/)) {
    response.push(`Need help editing a segment? Always start by dragging all your footage from your SD card to a folder on Fork! {@ video editing}`)
  }
  if (message.match(/social|social video/)) {
    response.push({"attachments": [{"title_link": "http://bit.ly/annenbergtemplates", "title": "Social templates"},{"title_link": "http://resources.uscannenbergmedia.com/wp-content/uploads/2017/10/SocialVideoGuide-1.png", "title": "Handy one-page guide to doing social video"}], "text": `The URL for downloading all our social templates is:`})
  }
  if (message.match(/audio|sound|volume|gain|channels|loud|quiet/)) {
    response.push(`What kind of audio are you working with? Ask me about Audio in a Video, Standalone Audio.`)
  }
  if (message.match(/audio in a video/)) {
    response.push({"attachments": [{"title_link": "https://imgur.com/a/Vu9fStq", "title": "Here are screenshots of both steps"}], "text": `Use audio normalization (hotkey="g") to make your segment's audio the right volume. Normalize All Peaks to -6 db for SOTs (tracking, interviews or natural sound that you want audible) and -25 db for VOs (anything that should be quiet, in the background while a script is read on-air). \n If you recorded audio using a handheld mic plugged into a camcorder, change your audio channel settings (hotkey="shift+g") to get the left audio track playing in both channels.`})
  }
  if (message.match(/transitions|fade|fade to white|dissolve to white|white|dissolve|dip|dip to white|how to fade|how to cut between clips/)) {
    response.push(`To cut between clips of the same subject use a quick "Dip to White." \n In the Premiere effects window, select Video Transitions > Dissolve > Dip to White, and drag that icon to the correct transition in your sequence. Double click the transition to change its duration: ten frames (00;00;00;10) is a good length.`)
  }
  if (message.match(/green screen|blue screen|key|keying|ultra key|greenscreen|bluescreen|remove background|chroma-key|chroma|chromakey|chroma key|greenscreens|green screens/)) {
    response.push({"attachments": [{"title_link": "https://imgur.com/a/RygkVbv", "title": "Here are some screenshots of the process"}], "text": `To remove a green screen, use the Ultra Key effect. It's in the effects window, under Video Effects>Keying>Ultra Key. Drag the effect onto your clip, then open the Effect Control window. Click the eye-dropper tool in the key color section, and click somewhere on the green screen in your video preview. One last thing: change the Ultra Key setting from Default to Aggressive. \n Now anything you layer behind this clip will appear where the green screen once was.`})
  }
  if (message.match(/done|finished|complete|exporting|export|primestream|register|register to placeholder/)) {
    response.push(`{@ video exporting}`)
  }
  if (message.match(/CNN|cnn|CNN Newsource/)) {
    response.push(`To download clips from CNN, go to the CNN Newsource: https://newsource.ns.cnn.com Find the clip you need and click the download button. The video will be in the Downloads folder on your computer. Be sure to drag it into your project folder on FORK or it could get lost if the power goes out!`)
  }
  if (message.match(/placeholder|placeholders/)) {
    response.push(`Are you trying to make edit placeholders, or register a finished segment to a placeholder? Ask me about Edit Placeholder, Register to Placeholder`)
  }
  if (message.match(/video exporting/)) {
    response.push({"attachments": [{"title_link": "http://resources.uscannenbergmedia.com/2017/09/exporting-videos-for-newscasts/", "title": "Export segments"}], "text": `Here's how to export segments once you're done and have producer approval.`})
  }
  if (message.match(/inews|graphics|runs|ins|outs|script|i news|edit placeholders|edit placeholder/)) {
    response.push(`Need help working with iNews? {@ inews help}`)
  }
  if (message.match(/inews help/)) {
    response.push({"attachments": [{"title_link": "https://drive.google.com/file/d/0B_ojQ9GFYg9WVnhKaUVJOVQ1eFE/view", "title": "iNews for ATVN"}], "text": `Here's a rough guide on using iNews for ATVN.`})
  }
  if (message.match(/primestream|export password|primestream panel|primestream username|username/)) {
    response.push(`To access the Primestream Panel, enter the user "atvn1". There is no password.`)
  }
  if (message.match(/settings for audio|newsboss|standalone audio/)) {
    response.push({"attachments": [{"title_link": "http://resources.uscannenbergmedia.com/category/radio/", "title": "Audio Guide"}], "text": `Here's a rough guide to everything audio in the media center, from recording to editing to going live on air.`})
  }
  if (message.match(/audition|editing audio|editing audition/)) {
    response.push({"attachments": [{"title_link": "https://docs.google.com/document/d/1TkXPjvmuAV6Vy6HH4NJ5xOJ-tkrM2NTekGbisIcYEks/edit", "title": "Adobe Audition"}], "text": `Here's an in-depth guide to working with Adobe Audition.`})
  }
  if (message.match(/social template|downloading social template|downloading template|template not downloading|template/)) {
    response.push({"attachments": [{"title_link": "http://bit.ly/annenbergtemplates", "title": "Download social templates"},{"title_link": "https://i.imgur.com/2O492Jr.png", "title": "Here's a screengrab showing what I'm talking about."}], "text": `The URL for downloading all our social templates is: http://bit.ly/annenbergtemplates \n If the social template isn't downloading, try again and click "Leave" when asked if you want to leave the site.`})
  }
  if (message.match(/other media center tech/)) {
    response.push(`If you want to schedule studio time, tell me "reserve studio." Or you can ask me for help if you want to "check out equipment." \n And you can always grab a TechOps member like Sebastian, Victor, Graham, Bobby or Tom for help with any Media Center tech issues beyond my knowledge.`)
  }
  if (message.match(/locked out|door locked|doors locked/)) {
    response.push(`You're locked out? Sorry to hear that! If the Media Center should be open, send an email to Chuck, Victor, Sebastian or another member of the TechOps crew and they'll let you in.`)
  }
  if (message.match(/media center hours|hours|operating hours/)) {
    response.push(`The Media Center is open: \n Monday-Thursday 7:30 a.m. – 10:00 p.m. \n Friday 10:00 a.m. – 6:00 p.m.`)
  }
  if (message.match(/emergency|danger|safe|safety/)) {
    response.push(`If you are in danger call 911 \n To report an emergency call the USC Department of Public Safety  \n University Park campus: 213-740-4321  \n Health Sciences campus: 323-442-1000`)
  }
  if (message.match(/reserve a studio|reserve studio|studio reservation\studio reservations/)) {
    response.push({"attachments": [{"title_link": "http://resources.uscannenbergmedia.com/2016/10/studio-production-spaces/", "title": "Or here's a breakdown of all studio policies, including how to reserve studio time."}], "text": `Search for studio A, B, or C by asking me 'Studio <A>`})
  }
  if (message.match(/studio a/)) {
    response.push({"attachments": [{"title_link": "http://annenbergprograms.com/MCTechnicalGuidelines_2019.pdf#studioa", "title": "Reserve Studio A"}], "text": `Here's a link to the form for reserving Studio A`})
  }
  if (message.match(/studio b/)) {
    response.push({"attachments": [{"title_link": "http://annenbergprograms.com/MCTechnicalGuidelines_2019.pdf#studiob", "title": "Reserve Studio B"}], "text": `Here's a link to the form for reserving Studio B`})
  }
  if (message.match(/studio c/)) {
    response.push({"attachments": [{"title_link": "http://annenbergprograms.com/MCTechnicalGuidelines_2019.pdf#studioc", "title": "Reserve Studio C"}], "text": `Here's a link to the form for reserving Studio C`})
  }
  if (message.match(/fork|fork login/)) {
    response.push({"attachments": [{"title_link": "http://resources.uscannenbergmedia.com/2016/10/media-center-storage/", "title": "How to use FORK"}], "text": `Here's an overview on using FORK.`})
  }
  if (message.match(/camera|tripod|recorder|camcorder|check out microphone/)) {
    response.push(`Do you need to check out equipment? Ask me about the equipment room.`)
  }
  if (message.match(/equipment room|equipment|check out|check out equipment/)) {
    response.push(`The Equipment Assignment form is online: https://usc.qualtrics.com/jfe/form/SV_71cpQU7JxdGY233 \n Talk to Tim Yuge or a student worker in the Equipment Room in the basement of the Annenberg building if you need to know more. {@equipment room email}`)
  }
  if (message.match(/equipment room email|email equipment room/)) {
    response.push(`You can contact the equipment room at this email address: ascequip@usc.edu`)
  }
  if (message.match(/video editing/)) {
    response.push(`Here's a quick guide to editing ATVN segments: http://resources.uscannenbergmedia.com/2016/10/video-editing-procedures/ That covers a lot of the process but you can always ask Graham, Bobby or Tom for more help. \n {@ video exporting}`)
  }
  if (message.match(/password|passwords|login|log in/)) {
    response.push(`Here's a Media Center password cheatsheet: \n Mac Logins- User: McUser Password:@BreakingNews \n  \n Adobe Primestream Panel- Username:atvn1 Password:[no password] \n  \n iNews Web Client- user:inewsweb 1 Password:guest \n  \n CNN Newsource- User:usca Password:chore \n  \n The iNews and NewBoss software require your unique login that you created when you were trained.  \n  \n CNS- User: usctv Password: checkallday \n \n Trint- User: ascradio@usc.edu pw: AudioMC07`)
  }
  if (message.match(/cnn newsource|cnn password|newssource|cnn/)) {
    response.push(`CNN newsource login: \n  \n u: usca \n  \n p: chore`)
  }
  if (message.match(/cns/)) {
    response.push(`CNS login: \n  \n u: usctv \n  \n p: checkallday`)
  }
  if (message.match(/computer login|mcuser|mac login|log onto computer/)) {
    response.push(`To login to the Macs, click McUser and enter the password: "@BreakingNews"`)
  }
  if (message.match(/preset/)) {
    response.push(`Use the XDCAMHD_50_NTSC_60i.epr preset when you're registering an ATVN video to a placeholder. {@ video exporting}`)
  }
  if (message.match(/Who do I talk to pitch a story?/)) {
    response.push({"attachments": [{"title_link": "https://docs.google.com/spreadsheets/d/1583hUjAFtTHDwVvYIxYPs9w6uZ0NQuQmSNPVl4NkVu4/edit?usp=sharing", "title": "Google Doc listing each day's ATVN student editors, directors and producers."}], "text": `I'm working on developing a better list of all students' roles in the media center`})
  }if (message.match(/ticket|ticketing/)) {
    response.push(`Here's a link to submit a support ticket for Media Center help: http://resources.uscannenbergmedia.com/submit-ticket/`)
  }
  if (message.match(/How do I get reimbursed for Uber or Lyft|uber|lyft|reimbursement/)) {
    response.push(`To get reimbursed for a rideshare, first check with the day's Managing Editor to see if there is an Uber card available for checkout. \n If you've already taken the trip, you can be reimbursed by following these easy steps: \n Send an email to Rachel Gatus at rachelc1@usc.edu and cc christina.bellantoni@usc.edu In that email, provide the following information: \n \n Name: \n Personal Mailing Address: \n Purpose for Uber Ride (The slug of your story and your desk/editor): \n Then department of MC it's for: Digital/ARN/ATVN \n Copy of Uber receipt which must show the last four digits of the credit card used to pay for it. \n \n If you used your own vehicle to get to an assignment, you may be reimbursed for miles driven. \n Follow the same process as above except instead of sending an Uber receipt, send screenshots of the destinations on google maps/iPhone maps showing the mileage between locations/addresses (addresses will have to be shown and provided!) per driving trip to and from. \n \n If you live in a dorm or apartment with an apartment number in the address, make sure to include your apartment number with your address in your reimbursement email to Rachel and Christina. Lots of times that gets left out which can slow down the process. If not, I just want to check because apartment numbers getting left out of this process have caused a bunch of payments to be delayed.`)
  }
  if (message.match(/thank you|thanks|thank u|you're the best/)) {
    response.push({"attachments": [{"image_url": "https://media.giphy.com/media/kgKrO1A3JbWTK/giphy.gif", "text": ""}], "text": `You're welcome!`})
  }
  if (message.match(/can I delete|delete stuff|delete off fork|delete/)) {
    response.push({"attachments": [{"image_url": "https://media3.giphy.com/media/hFIkt5s7MrzI4/giphy.gif", "text": ""}], "text": `When it comes to other people's files and folders on FORK:`})
  }
  if (message.match(/annenberg media spring 2019|spring 2019|spring 19/)) {
    response.push({"attachments": [{"image_url": "https://i.imgur.com/lyPEdMk.jpg", "text": ""}], "text": `The Annenberg Media Center Spring 2019 class was unforgettable:`})
  }
  if (message.match(/favorite song/)) {
    response.push({"attachments": [{"image_url": "https://www.youtube.com/watch?v=74jS3dW0DtE", "text": ""}], "text": `I'm all about hip-hop, but for my favorite song I'd have to go with the MC5!`})
  }
  if (message.match(/annenberg media spring 2020|spring 2020|spring 20/)) {
    response.push({"attachments": [{"image_url": "http://resources.uscannenbergmedia.com/wp-content/uploads/2020/07/Spring-2020-Wrap-Party-Zoom.jpg", "text": ""}], "text": `The Annenberg Media Center Spring 2020 team triumphed over huge challenges:`})
  }
  if (message.match(/What is the conference call line?|conference call|phone line|conference|call in/)) {
    response.push(`Dial-in: (866) 528-2256 \n Participant Code: 4221182`)
  }
  if (message.match(/free la times|la times free|la times for free|LA Times login|LA times subscription|free los angeles times|los angeles times free|los angeles times for free|Los Angeles Times login|Los Angeles times subscription|free lat|lat free|la times for free|lat login|lat subscription|la times sub|LA times subscription|la times/)) {
    response.push({"attachments": [{"title_link": "https://checkout2.latimes.com/MTRDigitalSC?PID=6251", "title": "Free LA Times"}], "text": `Here's the link to get your free year of LA Times access.`})
  }
  if (message.match(/printing|print/)) {
    response.push(`You can print in black and white in the Digital Lounge upstairs. Or, to print scripts or copy for a story, you can print from the Media Center computers to iNews1 or iNews2 (the printers behind the stairs).`)
  }if (message.match(/ap photos|ap photo/)) {
    response.push(`Sorry, I can't share the ap photos password since we have a limited number of downloads every month. If you need a photo from AP Photos, talk to an editor and they can make sure it's included in our paid plan.`)
  }
  if (message.match(/exchange/)) {
    response.push(`Here's the url to login to Exchange: http://mcweb.usc.edu/clientcluster/xchange/xchange/user/`)
  }
  if (message.match(/Media Center shift exemptions|shift exemptions|missed shift|exemptions/)) {
    response.push(`Journalism majors are required to experience both the "live" and "community" sections of the Annenberg Media newsroom. \n The Media Center faculty has defined the short list of eligible student manager positions that can be exempted from the lab shift associated with JOUR206, which is the course taken in conjunction with JOUR207/JOUR307. They are: the Executive Editor, Managing Editors, Executive Producers and Radio Producers. The editors who work with text would be eligible to be exempted from “community,” and the editors who work with broadcast TV and radio would be eligible to be exempted from “live.” These students must still complete a shift (the four hours required for each of these classes) as a student manager, and will only be paid for hours that exceed the four hour-shift. \n We also give exemptions for the top 5 Daily Trojan editors.`)
  }
  if (message.match(/tech signups|tech policies|doors access|important technical guidelines and policies|technical guidelines and policies|tech guidelines and policies|tech guidelines|tech signup/)) {
    response.push({"attachments": [{"title_link": "https://uscannenberg.qualtrics.com/jfe/form/SV_1zSCe3wj5w9aocd", "title": "Media Center Tech Policies Form"}], "text": `Here's the url to complete the Media Center tech policies so you can check out equipment and get access to the media center after hours.`})
  }
  if (message.match(/contact|usc contact|usc info|finding email|find email|email contact/)) {
    response.push({"attachments": [{"title_link": "https://docs.google.com/spreadsheets/d/1a1cTWByt0WUcHfrEI0im5EuyZ28PsZgjbH_3FCPvmWQ/edit#gid=0", "title": "Annenberg Media's USC contact spreadsheet"}], "text": `You can use this contact list to find sources for stories about the university:`})
  }
  if (message.match(/social pitch/)) {
    response.push({"attachments": [{"title_link": "https://docs.google.com/forms/d/e/1FAIpQLSdYIfxl3Q0I87G4CqXUi996IN6vEuY3tER8nuJIjE2z_ZAJuw/viewform", "title": "Social team's pitch form"}], "text": `Fill this out and send it to a social team leader if you want to have a story promoted:`})
  }
  if (message.match(/slack/)) {
    response.push(`Need help with Slack? Check here first: http://resources.uscannenbergmedia.com/2016/08/basics-how-to-post-to-trello-and-slack/`)
  }
  if (message.match(/photo credit|caption style|photo caption|photo attribution|image attribution|image credit/)) {
    response.push(`If you're looking for a reminder on our photo credit style, it's like this. \n For photos taken by our staff: (Photo by _____) \n If the photographer is not with Annenberg Media: (Photo courtesy of ________)`)
  }
  if (message.match(/trint/)) {
    response.push(`Here's the Trint login:  \n https://trint.com/log-in  \n User: ascradio@usc.edu  \n pw: AudioMC07  \n If you need help using Trint check out this guide: http://resources.uscannenbergmedia.com/2020/09/how-to-use-trint/`)
  }
  if (message.match(/source tracking form|source form|source tracking/)) {
    response.push(`Here's the form to track information about the sources we use: https://docs.google.com/forms/d/e/1FAIpQLScUUsRT5y-5Wmnny8lJ8k5IGe-WgA5WHR1b2sSNjWSz_uhiRQ/viewform`)
  }
  for (const curr_message of response) {
    await say(curr_message)
  }
  if (response.length == 0) {
    await say({"attachments": [{"image_url": "https://i.imgur.com/iRcxVrF.jpg", "text": ""}], "text": "Sorry, I don't understand. Would you please write down what you're trying to do on this form: https://bit.ly/2TVsFXh so I can learn and be more useful in the future? \n Or can you rephrase the query?"})
  }
});

(async () => {
  // Start your app
  await app.start();

  console.log('⚡️ Bolt app is running!');
})();