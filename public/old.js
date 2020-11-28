function goHome() {
  window.localStorage.href = "/";
}

function goTo(url) {
    var win = window.open(url, '_blank');
    win.focus();
}
window.goTo = goTo;

function goBack() {
  history.back();
}

function toggleHeaderMenu() {
  var menu = document.getElementById("nav-menu");
  var container = document.getElementById("hamburger-link");
  if (menu.style.display == "none" || menu.style.display == "") {
    menu.style.display = "block";
    container.style.display = "none";

    var overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.opacity = "0% !important";
    overlay.onclick = function() {
      toggleHeaderMenu();
    };
    document.getElementsByTagName("body")[0].appendChild(overlay);
  } else {
    menu.style.display = "none";
    container.style.display = "block";
    document.getElementById("overlay").remove();
  }
}

function buildAboutPageForm() {
  var form = document.createElement("form");
  form.classList.add("alignForm");

  form.action = "formHandlers/workWithUsSubmission.php";
  form.method = "POST";

  form.appendChild(textInput("Name", "Your Name*"));
  form.appendChild(
    textInput("Email", "How can we contact you?*", true, "email")
  );
  form.appendChild(textInput("Activity", "Message", true, "text", false));
  form.appendChild(document.createElement("hr"));
  form.appendChild(
    multipleCheckboxes("", [
      {
        name: "isartist",
        title: "I am an artist",
      },
      {
        name: "network",
        title: "I am interested in joining Monarch's network of creatives",
      },
      {
        name: "subscribe",
        title:
          "Keep me informed about up and coming artists and industry trends",
      },
    ])
  );

  var button = document.createElement("input");
  button.type = "submit";
  button.value = "Submit";
  form.appendChild(button);

  return form;
}

function buildArtistForm() {
  var form = document.createElement("form");
  form.classList.add("alignForm");

  form.action = "formHandlers/artistSubmission.php";
  form.method = "POST";

  var heading = document.createElement("h2");
  heading.innerText = "Artists, Managers, and Labels";
  heading.classList.add("pop-heading");
  form.appendChild(heading);

  var p = document.createElement("p");
  p.innerText =
    "Get in touch with a Monarch representative to discuss our custom marketing solutions and how we can help develop your artist brand";
  p.classList.add("popFormBlurb");
  form.appendChild(p);

  form.appendChild(textInput("Name", "Your Name*"));
  form.appendChild(
    textInput("Email", "How can we contact you?*", true, "email")
  );
  form.appendChild(
    textInput("Media", "Where can we find your content?", true, "url")
  );
  form.appendChild(document.createElement("hr"));
  form.appendChild(
    multiLineInput(
      "Briefly describe your project",
      "description",
      "What can Monarch help you with?*"
    )
  );

  var button = document.createElement("input");
  button.type = "submit";
  button.value = "Get in touch";
  form.appendChild(button);

  return form;
}

function buildNetworkForm() {
  var form = document.createElement("form");

  form.action = "formHandlers/networkSubmission.php";
  form.method = "POST";

  var heading = document.createElement("h2");
  heading.innerText = "Curators, Influencers, & Content Creators";
  heading.classList.add("pop-heading");
  form.appendChild(heading);

  var p = document.createElement("p");
  p.innerText =
    "We are constantly expanding our network so that we can create unique opportunities for the artists who work with Monarch. If you are a visual artist, photographer/videographer, venue, recording studio, producer, mixer, engineer, songwriter, mastering engineer, graphic designer, manager, brand, content creator, influencer, model, or playlister, or something more,  we’d love to get in touch!";
  p.classList.add("popFormBlurb");
  form.appendChild(p);

  form.appendChild(textInput("Name", "Your Name*"));
  form.appendChild(
    textInput("Email", "How can we contact you?*", true, "email")
  );
  form.appendChild(
    textInput("Link", "Where can we find your content?", true, "url", false)
  );

  form.appendChild(
    multipleCheckboxes("Classification - Select all that Apply", [
      {
        name: "Playlist",
        title: "Playlist Curator",
      },
      {
        name: "Influencer",
        title: "Social Media Influencer",
      },
      {
        name: "MediaPage",
        title: "Themed Media Page Curator",
      },
      {
        name: "Youtuber",
        title: "Youtuber / Vlogger",
      },
      {
        name: "Critic",
        title: "Music Critic / Reviewer",
      },
      {
        name: "Blogger",
        title: "Blogger / Journalist",
      },
      {
        name: "Other",
        title: "Other / Not Listed",
      },
    ])
  );

  var button = document.createElement("input");
  button.type = "submit";
  button.value = "Apply";
  form.appendChild(button);

  return form;
}

function buildFanForm() {
  var form = document.createElement("div");
  form.innerHTML = `
<div id="mc_embed_signup">
<form action="https://gmail.us10.list-manage.com/subscribe/post?u=540f9e64593d407a6880eb4e7&amp;id=aa062b0812" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
    <p class="popFormBlurb">Get emails when Monarch has a new release or announcement, never spammy, always secure. Unsubscibe anytime.</p>
<div class="mc-field-group textInput">
	
	<input type="email"  value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="What's your email?">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_540f9e64593d407a6880eb4e7_aa062b0812" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->`;
  return form;
}

function serviceTile(imageURL, body) {
  var container = document.createElement("div");
  container.classList.add("serviceTile");
}

function closePopUp() {
  var pop = document.getElementById("pop");
  if (pop) {
    pop.classList.remove("forwardAnimation");
    pop.classList.remove("popAnimation");
    void pop.offsetWidth;
    pop.classList.add("reverseAnimation");
    pop.classList.add("popAnimation");
    setTimeout(function() {
      pop.remove();
    }, 2000);
  }
  var overlay = document.getElementById("overlay");
  if (overlay) {
    setTimeout(function() {
      overlay.remove();
    }, 2000);
  }
}

function createPopUp(child) {
  //child should be a valid dom node containing the form to display in the popup
  if (document.getElementById("pop")) {
    document.getElementById("pop").remove();
  }
  if (document.getElementById("overlay")) {
    document.getElementById("overlay").remove();
  }

  var pop = document.createElement("div");
  pop.id = "pop";
  pop.classList.add("forwardAnimation");
  pop.classList.add("popAnimation");

  var letterhead = document.createElement("img");
  letterhead.src = "/logo_alt.png";
  letterhead.classList.add("letterhead");
  pop.appendChild(letterhead);

  pop.appendChild(child);

  var overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.classList.add("forwardAnimation");
  overlay.classList.add("overlayAnimation");
  overlay.onclick = function() {
    closePopUp();
  };

  var close = document.createElement("div");
  close.innerText = "X";
  close.style.position = "absolute";
  close.style.fontWeight = "bolder";
  close.style.top = "0";
  close.style.left = "0";
  close.style.padding = "3px";
  close.style.fontFamily = "monospace";
  close.style.fontSize = "xx-large";
  close.onclick = function() {
    closePopUp();
  };
  pop.appendChild(close);

  document.getElementsByTagName("body")[0].appendChild(overlay);
  document.getElementsByTagName("body")[0].appendChild(pop);
}

function radioInput(name, values) {
  //values is array of strings of radio button id/names
  var container = document.createElement("div");
  container.classList.add("multiInputContainer");

  var heading = document.createElement("h4");
  heading.innerText = name;
  container.appendChild(heading);

  for (var i = 0; i < values.length; i++) {
    var con = document.createElement("div");

    var label = document.createElement("label");
    label.innerText = values[i];
    label.for = values[i];

    var input = document.createElement("input");
    input.type = "radio";
    input.id = values[i];
    input.value = values[i];
    input.name = name;

    con.appendChild(input);
    con.appendChild(label);
    container.appendChild(con);
  }
  return container;
  s;
}

function checkBoxInput(name, title) {
  var container = document.createElement("div");
  container.classList.add("checkBoxContainer");

  var input = document.createElement("input");
  input.type = "checkbox";
  input.name = name;
  input.id = name;

  var label = document.createElement("label");
  label.innerText = title;
  label.htmlFor = name;

  container.appendChild(input);
  container.appendChild(label);

  return container;
}

function multipleCheckboxes(heading, checkboxes) {
  //checkboxes should be a array of objects. Each object should have a name and title set
  var container = document.createElement("div");

  var subHeading = document.createElement("h4");
  subHeading.innerText = heading;
  container.appendChild(subHeading);

  var con = document.createElement("div");
  con.style.display = "flex";
  con.style.flexDirection = "column";
  con.style.flexWrap = "wrap";
  con.style.width = "60%";
  con.style.justifyContent = "center";
  con.style.margin = "5%";
  con.style.paddingLeft = "10%";
  for (var i = 0; i < checkboxes.length; i++) {
    var box = checkBoxInput(checkboxes[i].name, checkboxes[i].title);
    con.appendChild(box);
  }
  container.appendChild(con);

  return container;
}

function multiLineInput(labelMessage, name, placeholder, row = false) {
  var container = document.createElement("div");

  container.classList.add("textInput");
  if (row) {
    container.style.flexDirection = "row";
  } else {
    container.style.flexDirection = "column";
  }

  var input = document.createElement("textarea");
  input.name = name;
  input.id = name;
  input.rows = 3;
  input.placeholder = placeholder;
  input.style.textAlign = "center";

  var label = document.createElement("label");
  label.for = name;
  label.classList.add("textInputLabel");
  label.innerText = labelMessage.toUpperCase() + ":";

  container.appendChild(label);

  var br = document.createElement("br");
  container.appendChild(br);
  container.appendChild(input);

  return container;
}

function textInput(
  name,
  placeholder,
  row = true,
  type = "text",
  required = true
) {
  var container = document.createElement("div");
  container.classList.add("textInput");
  if (row) {
    container.style.flexDirection = "row";
  } else {
    container.style.flexDirection = "column";
  }

  var input = document.createElement("input");
  input.type = type;
  input.name = name.split(" ")[0];
  input.id = name.split(" ")[0];
  input.placeholder = placeholder;
  input.style.textAlign = "center";

  if (required) {
    input.required = true;
  }

  /*var label = document.createElement("label");
    label.classList.add("textInputLabel");
    label.for = name;
    label.innerText = name.toUpperCase()+":";

    container.appendChild(label);*/
  container.appendChild(input);

  return container;
}
