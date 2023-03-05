const EVENT_SOCIAL_LINK = 'social_click';
const EVENT_LANG_CHANGE = 'language_change';
const EVENT_SLAVA_UKRAINE = 'slava_ukraine';
const EVENT_MENU_CLICK = 'menu_click';
const EVENT_CV_DOWNLOAD = 'cv_download';
const EVENT_PROJECT_OPENED = 'project_opened';

export const gtmPushEvent = (event, attrs) => {
	dataLayer.push({ event, ...attrs });
};

export const gtmPushSocialLink = url => {
	gtmPushEvent(EVENT_SOCIAL_LINK, { url });
};

export const gtmPushLangChange = lang => {
	gtmPushEvent(EVENT_LANG_CHANGE, { lang });
};

export const gtmPushSlavaUkraine = () => {
	gtmPushEvent(EVENT_SLAVA_UKRAINE);
};

export const gtmPushMenuClick = section => {
	gtmPushEvent(EVENT_MENU_CLICK, { section });
};

export const gtmPushCVDownload = lang => {
	gtmPushEvent(EVENT_CV_DOWNLOAD, { lang });
};

export const gtmPushProjectOpened = url => {
	gtmPushEvent(EVENT_PROJECT_OPENED, { url });
};
