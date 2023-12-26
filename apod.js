// icon-color: deep-purple; icon-glyph: certificate;

const requestUrl =
  "https://api.nasa.gov/planetary/apod?api_key=API_KEY&thumbs=true";
const widgetUrl = "WIDGET_URL";
const request = new Request(requestUrl);
const response = await request.loadJSON();
const widgetTitle = response.title;
const widgetDate = response.date;
let imageUrl = "";

if (response.media_type === "image") {
  imageUrl = response.url;
} else {
  imageUrl = response.thumbnail_url;
}

const imageRequest = new Request(imageUrl);
const imageResponse = await imageRequest.loadImage();

let widget = createWidget(imageResponse);

if (config.runsInWidget) {
  Script.setWidget(widget);
  Script.complete();
} else {
  widget.presentLarge();
}

function createWidget(image) {
  let widget = new ListWidget();

  widget.backgroundColor = Color.black();
  widget.url = widgetUrl;
  widget.backgroundImage = image;
  widget.addSpacer();

  let titleElement = widget.addText(widgetTitle);

  titleElement.font = Font.boldSystemFont(10);
  titleElement.textColor = Color.cyan();
  titleElement.minimumScaleFactor = 0.75;
  titleElement.rightAlignText();

  widget.addSpacer(2);

  const subtitleText = widget.addText(widgetDate);
  subtitleText.font = Font.systemFont(8);
  subtitleText.textColor = Color.white();
  subtitleText.textOpacity = 0.8;
  subtitleText.shadowRadius = 3;
  subtitleText.shadowColor = Color.black();
  subtitleText.rightAlignText();

  return widget;
}
