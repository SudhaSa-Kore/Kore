// vivocha.$(window).ready(function() {
//     if (localStorage.korecom){
//         console.log("korecon exists")
//         vivocha.$('h1').click(function() {
//             bot.close();
//             console.log('h1 clicked');
//         })
//     }
//     else{
//         console.log("korecom does not exist")
//     }
// });


function user_left(){
    vivocha.service = '';
    vivocha.loadService();
  };
  
  function playChime() {
      vivocha.$(".vvcChime").trigger('play');
    };
    
    var vivocha_dissuasion = {
      "enabled": false
      , "use_weblead": false
      , "timeout": 30
    };
    
    var default_agent_id = "Capgemini";
    
    var vivocha_media_messages = {
      "brand": "Vivocha"
      , "brand-avatar-image": "images/avatar_default.png"
      , "brand-compact-logo": "images/logo_vivocha_compact.png"
      , "brand-copyright": "© Vivocha 2016"
      , "brand-logo-image": "images/logo_vivocha.png"
      , "cbn": "CallBack"
      , "chat": "Chat"
      , "video": "Video Chat"
      , "voip": "VoIP Call"
      , "weblead": "WebLead"
      , "accept": "Accept"
      , "agent_inline": "on the line with ${AGENTNAME}"
      , "agent_join": "${AGENTNAME} has joined the chat"
      , "agent_left": "${AGENTNAME} has left the chat"
      , "agent_nickname": "Agent"
      , "attachment_placeholder": "Insert your description for ${FILENAME} here"
      , "attachment_push": "Attachment:"
      , "connection_close": "connection terminated"
      , "decline": "Decline"
      , "description": "A simple chat client"
      , "dissuasion_message": "Sorry there are no available agents. Please try again later."
      , "error": "an error has occurred!"
      , "link_push": "has sent you a link:"
      , "media_title": "Vivocha"
      , "name": "Simple chat Client"
      , "new_message": "New Message:"
      , "only_audio": "Only voice"
      , "rejected": "${AGENTNAME} rejected your request"
      , "request_formsharing": "${AGENTNAME} wants to share your forms data"
      , "request_seamless_cobrowsing": "${AGENTNAME} wants to share your browsing session"
      , "screen_request": "${AGENTNAME} requested a screen-sharing session"
      , "send_button": "submit"
      , "transfer_failed_message": "Transfer Failed!"
      , "transfer_message": "You have been transferred to an agent..."
      , "upload_error": "Upload error"
      , "uploading_message": "Uploading ${FILENAME}"
      , "user_left": "You have left the chat."
      , "user_nickname": "Customer"
      , "video_request": "${AGENTNAME} requested to start a video call"
      , "voice_request": "${AGENTNAME} requested to start a voice call"
      , "wait_message": "We're connecting you with the first available operator ..."
      , "waiting_agent": "waiting for agent response"
      , "waiting_media": "waiting for the device"
    };
    
    // var availableTags = [
    //       "How to add a Mailbox to Outlook?",
    //       "How to disable sound reminder in Outlook?",
    //       "How to delete saved passwords in Internet Explorer?",
    //       "How to associate a file extension with a file type?",
    //       "How to set up auto save in Excel?",
    //       "How to add a new font to your computer?",
    //       "How to create a template in Microsoft Word?",
    //       "How to create a signature for Outlook messages?",
    //       "How to use Screen Tips?",
    //       "How to open a backup copy of a Word document?",
    //       "How to print a color PowerPoint presentation to black and white printer?",
    //       "How to synchronize iPhone with Exchange server?",
    //       "How to check spelling in Outlook?",
    //       "How to sort data in random order in Excel?",
    //       "How to delay the printing of documents in the print queue in Windows?",
    //       "How to Adjust The Speed Of My Mouse Pointer in Windows XP?",
    //       "How to merge cells in MS Excel?",
    //       "How to copy messages from one folder to another?",
    //       "PrintScreen button does not work?",
    //       "How to share notes from OneNote 2016 for Windows during a meeting?",
    //       "How to stop sharing a OneNote 2016 for Windows notebook on OneDrive?",
    //       "How to sync a notebook in OneNote 2016 for Windows?",
    //       "How to record laser mouse pointer movements in Power Point 2016?",
    //       "How to play music or other sounds automatically when a slide appears in Power Point 2016?",
    //       "How to see where others are working in shared presentation in Power Point 2016?",
    //       "How to rehearse and record slide timings in Power Point 2016?",
    //       "How to set up a self-running presentation in Power Point 2016?",
    //       "How to set the start time and length of an animation effect in PowerPoint 2016?",
    //       "How to update or remove a broken link to an Excel worksheet in PowerPoint 2016?",
    //       "How to share presentation with others and collaborate on it at the same time?",
    //       "How to save an image as JPEG instead of BMP file?",
    //       "How to reset a standard view in Outlook?",
    //       "How to add the Blind Carbon Copy (BCC) and From field to a new email in Outlook?",
    //       "When to use linked objects?",
    //       "How to change date format in MS Excel?",
    //       "How to empty the MS Outlook Deleted Items Folder Automatically?",
    //       "Receive error message \"'This document cannot be edited because it contains a read-only embedded font\" in Word?",
    //       "Emails sent from shared or departmental mailbox are not stored in the \"Sent Items\" in Outlook?",
    //       "How to create a pivot table in Excel?",
    //       "How to add delegation rights in Office 365?",
    //       "How to change reading pane position in Outlook 365?",
    //       "How to configure mark as read options in Office 365?",
    //       "How to create email signature in Office 365?",
    //       "How to create mail rule in Outlook 365?",
    //       "How to create Out of Office in Office 365?",
    //       "How to import contacts in Office 365?",
    //       "How to log in to Office 365?",
    //       "How to modify junk filters in Office 365?",
    //       "How to open shared mailbox in Office 365.doc?",
    //       "How to remotely wipe smart phone via Office 365?",
    //       "How to set up meeting in Office 365?",
    //       "Office 2016 - How to share Office 365 or other Exchange-based calendar with people inside or outside your organization?",
    //       "How to identify and resolve bad sections in OneNote?",
    //       "How to reset a notebook that won't sync?",
    //       "How to restore notes from a backup with OneNote 2016 for Windows?",
    //       "How to check printer status?",
    //       "How to clear Internet Explorer cache?",
    //       "How to search for backups on a notebook in OneDrive?",
    //       "How to search for backups on your computer?",
    //       "How to set password protection options in OneNote 2016?",
    //       "How to share a OneNote 2016 for Windows notebook on a SharePoint site?",
    //       "How to change an appointment in Outlook 2016?",
    //       "How to disable Security information pop-up in Internet Explorer?",
    //       "How to enable Active X?",
    //       "How to enable or disable Internet Explorer add ins?",
    //       "Error: internet explorer is currently running with addons disabled?",
    //       "How to check IP address?",
    //       "How to check IP address?",
    //       "How to enable or disable IE toolbars?",
    //       "Mostrar os menus no Internet Explorer?",
    //       "How to login to VPN?",
    //       "How to create an Outlook Data File (.pst) to save information in Outlook 2016?",
    //       "How to ping?",
    //       "How to perform tracert?",
    //       "How to print in Mozilla Firefox?",
    //       "How to restore advanced settings in Internet Explorer?",
    //       "How to set a homepage in Mozilla Firefox?",
    //       "How to set a homepage in Internet Explorer?",
    //       "How to make Internet Explorer default browser?",
    //       "How to troubleshoot PC problems using the Windows Troubleshooter?",
    //       "How to disable and enable add ins in Outlook 2007?",
    //       "How to manage your \"Mark email as read\" options?",
    //       "How to manage \"Mark emails as read\" options in Outlook 2010?",
    //       "How to add columns to a view in Outlook 2007?",
    //       "How to add columns to a view in Outlook 2010?",
    //       "How to save sent items in another person's Sent Items folder in Outlook 2016?",
    //       "How to automatically delete meeting requests from inbox after responding in Outlook 2007?",
    //       "How to automatically delete meeting request from Inbox after responding in Outlook 2010?",
    //       "How to add and modify stationery in Outlook 2007?",
    //       "Can external users join Lync meetings?",
    //       "Can external users join Lync meetings?",
    //       "How to add and modify stationery in Outlook 2010?",
    //       "How to download address book in Outlook 2007?",
    //       "How to send or respond to meeting requests on behalf of another person in Outlook 2016?",
    //       "How to download address book in Outlook 2003?",
    //       "How to configure Outlook profile for Office 365?",
    //       "How to empty the Outlook 2010 Deleted Items folder automatically?",
    //       "How to find Exchange server name in Outlook 2007?",
    //       "How to join Lync meeting using Lync Web App Plug-in?",
    //       "How to join Lync meeting using Lync Web App Plug-in?",
    //       "How to find Exchange server name in Outlook 2010?",
    //       "Can I join Lync meeting via GIMS communicator?",
    //       "Can I join Lync meeting via GIMS communicator?",
    //       "How to set Out of Office notifications and rules in Outlook 2010?",
    //       "How to create a rule in Outlook 2010?",
    //       "How to create a personal Distribution List in Outlook 2010?",
    //       "How to delay or schedule sending email messages in Outlook 2010?",
    //       "How to manually archive items in Outlook 2010?",
    //       "How to check spelling in Outlook 2010?",
    //       "How to add second time zone to calendar in Outlook 2010?",
    //       "How to Use multiple themes in one presentation in PowerPoint?",
    //       "How to add a picture as a slide background in PowerPoint?",
    //       "How to update or remove a broken link to an Excel worksheet in PowerPoint?",
    //       "How to create a macro in PowerPoint 2016?",
    //       "How to add a transparent picture (watermark) to slides in PowerPoint?",
    //       "How to save presentation in PowerPoint 2016 as a video?",
    //       "How to add audio to slide show in PowerPoint?",
    //       "How to add narration or sound in presentation?",
    //       "How to convert Live Meetings or Conf Calls into Lync?",
    //       "How to turn mouse into a laser pointer in Power Point 2016?",
    //       "How to add speaker notes to slides in Power Point?",
    //       "How to invite others to join Lync meeting?",
    //       "How to join Lync meeting via phone or communicator?",
    //       "How to set sound in Lync?",
    //       "How to share screen and programs in Lync?",
    //       "How to stop Lync displaying full message in IM message notification bubble?",
    //       "How to upload picture in Lync?",
    //       "Basic Internet troubleshooting?",
    //       "How to insert PDF file content as a picture in PowerPoint 2016?",
    //       "How to map a network printer by IP Address?",
    //       "How to add a Draft watermark to your document in Word2016?",
    //       "How to deal with Blue Screen of Death?",
    //       "Receive error message \"You have exceeded the storage limit of your mailbox\"",
    //       "How to install and share Local Printer?",
    //       "How to update Symantec Antivirus?",
    //       "Slides with animations have text with jagged edges in Powerpoint?",
    //       "How to deal with issues with Outlook Archive files (PST) in Outlook?",
    //       "USB/Flash Disk/memory stick is not recognized?",
    //       "How to manage permissions to a shared folder?",
    //       "How to change screen resolution in Windows?",
    //       "Unable to open attachment in received email?",
    //       "Blackberry trackball not functioning?",
    //       "Unable to open default Email folders in Outlook?",
    //       "How to map a network drive in Windows XP?",
    //       "How to print from Excel 2010?",
    //       "Problems synchronising offline folders in Outlook?",
    //       "How to share / delegate Outlook Calendar?",
    //       "Creating Groups in Sharepoint?",
    //       "How to fix opening Adobe Reader files in Internet Explorer?",
    //       "How to have Outlook opened on startup in Windows 7?",
    //       "Icons missing from desktop in Windows 7?",
    //       "How to add a header or footer in Word2016?",
    //       "How to add a picture as a background watermark in Word 2016 for Window?",
    //       "How to add content to the form in Word2016?",
    //       "How to add different page numbers or number formats to different sections in Word2016?",
    //       "How to change keyboard layout in Windows 7?",
    //       "How to change folder view in Windows 7?",
    //       "How to repair Windows 7 from a system repair disc?",
    //       "How to add images to a header or footer in Word2016?",
    //       "How to change the default font in Word 2010?",
    //       "Most common shortcut keys in Word 2010?",
    //       "How to create a page break in Word 2010?",
    //       "How to add page numbers in Word2016?",
    //       "How to make pictures display in Word 2010?",
    //       "How to bookmark the location in Word2016?",
    //       "How to change the default line spacing in Word2016?",
    //       "How to remove jammed paper from a multitray printer?",
    //       "How to adjust SAP character set to the operating system?",
    //       "How to save a SAP PO in a PDF file?",
    //       "How to retrieve or recover deleted emails in Outlook?",
    //       "How to remove unwanted items from workflow?",
    //       "How to open Personal Folder / PST Archive file under Outlook?",
    //       "Ho to proceed with SAP error \"Document is incomplete. You cannot post goods movement\"?",
    //       "How to maintain Output Condition record?",
    //       "How to check user validity in SAP ERP?",
    //       "Incorrect character displayed when pressing keys on keyboard?",
    //       "How to view archived idoc data?",
    //       "How To Fix a corrupt Word / Excel Document?",
    //       "How to manually archive items in Outlook?",
    //       "How to remove incorrect symbols from texts maintained in customer?",
    //       "How to proceed with the error \"Do you want to view only the content that was delivered securely?\"",
    //       "How to remove duplicate calendar entries in Outlook?",
    //       "Usernames and passwords are not remembered in Internet Explorer?",
    //       "Delegate cannot see mail items in Outlook?",
    //       "Delegado no puede ver los elementos deel mail en Outlook/",
    //       "How to switch on and off compatibility mode in Internet Explorer?",
    //       "How to enable the Run command under Windows START menu ?",
    //       "How to Turn On / Off Attachment Preview in Outlook ?",
    //       "How to wipe iPad / iPhone ?",
    //       "Comment effacer un iPad / iPhone ?",
    //       "How to display only TrueType fonts in Windows XP ?",
    //       "How to set the importance level of a mail message in Outlook ?",
    //       "How to import a nickname cache file into Outlook ?",
    //       "How to recall an Email message in Outlook ?",
    //       "How to create a drop-down list in Excel 2016?",
    //       "How to find version of iOS on iPhone / iPad ?",
    //       "How to set default or change language settings in Word ?",
    //       "How to share whiteboard in Lync 2010?",
    //       "How to start online meeting in Lync 2010?",
    //       "How to add a picture in Lync 2010?",
    //       "Unable to find personal folders in Outlook ?",
    //       "I am unable to log into Lync 2010 ?",
    //       "No soy capaz de acceder a Lync 2010 ?",
    //       "How to configure calendar sync on iPhone ?",
    //       "All folders on shared drive are empty ?",
    //       "How to connect a projector to a laptop ?",
    //       "No connection to the internet when working in the office ?",
    //       "Conflicting IP address on the network ?",
    //       "How to check the disk space available on your hard drive ?",
    //       "My internet is slow ?",
    //       "How to turn off pop-up blocker on Internet Explorer ?",
    //       "How to burn a CD with Roxio?",
    //       "How to disable Out of Office Assistant in Outlook ?",
    //       "How to clean up my hard drives?",
    //       "How to add new hardware in Windows ?",
    //       "How to find IP Address of your Computer ?",
    //       "How to update virus definitions in McAfee?",
    //       "How to create a Rule in Outlook ?",
    //       "A virus was found on my computer ?",
    //       "How to 'whiteout' the screen in MS PowerPoint ?",
    //       "How to enter a GL account in an invoice?",
    //       "How to add additional time zone to Outlook calendar ?",
    //       "How to use the MS Office Repair tool in Office 2010?",
    //       "How to add a contact from an email message in Outlook 2016?",
    //       "How to add / create a Signature in Outlook ?",
    //       "How to add a watermark background in a Word 2010 file?",
    //       "Unable to see images in Outlook emails ?",
    //       "I am getting an error \"Microsoft Word has encountered a problem and needs to close\" ?",
    //       "How to create a label in Word ?",
    //       "How to use iPhone / iPad as a Wireless router ?",
    //       "How to open a backup file in Word 2010 ?",
    //       "How to lock a Windows 7 computer?",
    //       "How to open shared or someone else's Outlook calendar ?",
    //       "How to enable the wireless adapter?",
    //       "How to remove the Cache and Temporary Internet Files from Internet Explorer ?",
    //       "How to import Personal Address Book (PAB) to Outlook ?",
    //       "How to manage autosave in Excel 2010?",
    //       "How to manage download pictures option in Outlook ?",
    //       "How to download Address Book in Outlook ?",
    //       "How to set the Printer as Default Printer in Windows?",
    //       "How to find or replace text and numbers on a worksheet in Excel 2016?",
    //       "How to set home page in Internet Explorer?",
    //       "How to merge cells in Excel 2010?",
    //       "How to change the line spacing in Word 2016?",
    //       "How to track changes in Word?",
    //       "How to remove a generic mailbox in Outlook 2010?",
    //       "How to autoforward emails to a different mailbox?",
    //       "How to choose a predefined margin setting in Word2016?",
    //       "How to freeze specific rows or columns in Excel 2016?",
    //       "How to send emails as delegate in Outlook?",
    //       "How to create a hyperlink to a specific place in a document in Word2016?",
    //       "How to merge cells in Excel 2016?",
    //       "How to create personal Distribution List in Outlook ?",
    //       "How to create a new Word document using a template?",
    //       "How to split text into different cells in Excel 2016?",
    //       "How to modify personal distribution list in Outlook ?",
    //       "How to create a table of contents in Word2016?",
    //       "How to create and insert a handwritten signature in Word2016?",
    //       "How to remove or rename Personal and Archive folders ?",
    //       "How to format the text in a table of contents in Word2016?",
    //       "How to check Physical Memory of a Laptop or PC in Windows XP ?",
    //       "How to go to the bookmark in Word2016?",
    //       "How to include typewritten text with your reusable signature in Word2016?",
    //       "How to connect a Laptop to LCD monitor ?",
    //       "I cannot open links in emails ?",
    //       "How to insert the file name in a footer in Word2016?",
    //       "How to turn on and create rules in the Out of Office Assistant of MS Outlook ?",
    //       "How to protect my Word file?",
    //       "How to transpose rotate data from rows to columns or vice versa in Excel 2016?",
    //       "How to activate full screen mode in Internet Explorer?",
    //       "How to autonumber cells in MS Excel ?",
    //       "How to change the default application used to open a certain file type ?",
    //       "How to create animated text in presentations using Powerpoint ?",
    //       "How to show or hide time and date on notes in MS Outlook ?",
    //       "How to insert a horizontal line in a message in Outlook ?",
    //       "How to change number of emails shown on iPhone ?",
    //       "How to delay or schedule sending e-mail messages ?",
    //       "How to find Computer Name in Windows XP?",
    //       "Out of Office Assistant only sends a notification once to each sender in MS Outlook ?",
    //       "How to deal with Address Book visibility issues?",
    //       "How to wrap text automatically in Excel 2016?",
    //       "How to add a shared folder to OneDrive?",
    //       "How to count blank cells in MS Excel document ?",
    //       "How to move files from a group to own OneDrive?",
    //       "How To Use Windows Remote Assistance ?",
    //       "How to set the first day of the week and other Calendar Preferences in Outlook ?",
    //       "How to use the COUNTA formula in MS Excel ?",
    //       "How to create a page break in Excel 2010?",
    //       "How to view fonts on my computer using Windows XP ?",
    //       "How to defragment your hard drive in Windows 7?",
    //       "How to map a network drive in Windows Seven ?",
    //       "How to find my computer name in Windows 7?",
    //       "How to use the COUNTIF formula in MS Excel ?",
    //       "Which operational system version am I running on my computer?",
    //       "How to count blank cells in MS Excel document ?",
    //       "How to add or modify Header or Footer of a Word document ?",
    //       "How to make an appointment recurring in MS Outlook ?",
    //       "Basic keyboard shortcuts in Mozilla Firefox ?",
    //       "How to find a file modified and saved from an email ?",
    //       "How to bookmark multiple tabs in Mozilla Firefox?",
    //       "How to access Global Address List on iPhone ?",
    //       "How to prioritize documents in the print queue in Windows XP ?",
    //       "How to display full path to files and folders in Windows XP ?",
    //       "How to centre a Visio diagram ?",
    //       "How to centre a Visio diagram ?",
    //       "How to show number of items in Outlook folders ?",
    //       "Error \"Cannot save the attachment\" in Outlook?",
    //       "How to move clip art, picture or other object over text in Word?",
    //       "How to set a homepage in Mozilla Firefox?",
    //       "How to add the same graphic to all pages in Visio diagram?",
    //       "How to print in Mozilla Firefox?",
    //       "How to Create a New Outlook Data File - Archive folder (PST) in Outlook?",
    //       "How to set Mozilla Firefox as the default browser?",
    //       "How to delete cookies and clear cache in Mozilla Firefox?",
    //       "How to keep Track Changes on in Word2016?",
    //       "How to manage popup blocker in Mozilla Firefox?",
    //       "How to link to a file, Web page, or blank email message in Word2016?",
    //       "How to replace the table of contents in Word2016?",
    //       "How to send an encrypted e-mail message from MS Outlook?",
    //       "How to show the Developer tab in Word 2016?",
    //       "How to print Excel files?",
    //       "How to open Outlook automatically on start up?",
    //       "How to find duplicates in Excel?",
    //       "How to add today's date to a document in Word?",
    //       "How to schedule an all day appointment in Outlook calendar?",
    //       "How to add geographic maps to Office documents?",
    //       "How to connect to wi-fi from my iPad?",
    //       "How to insert Powerpoint, Word, Excel, document into PowerPoint presentation ?",
    //       "How to create and manage an AirPort network on my iPad?",
    //       "How to set a users name in MS Office applications ?",
    //       "How to track new tasks assigned to others and receive status reports in Outlook ?",
    //       "How to set date and time on my iPad?",
    //       "What are the most common Keyboard Shortcuts ?",
    //       "How to restrict editing of header and footer of Word document ?",
    //       "How to change regional settings on iPad?",
    //       "Multitasking gestures - how to use gesture shortcuts on my iPad?",
    //       "How to add comments to an MS Office document?",
    //       "How to Set Server-side Auto-Replies with Exchange & Outlook?",
    //       "How to create a folder on the iPad homescreen?",
    //       "How to reset an iPad to factory settings?",
    //       "How to turn on and use Control Center on iPad?",
    //       "How to share OneDrive files and folders?",
    //       "How to edit Custom Dictionary in MS Outlook?",
    //       "Upload photos and files to OneDrive?",
    //       "How to copy email from one mailbox to another mailbox or folder?",
    //       "OneNote 2016 - How to attach an Excel file in OneNote 2016?",
    //       "OneNote 2016 - How to attach notes to an email message from OneNote 2016 ?",
    //       "How to back up notes in OneNote 2016 for Windows?",
    //       "How to change permissions for a OneNote 2016 for Windows notebook on OneDrive?",
    //       "How to set Personal Reminders in Outlook?",
    //       "How to create a new page template in OneNote 2016?",
    //       "How to lock fields in MS Excel?",
    //       "How to create a chart in PowerPoint?",
    //       "How to insert international / non-standard / symbols or characters in Word?",
    //       "How to create and customise envelopes in Word?",
    //       "How to add voting buttons to an email in Outlook?",
    //       "How to to create a template in Excel?",
    //       "How to set free / busy information and other calendar options for delegates in Outlook?",
    //       "How to set column headings so that they remain in view when scrolling in MS Excel?",
    //       "How to compress files using Winzip?",
    //       "How to show hidden files and folders in Windows?",
    //       "How to flag email messages on the iPad?",
    //       "How to change how messages are saved automatically in Microsoft Office Outlook?",
    //       "How to create a new spreadsheet in OneNote 2016?",
    //       "How to start page numbering later in your document in Word2016?",
    //       "How to start page numbers with something other than 1 in Word2016?",
    //       "How to track changes in Word2016?",
    //       "How do I download updates for Office 365?",
    //       "How to turn off Track Changes in Word2016?",
    //       "How to customize a page template in OneNote 2016?",
    //       "How to disable a sharing link in OneNote 2016?",
    //       "Outlook search function issue ?",
    //       "How to update a table of contents in Word2016?",
    //       "How to change the automatic document recovery save interval in Word ?",
    //       "How to open place in Word2016?",
    //       "How to set up notification of arrival of a MS Outlook email ?",
    //       "How to embed a static image of the spreadsheet in OneNote 2016?",
    //       "How to export notes from OneNote 2016 for Windows as a PDF?",
    //       "How to manually back up notebooks in OneNote 2016?",
    //       "How to protect notes in OneNote 2016?",
    //       "How to apply a template to a page in OneNote 2016 for Windows?",
    //       "How to send a page of notes in Outlook?"
    //     ];
    
    if (vivocha.getNickname()) vivocha_media_messages.user_nickname = vivocha.getNickname();
    
    function vivocha_media_unreadCounter() {
      if (!vivocha.contact){ return; } //prevent badge on first bot message
      var t = vivocha.$("#vvc_widget_" + widget.custom.id + " .unreadCounter")
        , nm = 1;
      if (t.is(':visible')) {
        nm = parseInt(t.text() ? t.text() : 0, 10);
        nm++;
      }
      if (vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_chatMessages:visible").size() < 1) {
        t.show();
      }
      t.text(nm);
    };
    
    function vivocha_chatScrollToBottom() {
      var t = vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_chatMessages:visible");
      if (t.size() > 0) {
        t.scrollTop(t[0].scrollHeight);
      }
    };
    (function () {
      var vivocha_writingDot_interval = null
        , vivocha_writingDot_step = 0;
    
      function vivocha_writingDot_gradient() {
        try {
          var steps = [
            [.33, .33, .33]
            , [.99, .33, .33]
            , [.66, .99, .33]
            , [.33, .66, .99]
            , [.33, .33, .66]
          ];
          var stepn = vivocha_writingDot_step++ % steps.length;
          var op = .0;
          for (var i = 0; i < 3; i++) {
            op = steps[stepn][i];
            vivocha.$("#vivocha_writingDot_" + (i + 1)).css({
              "opacity": op
              , "filter": "alpha(opacity=" + (op * 100) + ")"
            });
          }
        }
        catch (e) {}
      };
      vivocha_writingDot_interval = setInterval(vivocha_writingDot_gradient, 200);
    }());
    
    function vivocha_getLinkTarget(l) {
      var target = '_blank';
      var internalPageRegex = new RegExp("^http[s]?://" + (vivocha.domain ? ("[a-zA-Z0-9\-_.]*" + vivocha.domain) : window.location.hostname) + "(/.*)?$");
      if (l.match(internalPageRegex)) {
        target = '_self';
      }
      return target;
    };
    
    function vivocha_media_agentWritingToggle(s) {
      if (s) {
        vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_agentWriting").show(); //.css('visibility', 'visible');
        vivocha_chatScrollToBottom();
        vivocha_media_agentWritingTimeout = setTimeout(function () {
          vivocha_media_agentWritingToggle();
        }, 20000);
      }
      else {
        vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_agentWriting").hide(); //.css('visibility', 'hidden');
        vivocha_chatScrollToBottom();
      }
    };
    
    function vivocha_mediaOnResize() {
      vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_container").toggleClass("vivocha_minimized");
      vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_owl_container").toggleClass("vivocha_minimized");
      vivocha.$("#vvc_widget_" + widget.custom.id + " .unreadCounter ").hide().text(0);
    };
    vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_owl_container").on("click", vivocha_mediaOnResize);
    vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_expand").on("click", vivocha_mediaOnCollapse);
    
    function vivocha_mediaOnCollapse() {
      vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_container").toggleClass("vvcExpanded");
      if( (vivocha.$(document).width() - vivocha.$( ".vivocha_media_container" ).width()) < vivocha.$( ".vivocha_media_container" ).position().left){
        vivocha.$( ".vivocha_media_container" ).css("left", vivocha.$( ".vivocha_media_container" ).css("left", vivocha.$(document).width() - vivocha.$( ".vivocha_media_container" ).width()));
      }
    };
    var p_type, l_nick;
    
    function user_left() {
      sessionStorage.removeItem("vvcAgentAvatar");
      vivocha.service = '';
      vivocha.loadService();
    };
    var userAvatar = "data:image/png;base64,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"
      , agentAvatar = userAvatar;
    
    function vvc_getAvatar(vvcAgentId) {
      if(!vvcAgentId && sessionStorage.getItem("vvcAgentAvatar")){
        return sessionStorage.getItem("vvcAgentAvatar");
      }
      if (sessionStorage.getItem("vvcAgentAvatar") && sessionStorage.getItem("vvcAgentAvatarID") == vvcAgentId) {
        return sessionStorage.getItem("vvcAgentAvatar");
      }else {
        vivocha.getAvatar(vvcAgentId, 'original', function (data) {
          if (data && data != "undefined") {
            sessionStorage.setItem("vvcAgentAvatar", data);
            sessionStorage.setItem("vvcAgentAvatarID", vvcAgentId);
            return data;
          }
          else {
            return agentAvatar;
          }
        });
      }
    
      return agentAvatar;
    };
    
    function vivocha_chatOnMessage(type, nick, text, _target) {
      if(text.toLowerCase().trim() == "#agenttransfer" && type == "BOT"){ return; }
    
      if(!sessionStorage.vvcTransferred && type == "Agent"){ return; }
    
      if(type == "BOT"){ type = "Agent"; }
    
      var target = vivocha.$("#vvc_widget_" + widget.custom.id + " #vivocha_media_chatMessages_container");
      
      if (vivocha.$.inArray(type, ["Agent", "Sys", "Err", "User"]) === -1) {
        type = "User";
      }
      // SEND THE MESSAGE TO THE BOT
      if (type == "User" && !sessionStorage.vvcTransferred) {
        sendMessage(text);
      }
      var msgCont = vivocha.$('<span></span>').addClass('vivocha_media_chat' + type);
      if (nick) {
        if (p_type != type || l_nick != nick) {
          p_type = type;
          l_nick = nick;
          var nickCont = vivocha.$('<span></span>').addClass('vivocha_media_chatNick').addClass('vivocha_separator').html(vivocha.$.encode_entities(nick)).appendTo(msgCont);
        }
      }
      var textCont = vivocha.$('<span></span>').addClass('vivocha_media_chatMsg');
      var encText = text;
      if (vivocha.$.inArray(type, ["Sys", "Err"]) === -1) {
        encText = vivocha.$.encode_entities(text);
      }
      if (type == "Agent" || type == "User") {
        var vvcAvatarContainer = vivocha.$('<img src="' + (type == "Agent" ? vvc_getAvatar() : userAvatar) + '" class="vvcAvatar">').appendTo(textCont);
      }
      vivocha.$(textCont).html(vivocha.$.textile_convert(encText)).find("a").each(function () {
        var target = vivocha_getLinkTarget(this.href);
        this.target = target;
        if (target === '_blank') {
          this.rel = 'noopener noreferrer';
        }
      }).end().append(vvcAvatarContainer).appendTo(msgCont);
    
    //  console.log("[@][TARGET] -->", target.length, "-", target);
    //  console.log("[@][msgCont] -->", msgCont);
    //  console.log("[@][encText] -->", encText);
    //  console.log("[@] -----------------------");
    
      vivocha.$(target).append(msgCont);
      /*
       * force enablement of textareas at first agent message
       */
      if (vivocha.$.inArray(type, ["Sys", "Err"]) === -1) {
        unlockTextarea();
      }
      if (!_target) {
        vivocha.$(".vivocha_media_chatWaiting").hide();
        vivocha_chatScrollToBottom();
        if (type === "Agent") {
          if (window['vivocha_media_agentWritingTimeout']) {
            clearTimeout(vivocha_media_agentWritingTimeout);
          }
          vivocha_media_agentWritingTimeout = null;
          vivocha_media_agentWritingToggle();
          vivocha_media_unreadCounter();
        }
      }
      if (type === "Agent" && (vivocha.$("#vivocha_media_chatTextarea").is(":focus") == false || vivocha.$(".vivocha_media_chatMessages").is(":visible") == false)) {
        playChime();
      }
    
      if (type == "User" && !sessionStorage.vvcTransferred) {
        vivocha_media_agentWritingToggle(20);
      }
    
      return target;
    };
    
    
    vivocha.ready().then(function () {
      vivocha.events.on('log', function (type) {
    
    //    console.debug("[TYPE] ->", type);
    
        if (type == "dissuasion" || type == "cancelled" || type == "closed" || type == "abandoned") {
          vivocha.$("#vvc_widget_" + widget.custom.id + " .vvcfooter > *").fadeOut();
          sessionStorage.removeItem("vvcAgentNick");
          sessionStorage.removeItem("vvcAgentAvatar");
          sessionStorage.removeItem("vvcAgentAvatarID");
          sessionStorage.removeItem("vvcTransferred");
          sessionStorage.removeItem("vvc_bootup");
          sessionStorage.removeItem("korecom");
          
          bot.close();
        
        if(!sessionStorage.vvcTransferred){
          //vivocha_closeContact();  
        }
        
        var vvc_check = setInterval(function(){
          if(vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_container").length < 1){
            user_left();
            clearInterval(vvc_check);
          }
        }, 1*1000);
          
        }
        else if (type == "contact") {
            console.log(1);
          vvcInitializeTheBot();
          readyForTransferred();
          vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_owl_container .vivocha_widget_button").removeClass("vivocha_widget_button_noContact");
          contact.on("joined", function (data) {
            if (data.vvcu) {
              return;
            }
            unlockTextarea();
            vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_title").text(data.user || "");
            sessionStorage.setItem("vvcAgentNick", data.user || "");
          });
        }
        else if (type == "resume") {
            console.log(2);
            if (localStorage.korecom){
                bot.close();
            }
            console.log(3);
          vvcInitializeTheBot();
          console.log(4);
          readyForTransferred();
          console.log(5);
          unlockTextarea();
          console.log(6);
          vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_owl_container .vivocha_widget_button").removeClass("vivocha_widget_button_noContact");
          vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_title").text(sessionStorage.getItem("vvcAgentNick") || "");
        }
      });
      /*
       * SHOW THE WIDGET
       */
      vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_container").fadeIn();
    });
    
    function readyForTransferred(){
      contact.on('transferred', function (transfer) {
        sessionStorage.setItem("vvcTransferred", true);
        contact.on('joined', function (joined) {
          if(joined.vvcu){ return; }
          if(joined.avatar && joined.avatar.images && joined.avatar.images[0].file && joined.avatar.base_url){
            sessionStorage.setItem("vvcAgentAvatar", /*joined.avatar.base_url +*/ joined.avatar.images[0].file);
            sessionStorage.setItem("vvcAgentAvatarID", joined.user);
          }else{
            vvc_getAvatar(joined.user);
          }
          vivocha.$("#vvc_widget_" + widget.custom.id + " .vvcfooter > *").fadeIn();
        });
      });
    }
    
    vivocha.$.getScript("https://d3btqb6knwd3a4.cloudfront.net/u/ca/capgemini_test/lib/jquery.js", function(){
      vivocha.$.getScript("https://d3btqb6knwd3a4.cloudfront.net/u/ca/capgemini_test/lib/jquery-ui.min.js", function(){
        vivocha.$.getScript("https://d3btqb6knwd3a4.cloudfront.net/u/ca/capgemini_test/lib/jquery.tmpl.min.js", function(){
          vivocha.$.getScript("https://d3btqb6knwd3a4.cloudfront.net/u/ca/capgemini_test/lib/kore-bot-sdk-client.js", function(){
    
            vvc_getAvatar(default_agent_id);
    
            // - -- --- DRAGG --- -- -
            jQuery('.vivocha_media_container').draggable({
              containment: "#vivocha_chatHiddenWrapper"
              , handle: "#vivocha_media_header"
              , cursor: "move"
              , opacity: 0.8
              , scroll: false
              , start: function () {
                vivocha.$(".vivocha_media_container").css({
                  'bottom': 'auto'
                });
                vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_container").removeClass("vvcTransition");
              }
              , stop: function () {
                vivocha.$(".vivocha_media_container").css({
                  'height': 'auto'
                });
                vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_container").addClass("vvcTransition");
                vivocha.$('.vivocha_media_container').attr('style', function (i, style) {
                  return style && style.replace(/width[^;]+;?/g, '');
                });
              }
            });
    
            // - -- --- AUTOCOMPLETE --- -- -
            var autocompleteOpendedFirstTime = false
                , acWidth = jQuery('#vivocha_media_chatTextarea').width();
            jQuery("#vivocha_media_chatTextarea").autocomplete({
              minLength: 5,// change the length value to 5
              source: function (request, response) {
                var results = jQuery.ui.autocomplete.filter(availableTags, request.term);
                response(results.slice(0, 5));
              },
              fluid: true,
              resizable: true,
              width: acWidth,
              position: {
                my: "left top",
                at: "left top"
              },
              open: autocompletePosition
            });
    
            function autocompletePosition(){
              
              jQuery(".ui-autocomplete").css(
                  {
                    "left": jQuery('.vivocha_media_container').position().left -1 + "px"
                    , "top": (jQuery(".vivocha_media_form").offset().top - jQuery(window).scrollTop() - jQuery(".ui-autocomplete").outerHeight()) + "px"
                    , "width": jQuery('.vivocha_media_container').width() + "px"
                  });
            }
    
            vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_owl_container").fadeIn();
            vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_owl_container .vivocha_widget_button_noContact").on("click", function(){
    //          console.debug("[*] -> start the contact");
              if(!vivocha.contact){
                vivocha_start_contact();
              }
            });
    
            vivocha.$(".vivocha_media_chatMessages #vivocha_media_chatMessages_container").on("click", "li.quickReply, li.buttonTmplContentChild", function(){
              vivocha.contact.sendText(vivocha.$(this).attr("value"));
              vivocha_chatOnMessage("USER", vivocha_media_messages.user_nickname, vivocha.$(this).attr("value"));
            })
    
          })
        });
      })
    })
    
    var bot;
    
    function vvcInitializeTheBot(){
      // - -- --- BOT --- -- -
      function koreGenerateUUID() {
          console.info("generating UUID");
          var d = new Date().getTime();
          if (window.performance && typeof window.performance.now === "function") {
              d += performance.now(); //use high-precision timer if available
          }
          var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
              var r = (d + Math.random() * 16) % 16 | 0;
              d = Math.floor(d / 16);
              return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
          });
          return uuid;
      }
    
      var korecookie = localStorage.getItem("korecom");
      var uuid = (korecookie) || koreGenerateUUID();
      console.log(uuid);
    
      localStorage.setItem("korecom", uuid);
      if(!sessionStorage.vvcTransferred){
    
    
    
        function assertion(options, callback) {
          vivocha.getVVCU().then(function(__vvcu){
            var vvc_identity = vivocha.$("#emailBot").length > 0 ? vivocha.$("#emailBot").val() : (__vvcu + "@capgemini.com");
    
            var jsonData = {
              "clientId": botOptions.clientId
      //        , "clientSecret": "mIaAM2Cf4UvSYfVYPVKvtbUbe40KLTMhe84nOljN1gU="
              , "clientSecret": "8dIh21h1/hp2HeKHX5z8dMmkOjylPC+I02Gl+TYGQ/Q="
      //        , "identity": "sreevasthavan.k-c@capgemini.com"
              , "identity": uuid
              , "aud": ""
              , "isAnonymous": false
            };
            $.ajax({
              url: "https://demo.kore.net/users/sts"
              , type: 'post'
              , data: jsonData
              , dataType: 'json'
              , success: function (data) {
                options.assertion = data.jwt;
                callback(null, options);
              }
              , error: function (err) {
                //koreBot.showError(err.responseText);
              }
            });
          });
        }
    
        var botOptions = {};
        botOptions.koreAPIUrl = "https://bots.kore.ai/api/";
        botOptions.assertionFn = assertion;
    //    botOptions.clientId = "cs-ffed8f54-b2a2-5eb8-9ed7-f3cb8a892db1";
        botOptions.clientId = "cs-d7c5f830-2e1a-55d7-bdff-c62061f13cde";
        botOptions.botInfo = {
          chatBot: "PolandTest Bot"
    //      , taskBotId: "st-9e6c288f-60b7-5171-91f7-80bcb9b93bd6"
          , taskBotId: "st-9e6c288f-60b7-5171-91f7-80bcb9b93bd6"
        };
        bot = requireKr('/KoreBot.js').instance(); //initialize the bot.
        bot.init(botOptions); // bot instance created.
        bot.on("open", function (response) {
          unlockTextarea();
          if(!sessionStorage.vvc_bootup){
            console.debug("[@] ->", sessionStorage.vvc_bootup);
            sendMessage("bootup");
            sessionStorage.setItem("vvc_bootup", true);
            // console.log("[@]" + bot.lang.CURRENT)
          }
        });
    
        /* Callback function to receive messages from Bot */
        bot.on("message", function (msg) {
    //        console.log("BOT RESPONSE: ", msg);
        
    
        vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_title").text(default_agent_id);
        sessionStorage.setItem("vvcAgentNick", default_agent_id);
        vvc_getAvatar(default_agent_id);
        
        // Converting JSON string to object
        var tempData = JSON.parse(msg.data);
        if (tempData.from === "bot" && tempData.type === "bot_response") {
          if (tempData.message[0]) {
            if (!tempData.message[0].cInfo) {
              tempData.message[0].cInfo = {};
            }
            if (tempData.message[0].component && !tempData.message[0].component.payload.text) {
              try {
                tempData.message[0].component = JSON.parse(tempData.message[0].component.payload);
              }
              catch (err) {
                tempData.message[0].component = tempData.message[0].component.payload;
              }
            }
            if (tempData.message[0].component && tempData.message[0].component.payload && tempData.message[0].component.payload.text) {
              tempData.message[0].cInfo.body = tempData.message[0].component.payload.text;
            }
            try {
              tempData.message[0].cInfo.body = decodeURIComponent(tempData.message[0].cInfo.body);
            }
            catch (e) {
              tempData.message[0].cInfo.body = tempData.message[0].cInfo.body || '';
            }
            tempData.message[0].cInfo.body = tempData.message[0].cInfo.body.replace(/</g, '<').replace(/>/g, '>');
          }
          console.debug(tempData);
          if (vivocha.contact) {
            var jsonData = {
              "event": "botmessage"
              , "type": "text"
              , "body": tempData.message[0].component.payload.text
              , "id": vivocha.contact.contact.id
              , "from_id": vivocha.contact.contact.vvcu
            };
            $.ajax({
              url: "https://api-ps.vivocha.com/kore/dev/chatbot"
              //url: "https://1xrnnmux1a.execute-api.eu-west-1.amazonaws.com/dev/chatbot"
              , type: "post"
              , data: JSON.stringify(jsonData)
              , dataType: "json"
              , crossdomain: true
              , success: function (data) {
                console.log("[DATA] -> ", data);
                //RENDER MESSAGE
                renderMessage(tempData);
              }
              , error: function (err) {
                console.log(err);
              }
            });
          }
          else {
            renderMessage(tempData);
          }
        }
    
      });
    
      }
    }
    
    function renderMessage(msgData) {
      //  console.debug("[] -> msgData", msgData);
      //  console.debug("[] -> msgData", msgData.message[0]);
      //  console.debug("[] -> msgData", msgData.message[0].component);
      //  console.debug("[] -> type",  msgData.message[0].component.type);
      if ( //TEXT
        msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.type == "text"
      ) {
        //verify popup

        var listWord = msgData.message[0].component.payload.text.split(' ');
        var toGetTitle = msgData.message[0].component.payload.text.split('\n');
        var customTitleText;
        var msgText;

        var listWord = msgData.message[0].component.payload.text.split(' ');
        if (listWord[0] == '#popup') {

            if (toGetTitle[1] == '') {
                customTitleText = 'Details';
                toGetTitle.splice(0, 1);
                msgText = toGetTitle.join('\n');
              } else {
                customTitleText = toGetTitle[1];
                toGetTitle.splice(0, 3);
                msgText = toGetTitle.join('\n');
              }

              console.log("T] -> " + toGetTitle, customTitleText);

          var vvcPopupTitle = 'Details';
          for(var e in listWord){
           if(listWord[e].indexOf("#Title_asd_Asdf_SADf") > -1){
             vvcPopupTitle = listWord[e].replace("#Title_", "").replace("_", " ");
             listWord.splice(e, 1);
           }
          }
          listWord.shift();
        //   var msgText = listWord.join(' ');
          var msgDataBk = msgData;
          msgData.message[0].component.payload.text = msgText;
          msgData.message[0].cInfo.body = 'Please follow steps from the sidebar on the left';
          var html = msgText;
          html = '<div class="container-fluid"> ' + html + '</div>';
          var screenWidth, screenHeight, dialogWidth, dialogHeight, isDesktop, myval, atval, ofval;
          screenWidth = window.screen.width;
          screenHeight = window.screen.height;

        if (screenWidth >= 1280) {
            dialogWidth = 500 * 1.2;
            dialogHeight = 350 * 1.2;
            isDesktop = true;
            myval = "right bottom";
            atval = "left bottom";
            ofval = "#vivocha_media_body";
          }
          else if (screenWidth < 890) {
            dialogWidth = screenWidth * .95;
            dialogHeight = screenHeight * .95;
            isDesktop = true;
            myval = "left top";
            atval = "left bottom";
            ofval = "body";
          } else {
            dialogWidth = 500;
            dialogHeight = 350;
            isDesktop = true;
            myval = "left bottom+440";
            atval = "left+220";
            ofval = "body";
          }


          var opt = {
            autoOpen: false
            , draggable: true
            , modal: false
            , width: dialogWidth
            // , height: dialogHeight
            , fluid: true
            , resizable: true
            , dialogClass: "dialog-class"
            , position: {
                my: myval,
                at: atval,
                of: ofval
            }
            , title: customTitleText
            , minHeight: 300
            , minWidth: 200
            , closeText: ""
            , close: function () {
              jQuery("#vivocha_media_chatTextarea").focus();
            }
          };
          if (jQuery("#dialog:visible").length > 0) {
            jQuery("#dialog").dialog("close");
          }
          jQuery("#dialog").dialog(opt).dialog("open");
          jQuery("#dialog").css({
            "overflow": "auto"
            , "z-index": 2147483646
          });
          jQuery('#dialog').empty();
          jQuery("#dialog").append(checkMarkdowns(decodeURI(html)));
          jQuery("#dialog").fadeIn();
          vivocha_media_agentWritingToggle();
        }
        //RENDER MESSAGE
        appendMessage(msgData.message[0].cInfo.body);
      }else if( //TEXT
        msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.type == "template"
      ) {
    //    console.debug("[TEMPLATE] -> ", msgData.message[0].component.payload.template_type);
    //    console.debug("[TEMPLATE] -> ", msgData);
        var tmpMsg = jQuery(getChatTemplate(msgData.message[0].component.payload.template_type)).tmpl({
            'msgData': msgData
            , 'helpers': helpers
            , 'avatar': vvc_getAvatar(default_agent_id)
            , 'extension': ''//extension
          });
        vivocha.$(".vivocha_media_chatMessages #vivocha_media_chatMessages_container").append(tmpMsg);
        vivocha_chatScrollToBottom();
        vivocha_media_agentWritingToggle();
      }
    }
    
    function appendMessage(text){
      vivocha_chatOnMessage("BOT", default_agent_id, text);
    }
    
    function sendMessage(text){
      var messageToBot = {};
      messageToBot["message"] = {
        body: text
        , attachments: []
      };
      messageToBot["resourceid"] = '/bot.message';
      // Should be an uniqe id for each message, you can use timestamp as well
      messageToBot["clientMessageId"] = new Date().getTime();
      // Send message to Bot
      if(typeof(bot) != "undefined"){
        bot.sendMessage(messageToBot, function messageSent() {});
      }
    }
    
    function checkMarkdowns(val){
      var txtArr = val.split(/\r?\n/);
      for (var i = 0; i < txtArr.length; i++) {
        var _lineBreakAdded = false;
        if (txtArr[i].indexOf('#h6') === 0 || txtArr[i].indexOf('#H6') === 0) {
          txtArr[i] = '<h6>' + txtArr[i].substring(3) + '</h6>';
          _lineBreakAdded = true;
        }
        else if (txtArr[i].indexOf('#h5') === 0 || txtArr[i].indexOf('#H5') === 0) {
          txtArr[i] = '<h5>' + txtArr[i].substring(3) + '</h5>';
          _lineBreakAdded = true;
        }
        else if (txtArr[i].indexOf('#h4') === 0 || txtArr[i].indexOf('#H4') === 0) {
          txtArr[i] = '<h4>' + txtArr[i].substring(3) + '</h4>';
          _lineBreakAdded = true;
        }
        else if (txtArr[i].indexOf('#h3') === 0 || txtArr[i].indexOf('#H3') === 0) {
          txtArr[i] = '<h3>' + txtArr[i].substring(3) + '</h3>';
          _lineBreakAdded = true;
        }
        else if (txtArr[i].indexOf('#h2') === 0 || txtArr[i].indexOf('#H2') === 0) {
          txtArr[i] = '<h2>' + txtArr[i].substring(3) + '</h2>';
          _lineBreakAdded = true;
        }
        else if (txtArr[i].indexOf('#h1') === 0 || txtArr[i].indexOf('#H1') === 0) {
          txtArr[i] = '<h1>' + txtArr[i].substring(3) + '</h1>';
          _lineBreakAdded = true;
        }
        else if (txtArr[i].length === 0) {
          txtArr[i] = '\r\n';
          _lineBreakAdded = true;
        }
        else if (txtArr[i].indexOf('*') === 0) {
          if (!isEven(txtArr[i].split('*').length - 1)) {
            txtArr[i] = '\r\n● ' + txtArr[i].substring(1);
            _lineBreakAdded = true;
          }
        }
        else if (txtArr[i].indexOf('>>') === 0) {
          txtArr[i] = '<p class="indent">' + txtArr[i].substring(2) + '</p>';
          _lineBreakAdded = true;
        }
        else if (txtArr[i].indexOf('>>') === 0) {
          txtArr[i] = '<p class="indent">' + txtArr[i].substring(8) + '</p>';
          _lineBreakAdded = true;
        }
        else if (txtArr[i].indexOf('---') === 0 || txtArr[i].indexOf('___') === 0) {
          txtArr[i] = '<hr/>' + txtArr[i].substring(3);
          _lineBreakAdded = true;
        }
        var j;
        // Matches Image markup ![test](http://google.com/image.png)
        var _matchImage = txtArr[i].match(/\!\[([^\]]+)\](|\s)+\(([^\)])+\)/g);
        if (_matchImage && _matchImage.length > 0) {
          for (j = 0; j < _matchImage.length; j++) {
            var _imgTxt = _matchImage[j].substring(2, _matchImage[j].indexOf(']'));
            var remainingString = _matchImage[j].substring(_matchImage[j].indexOf(']') + 1).trim();
            var _imgLink = remainingString.substring(1, remainingString.indexOf(')'));
            _imgLink = '<img src="' + _imgLink + '" alt="' + _imgTxt + '">';
            var _tempImg = txtArr[i].split(' ');
            for (var k = 0; k < _tempImg.length; k++) {
              if (_tempImg[k] === _matchImage[j]) {
                _tempImg[k] = _imgLink;
              }
            }
            txtArr[i] = _tempImg.join(' ');
            //txtArr[i] = txtArr[i].replace(_matchImage[j], _imgLink);
          }
        }
        // Matches link markup [test](http://google.com/)
        var _matchLink = txtArr[i].match(/\[([^\]]+)\](|\s)+\(([^\)])+\)/g);
        if (_matchLink && _matchLink.length > 0) {
          for (j = 0; j < _matchLink.length; j++) {
            var _linkTxt = _matchLink[j].substring(1, _matchLink[j].indexOf(']'));
            var remainingString = _matchLink[j].substring(_matchLink[j].indexOf(']') + 1).trim();
            var _linkLink = remainingString.substring(1, remainingString.indexOf(')'));
            _linkLink = '<span class="isLink"><a href="' + _linkLink + '" target="_blank">' + _linkTxt + '</a></span>';
            txtArr[i] = txtArr[i].replace(_matchLink[j], _linkLink);
          }
        }
        // Matches bold markup *test* doesnot match * test *, *test *, * test*. If all these are required then replace \S with \s
        var _matchAstrik = txtArr[i].match(/\*\S([^*]*?)\S\*/g);
        if (_matchAstrik && _matchAstrik.length > 0) {
          for (j = 0; j < _matchAstrik.length; j++) {
            var _boldTxt = _matchAstrik[j];
            _boldTxt = _boldTxt.substring(1, _boldTxt.length - 1);
            _boldTxt = '<b>' + _boldTxt + '</b>';
            txtArr[i] = txtArr[i].replace(_matchAstrik[j], _boldTxt);
          }
        }
        // Matches bold markup ~test~ doesnot match ~ test ~, ~test ~, ~ test~. If all these are required then replace \S with \s
        var _matchItalic = txtArr[i].match(/\~\S([^*]*?)\S\~/g);
        if (_matchItalic && _matchItalic.length > 0) {
          for (j = 0; j < _matchItalic.length; j++) {
            var _italicTxt = _matchItalic[j];
            if (txtArr[i].indexOf(_italicTxt) === 0 || txtArr[i][txtArr[i].indexOf(_italicTxt) - 1] === ' ') {
              _italicTxt = _italicTxt.substring(1, _italicTxt.length - 1);
              _italicTxt = '<i class="markdownItalic">' + _italicTxt + '</i>';
              txtArr[i] = txtArr[i].replace(_matchItalic[j], _italicTxt);
            }
          }
        }
        // Matches bold markup ~test~ doesnot match ~ test ~, ~test ~, ~ test~. If all these are required then replace \S with \s
        var _matchPre = txtArr[i].match(/\`\`\`\S([^*]*?)\S\`\`\`/g);
        var _matchPre1 = txtArr[i].match(/\'\'\'\S([^*]*?)\S\'\'\'/g);
        if (_matchPre && _matchPre.length > 0) {
          for (j = 0; j < _matchPre.length; j++) {
            var _preTxt = _matchPre[j];
            _preTxt = _preTxt.substring(3, _preTxt.length - 3);
            _preTxt = '<pre>' + _preTxt + '</pre>';
            txtArr[i] = txtArr[i].replace(_matchPre[j], _preTxt);
          }
          _lineBreakAdded = true;
        }
        if (_matchPre1 && _matchPre1.length > 0) {
          for (j = 0; j < _matchPre1.length; j++) {
            var _preTxt = _matchPre1[j];
            _preTxt = _preTxt.substring(3, _preTxt.length - 3);
            _preTxt = '<pre>' + _preTxt + '</pre>';
            txtArr[i] = txtArr[i].replace(_matchPre1[j], _preTxt);
          }
          _lineBreakAdded = true;
        }
        if (!_lineBreakAdded && i > 0) {
          txtArr[i] = '\r\n' + txtArr[i];
        }
      }
      val = txtArr.join('');
      return val.replace(/(?:\r\n|\r|\n)/g, '<br />');;
    }
    
    function isEven(n) {
        n = Number(n);
        return n === 0 || !!(n && !(n % 2));
    }
    
    function getChatTemplate(tempType) {
        var buttonTemplate = '<script id="chat_message_tmpl" type="text/x-jqury-tmpl"> \
            {{if msgData.message}} \
              <span class="vivocha_media_chatAgent"> \
                <li {{if msgData.type !== "bot_response"}}id="msg_${msgItem.clientMessageId}"{{/if}} class="vivocha_media_chatMsg {{if msgData.type === "bot_response"}}fromOtherUsers{{else}}fromCurrentUser{{/if}} with-icon"> \
                  <div class="buttonTmplContent"> \
                    {{if msgData.icon}}<div class="profile-photo"> <div class="user-account avtar" style="background-image:url(${msgData.icon})"></div> </div> {{/if}} \
                    <ul class="buttonTmplContentBox">\
                      <li class="buttonTmplContentHeading"> \
                        {{if msgData.type === "bot_response"}} {{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "user")}} {{/if}} \
                        {{if msgData.message[0].cInfo && msgData.message[0].cInfo.emoji}} \
                          <span class="emojione emojione-${msgData.message[0].cInfo.emoji[0].code}">${msgData.message[0].cInfo.emoji[0].title}</span> \
                        {{/if}} \
                      </li>\
                      {{each(key, msgItem) msgData.message[0].component.payload.buttons}} \
                        <li {{if msgItem.payload}}value="${msgItem.payload}"{{/if}} {{if msgItem.payload}}actual-value="${msgItem.payload}"{{/if}} {{if msgItem.url}}url="${msgItem.url}"{{/if}} class="buttonTmplContentChild" data-value="${msgItem.value}" type="${msgItem.type}">\
                        {{if msgItem.url}}<a target="_blank" href="${msgItem.url}">${msgItem.title}</a>{{else}} ${msgItem.title}{{/if}}\
                        </li> \
                      {{/each}} \
                    </ul>\
                  </div>\
                  <img src="{{html avatar}}" class="vvcAvatar"> \
                </li> \
              </span> \
            {{/if}} \
          </scipt>';
      var quickReplyTemplate = '<script id="chat_message_tmpl" type="text/x-jqury-tmpl"> \
                {{if msgData.message}} \
                <span class="vivocha_media_chatAgent"> \
                    <li {{if msgData.type !== "bot_response"}}id="msg_${msgItem.clientMessageId}"{{/if}} class="vivocha_media_chatMsg {{if msgData.type === "bot_response"}}fromOtherUsers{{else}}fromCurrentUser{{/if}} with-icon"> \
                        <div class="buttonTmplContent"> \
                            {{if msgData.icon}}<div class="profile-photo"> <div class="user-account avtar" style="background-image:url(${msgData.icon})"></div> </div> {{/if}} \
                            <ul class="buttonTmplContentBox">\
                                {{if msgData.message[0].component.payload.text}} \
                                    <li class="buttonTmplContentHeading"> \
                                        {{if msgData.type === "bot_response"}} {{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "user")}} {{/if}} \
                                        {{if msgData.message[0].cInfo && msgData.message[0].cInfo.emoji}} \
                                            <span class="emojione emojione-${msgData.message[0].cInfo.emoji[0].code}">${msgData.message[0].cInfo.emoji[0].title}</span> \
                                        {{/if}} \
                                    </li>\
                                {{/if}} \
                                {{each(key, msgItem) msgData.message[0].component.payload.quick_replies}} \
                                    <li {{if msgItem.payload}}value="${msgItem.payload}"{{/if}} class="quickReply buttonTmplContentChild" type="${msgItem.content_type}">\
                                        {{if msgItem.image_url}}<img src="${msgItem.image_url}">{{/if}} ${msgItem.title}\
                                    </li> \
                                {{/each}} \
                            </ul>\
                        </div>\
                      <img src="{{html avatar}}" class="vvcAvatar"> \
                    </li> \
                  </span> \
                {{/if}} \
            </scipt>';
    
      if (tempType === "quick_replies") {
        return quickReplyTemplate;
      }else if (tempType === "button") {
          return buttonTemplate;
      }
    }
    
    var helpers = {
      'nl2br': function(str, runEmojiCheck) {
    //      if (runEmojiCheck) {
    //        str = window.emojione.shortnameToImage(str);
    //      }
        str = str.replace(/(?:\r\n|\r|\n)/g, '<br />');
        return str;
      },
      'br2nl': function(str) {
        str = str.replace(/<br \/>/g, '\n');
        return str;
      },
      'formatAMPM': function(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      },
      'formatDate': function(date) {
        var d = new Date(date);
        if (isNaN(d.getTime())) {
          var _tmpDate = new Date().getTime();
          d = new Date(_tmpDate);
        }
        return d.toDateString() + " at " + helpers.formatAMPM(d);
      },
      'convertMDtoHTML': function(val, responseType) {
        var mdre = {};
        //mdre.date = new RegExp(/\\d\(\s*(.{10})\s*\)/g);
        mdre.date = new RegExp(/\\d\(\s*(.{10})\s*(?:,\s*["'](.+?)["']\s*)?\)/g);
        mdre.time = new RegExp(/\  \(\s*(.{8}\.\d{0,3})\s*\)/g);
        //mdre.datetime = new RegExp(/\\dt\(\s*(.{10})[T](.{12})([z]|[Z]|[+-]\d{4})\s*\)/g);
        mdre.datetime = new RegExp(/\\(d|dt|t)\(\s*([-0-9]{10}[T][0-9:.]{12})([z]|[Z]|[+-]\d{4})[\s]*,[\s]*["']([a-zA-Z\W]+)["']\s*\)/g);
        mdre.num = new RegExp(/\\#\(\s*(\d*.\d*)\s*\)/g);
        mdre.curr = new RegExp(/\\\$\((\d*.\d*)[,](\s*[\"\']\s*\w{3}\s*[\"\']\s*)\)|\\\$\((\d*.\d*)[,](\s*\w{3}\s*)\)/g);
    
        var regEx = {};
        regEx.SPECIAL_CHARS = /[\=\`\~\!@#\$\%\^&\*\(\)_\-\+\{\}\:"\[\];\',\.\/<>\?\|\\]+/;
        regEx.EMAIL = /^[-a-z0-9~!$%^&*_=+}{\']+(\.[-a-z0-9~!$%^&*_=+}{\']+)*@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,255})+$/i;
        regEx.MENTION = /(^|\s|\\n|")@([^\s]*)(?:[\s]\[([^\]]*)\])?["]?/gi;
        regEx.HASHTAG = /(^|\s|\\n)#(\S+)/g;
        regEx.NEWLINE = /\n/g;
        var _regExForLink = /((?:http\:\/\/|https\:\/\/|www\.)+\S*\.(?:(?:\.\S)*[^\,\s\.])*\/?)/gi;
        var _regExForMarkdownLink = /\[([^\]]+)\](|\s)+\(([^\)])+\)/g;
        var str = val || '';
        var mmntns = {};
        mmntns.sd = new RegExp(/^(d{1})[^d]|[^d](d{1})[^d]/g);
        mmntns.dd = new RegExp(/^(d{2})[^d]|[^d](d{2})[^d]/g);
        mmntns.fy = new RegExp(/(y{4})|y{2}/g);
        var regexkeys = Object.keys(mdre);
    
        function matchmap(regexval, stringval) {
          var da;
          var matches = [];
          while ((da = regexval.exec(stringval)) !== null) {
            var keypair = {};
            keypair.index = da.index;
            keypair.matchexp = da[0];
            if (da.length > 1) {
              for (var n = 1; n < da.length; n++) {
                var mstr = "matchval" + n.toString();
                keypair[mstr] = da[n];
              }
            }
            matches.push(keypair);
          }
          return matches;
        }
    
        function ucreplacer(match) {
          return match.toUpperCase();
        }
        for (var j = 0; j < regexkeys.length; j++) {
          var k;
          switch (regexkeys[j]) {
            case 'date':
              var strvald = str;
              var datematcharray = matchmap(mdre.date, strvald);
              if (datematcharray.length) {
                for (k = 0; k < datematcharray.length; k++) {
                  //var fdate = moment(datematcharray[k].matchval).format('DD,dd,MM,YYY');
                  var fdate = new Date(datematcharray[k].matchval1).toLocaleDateString();
                  fdate = ' ' + fdate.toString() + ' ';
                  str = str.replace(datematcharray[k].matchexp.toString(), fdate);
                }
              }
              break;
            case 'time':
              var strvalt = str;
              var timematcharray = matchmap(mdre.time, strvalt);
              if (timematcharray.length) {
                for (k = 0; k < timematcharray.length; k++) {
                  var ftime = new Date(timematcharray[k].matchval1).toLocaleTimeString();
                  ftime = ' ' + ftime.toString() + ' ';
                  str = str.replace(timematcharray[k].matchexp.toString(), ftime);
                }
              }
              break;
            case 'datetime':
              var strvaldt = str;
              var dtimematcharray = matchmap(mdre.datetime, strvaldt);
              if (dtimematcharray.length) {
                for (k = 0; k < dtimematcharray.length; k++) {
                  var ms = '';
                  var mergekeylength = Object.keys(dtimematcharray[k]).length - 2;
                  for (var l = 2; l < mergekeylength; l++) {
                    var keystr = "matchval" + l.toString();
                    ms += dtimematcharray[k][keystr];
                  }
                  var foptionstring = "matchval" + mergekeylength.toString();
                  var fmtstr = dtimematcharray[k][foptionstring];
                  fmtstr = fmtstr.replace(mmntns.fy, ucreplacer);
                  fmtstr = fmtstr.replace(mmntns.dd, ucreplacer);
                  fmtstr = fmtstr.replace(mmntns.sd, ucreplacer);
                  //var fdtime = new Date(dtimematcharray[k].matchval).toLocaleString();
                  var fdtime = moment(ms).format(fmtstr);
                  fdtime = ' ' + fdtime.toString() + ' ';
                  str = str.replace(dtimematcharray[k].matchexp.toString(), fdtime);
                }
              }
              break;
            case 'num':
              var strnumval = str;
              var nummatcharray = matchmap(mdre.num, strnumval);
              if (nummatcharray.length) {
                for (k = 0; k < nummatcharray.length; k++) {
                  var fnum = Number(nummatcharray[k].matchval1).toLocaleString();
                  fnum = ' ' + fnum.toString() + ' ';
                  str = str.replace(nummatcharray[k].matchexp.toString(), fnum);
                }
              }
              break;
            case 'curr':
              var strcurval = str;
              var currmatcharray = matchmap(mdre.curr, strcurval);
              var browserLang = window.navigator.language || window.navigator.browserLanguage;
              var curcode = new RegExp(/\w{3}/);
              if (currmatcharray.length) {
                for (k = 0; k < currmatcharray.length; k++) {
                  var currops = {},
                    fcode;
                  currops.style = 'currency';
                  if (currmatcharray[k].matchval2) {
                    fcode = curcode.exec(currmatcharray[k].matchval2);
                  }
                  currops.currency = fcode[0].toString();
                  var fcurr = Number(currmatcharray[k].matchval1).toLocaleString(browserLang, currops);
                  //check for browser support if browser doesnot suppor we get the same value back and we append the currency Code
                  if (currmatcharray[k].matchval1.toString() === fcurr.toString()) {
                    fcurr = ' ' + fcurr.toString() + ' ' + currops.currency;
                  } else {
                    fcurr = ' ' + fcurr.toString() + ' ';
                  }
                  str = str.replace(currmatcharray[k].matchexp.toString(), fcurr);
                }
              }
              break;
          }
        }
    
        function nextLnReplacer(match, p1, offset, string) {
          return "<br/>";
        }
    
        function ignoreWords(str) {
          var _words = ['onclick', 'onmouse', 'onblur', 'onscroll', 'onStart'];
          _words.forEach(function(word) {
            var regEx = new RegExp(word, "ig");
            str = str.replace(regEx, "");
          });
          return str;
        }
        var nextln = regEx.NEWLINE;
    
        function linkreplacer(match, p1, offset, string) {
          var dummyString = string.replace(_regExForMarkdownLink, '[]');
          dummyString = ignoreWords(dummyString);
          if (dummyString.indexOf(match) !== -1) {
            var _link = p1.indexOf('http') < 0 ? 'http://' + match : match,
              _target;
            //_link = encodeURIComponent(_link);
            _target = "target='_blank'";
            return "<span class='isLink'><a " + _target + " href=\"" + _link + "\">" + match + "</a></span>";
          } else {
            return match;
          }
        }
        //check for whether to linkify or not
        try {
          str = decodeURIComponent(str);
        } catch (e) {
          str = str || '';
        }
        var newStr = '',
          wrapper1;
        if (responseType === 'user') {
          str = str.replace(/onerror=/gi, 'abc-error=');
          wrapper1 = document.createElement('div');
          newStr = str.replace(//g, '\"').replace(//g, '\"');
          newStr = newStr.replace(/</g, '<').replace(/>/g, '>');
          wrapper1.innerHTML = xssAttack(newStr);
          if ($(wrapper1).find('a').attr('href')) {
            str = newStr;
          } else {
            str = newStr.replace(/</g, '<').replace(/>/g, '>').replace(_regExForLink, linkreplacer);
          }
        } else {
          wrapper1 = document.createElement('div');
          wrapper1.innerHTML = xssAttack(str);
          if ($(wrapper1).find('a').attr('href')) {
            var linkArray = str.match(/<a[^>]*>([^<]+)<\/a>/g);
            for (var x = 0; x < linkArray.length; x++) {
              var _newLA = document.createElement('div');
              _newLA.innerHTML = linkArray[x];
              $(_newLA).find('a').attr('target', '_blank');
              str = str.replace(linkArray[x], _newLA.innerHTML);
            }
          } else {
            str = wrapper1.innerHTML.replace(_regExForLink, linkreplacer);
          }
        }
        str = helpers.checkMarkdowns(str);
        if (responseType === 'user') {
          str = str.replace(/abc-error=/gi, 'onerror=');
        }
        return helpers.nl2br(str, true);
      },
      'checkMarkdowns': function(val) {
        var txtArr = val.split(/\r?\n/);
        for (var i = 0; i < txtArr.length; i++) {
          var _lineBreakAdded = false;
          if (txtArr[i].indexOf('#h6') === 0 || txtArr[i].indexOf('#H6') === 0) {
            txtArr[i] = '<h6>' + txtArr[i].substring(3) + '</h6>';
            _lineBreakAdded = true;
          } else if (txtArr[i].indexOf('#h5') === 0 || txtArr[i].indexOf('#H5') === 0) {
            txtArr[i] = '<h5>' + txtArr[i].substring(3) + '</h5>';
            _lineBreakAdded = true;
          } else if (txtArr[i].indexOf('#h4') === 0 || txtArr[i].indexOf('#H4') === 0) {
            txtArr[i] = '<h4>' + txtArr[i].substring(3) + '</h4>';
            _lineBreakAdded = true;
          } else if (txtArr[i].indexOf('#h3') === 0 || txtArr[i].indexOf('#H3') === 0) {
            txtArr[i] = '<h3>' + txtArr[i].substring(3) + '</h3>';
            _lineBreakAdded = true;
          } else if (txtArr[i].indexOf('#h2') === 0 || txtArr[i].indexOf('#H2') === 0) {
            txtArr[i] = '<h2>' + txtArr[i].substring(3) + '</h2>';
            _lineBreakAdded = true;
          } else if (txtArr[i].indexOf('#h1') === 0 || txtArr[i].indexOf('#H1') === 0) {
            txtArr[i] = '<h1>' + txtArr[i].substring(3) + '</h1>';
            _lineBreakAdded = true;
          } else if (txtArr[i].length === 0) {
            txtArr[i] = '\r\n';
            _lineBreakAdded = true;
          } else if (txtArr[i].indexOf('*') === 0) {
            if (!isEven(txtArr[i].split('*').length - 1)) {
              txtArr[i] = '\r\n● ' + txtArr[i].substring(1);
              _lineBreakAdded = true;
            }
          } else if (txtArr[i].indexOf('>>') === 0) {
            txtArr[i] = '<p class="indent">' + txtArr[i].substring(2) + '</p>';
            _lineBreakAdded = true;
          } else if (txtArr[i].indexOf('>>') === 0) {
            txtArr[i] = '<p class="indent">' + txtArr[i].substring(8) + '</p>';
            _lineBreakAdded = true;
          } else if (txtArr[i].indexOf('---') === 0 || txtArr[i].indexOf('___') === 0) {
            txtArr[i] = '<hr/>' + txtArr[i].substring(3);
            _lineBreakAdded = true;
          }
          var j;
          // Matches Image markup ![test](http://google.com/image.png)
          var _matchImage = txtArr[i].match(/\!\[([^\]]+)\](|\s)+\(([^\)])+\)/g);
          if (_matchImage && _matchImage.length > 0) {
            for (j = 0; j < _matchImage.length; j++) {
              var _imgTxt = _matchImage[j].substring(2, _matchImage[j].indexOf(']'));
              var remainingString = _matchImage[j].substring(_matchImage[j].indexOf(']') + 1).trim();
              var _imgLink = remainingString.substring(1, remainingString.indexOf(')'));
              _imgLink = '<img src="' + _imgLink + '" alt="' + _imgTxt + '">';
              var _tempImg = txtArr[i].split(' ');
              for (var k = 0; k < _tempImg.length; k++) {
                if (_tempImg[k] === _matchImage[j]) {
                  _tempImg[k] = _imgLink;
                }
              }
              txtArr[i] = _tempImg.join(' ');
              //txtArr[i] = txtArr[i].replace(_matchImage[j], _imgLink);
            }
          }
          // Matches link markup [test](http://google.com/)
          var _matchLink = txtArr[i].match(/\[([^\]]+)\](|\s)+\(([^\)])+\)/g);
          if (_matchLink && _matchLink.length > 0) {
            for (j = 0; j < _matchLink.length; j++) {
              var _linkTxt = _matchLink[j].substring(1, _matchLink[j].indexOf(']'));
              var remainingString = _matchLink[j].substring(_matchLink[j].indexOf(']') + 1).trim();
              var _linkLink = remainingString.substring(1, remainingString.indexOf(')'));
              _linkLink = '<span class="isLink"><a href="' + _linkLink + '" target="_blank">' + _linkTxt + '</a></span>';
              txtArr[i] = txtArr[i].replace(_matchLink[j], _linkLink);
            }
          }
          // Matches bold markup *test* doesnot match * test *, *test *, * test*. If all these are required then replace \S with \s
          var _matchAstrik = txtArr[i].match(/\*\S([^*]*?)\S\*/g);
          if (_matchAstrik && _matchAstrik.length > 0) {
            for (j = 0; j < _matchAstrik.length; j++) {
              var _boldTxt = _matchAstrik[j];
              _boldTxt = _boldTxt.substring(1, _boldTxt.length - 1);
              _boldTxt = '<b>' + _boldTxt + '</b>';
              txtArr[i] = txtArr[i].replace(_matchAstrik[j], _boldTxt);
            }
          }
          // Matches bold markup ~test~ doesnot match ~ test ~, ~test ~, ~ test~. If all these are required then replace \S with \s
          var _matchItalic = txtArr[i].match(/\~\S([^*]*?)\S\~/g);
          if (_matchItalic && _matchItalic.length > 0) {
            for (j = 0; j < _matchItalic.length; j++) {
              var _italicTxt = _matchItalic[j];
              if (txtArr[i].indexOf(_italicTxt) === 0 || txtArr[i][txtArr[i].indexOf(_italicTxt) - 1] === ' ') {
                _italicTxt = _italicTxt.substring(1, _italicTxt.length - 1);
                _italicTxt = '<i class="markdownItalic">' + _italicTxt + '</i>';
                txtArr[i] = txtArr[i].replace(_matchItalic[j], _italicTxt);
              }
            }
          }
          // Matches bold markup ~test~ doesnot match ~ test ~, ~test ~, ~ test~. If all these are required then replace \S with \s
          var _matchPre = txtArr[i].match(/\`\`\`\S([^*]*?)\S\`\`\`/g);
          var _matchPre1 = txtArr[i].match(/\'\'\'\S([^*]*?)\S\'\'\'/g);
          if (_matchPre && _matchPre.length > 0) {
            for (j = 0; j < _matchPre.length; j++) {
              var _preTxt = _matchPre[j];
              _preTxt = _preTxt.substring(3, _preTxt.length - 3);
              _preTxt = '<pre>' + _preTxt + '</pre>';
              txtArr[i] = txtArr[i].replace(_matchPre[j], _preTxt);
            }
            _lineBreakAdded = true;
          }
          if (_matchPre1 && _matchPre1.length > 0) {
            for (j = 0; j < _matchPre1.length; j++) {
              var _preTxt = _matchPre1[j];
              _preTxt = _preTxt.substring(3, _preTxt.length - 3);
              _preTxt = '<pre>' + _preTxt + '</pre>';
              txtArr[i] = txtArr[i].replace(_matchPre1[j], _preTxt);
            }
            _lineBreakAdded = true;
          }
          if (!_lineBreakAdded && i > 0) {
            txtArr[i] = '\r\n' + txtArr[i];
          }
        }
        val = txtArr.join('');
        return val;
      }
    };
    
    function xssAttack(txtStr) {
    //   if (compObj && compObj[0] && compObj[0].componentType === "text") {
    
    var textHasXSS;
    if (txtStr) {
      textHasXSS = txtStr.isNotAllowedHTMLTags();
    }
    if (textHasXSS && !textHasXSS.isValid) {
      txtStr = txtStr.escapeHTML();
    }
    return txtStr;
    //return compObj[0].componentBody;
    
    }
    
    String.prototype.isNotAllowedHTMLTags = function() {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = this;
    
        var setFlags = {
          isValid: true,
          key: ''
        };
        if ($(wrapper).find('script').length || $(wrapper).find('video').length || $(wrapper).find('audio').length) {
          setFlags.isValid = false;
        }
        if ($(wrapper).find('link').length && $(wrapper).find('link').attr('href').indexOf('script') !== -1) {
          if (detectScriptTag.test($(wrapper).find('link').attr('href'))) {
            setFlags.isValid = false;
          } else {
            setFlags.isValid = true;
          }
        }
        if ($(wrapper).find('a').length && $(wrapper).find('a').attr('href').indexOf('script') !== -1) {
          if (detectScriptTag.test($(wrapper).find('a').attr('href'))) {
            setFlags.isValid = false;
          } else {
            setFlags.isValid = true;
          }
        }
        if ($(wrapper).find('img').length && $(wrapper).find('img').attr('src').indexOf('script') !== -1) {
          if (detectScriptTag.test($(wrapper).find('img').attr('href'))) {
            setFlags.isValid = false;
          } else {
            setFlags.isValid = true;
          }
        }
        if ($(wrapper).find('object').length) {
          setFlags.isValid = false;
        }
    
        return setFlags;
      };
    
    String.prototype.escapeHTML = function() {
        //'&': '&',
        var escapeTokens = {
          '<': '<',
          '>': '>',
          '"': '"',
          "'": '&#x27;'
        };
        var htmlTags = /[<>"']/g;
        return ('' + this).replace(htmlTags, function(match) {
          return escapeTokens[match];
        });
      };
    
    function unlockTextarea(){
      if (vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_form:visible").size() == 0 || vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_chatTextareaContainer_disabled").size() > 0) {
        vivocha.$("#vvc_widget_" + widget.custom.id + " #vivocha_media_chatTextarea").removeAttr('disabled');
        vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_chatTextareaContainer").removeClass('vivocha_media_chatTextareaContainer_disabled');
        vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_form").show();
        vivocha.$("#vvc_widget_" + widget.custom.id + " .vivocha_media_chatWaiting").hide();
        if(sessionStorage.vvcTransferred){//activate the file transfer only with a real agent
          vivocha.$("#vvc_widget_" + widget.custom.id + " .vvcfooter > *").fadeIn();
        }else{
          vivocha.$("#vvc_widget_" + widget.custom.id + " .vvcfooter > div").fadeIn();
        }
      }
    }
    